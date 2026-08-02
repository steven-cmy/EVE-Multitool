import axios, {
  type AxiosResponse,
  type AxiosResponseHeaders,
  type InternalAxiosRequestConfig,
  type RawAxiosResponseHeaders,
} from 'axios';
import Dexie, { type EntityTable } from 'dexie';

const DEBUG = false || import.meta.env.VITE_DEBUG; // Set to false in production
const log = (...args: unknown[]) => {
  if (DEBUG) {
    console.log(...args);
  }
};

const userAgent = `${__APP_NAME__}/${__APP_VERSION__} (${import.meta.env.VITE_EVE_ESI_ADMIN_EMAIL}; +${__REPO_URL__}) eve-esi-client-ts/${__EVE_ESI_CLIENT_TS_VERSION__}`;

export const axiosInstance = axios.create({
  headers: {
    'X-User-Agent': userAgent,
  },
});

interface ESIResponse {
  query: string;
  response: {
    [lang: string]: {
      data: object;
      headers: {
        [key: string]: unknown;
      };
    };
  };
}

interface RateLimitState {
  remaining: number;
  resetTime: number;
  windowSeconds?: number;
  lastUpdated: number;
}

const rateLimitStateByGroup = new Map<string, RateLimitState>();
const rateLimitGroupByRoute = new Map<string, string>();
let genericRetryAfterResetTime: number = NaN;

const db = new Dexie('EVEMultitool') as Dexie & {
  ESI: EntityTable<ESIResponse, 'query'>;
};
db.version(1).stores({
  ESI: 'query',
});
const cache = db.table('ESI');

// ESI Error Limit state
let errorLimitRemaining: number = NaN;
let errorLimitResetTime: number = NaN;

const getHeaderValue = (
  headers: RawAxiosResponseHeaders | AxiosResponseHeaders,
  key: string,
): string | undefined => {
  const value = headers[key];
  if (Array.isArray(value)) return value[0];
  if (typeof value === 'string') return value;
  if (typeof value === 'number') return String(value);
  return undefined;
};

const parseWindowSeconds = (windowPart: string | undefined): number | undefined => {
  if (!windowPart) return undefined;
  const match = windowPart.trim().match(/^(\d+)([smhd])$/i);
  if (!match) return undefined;
  const value = parseInt(match[1] ?? '0', 10);
  const unit = String(match[2]).toLowerCase();
  const multipliers: Record<string, number> = { s: 1, m: 60, h: 3600, d: 86400 };
  return value * (multipliers[unit] ?? 1);
};

const parseRetryAfterSeconds = (value: string | undefined): number | null => {
  if (!value) return null;
  const parsed = parseInt(value, 10);
  return Number.isNaN(parsed) ? null : parsed;
};

const getRouteKey = (config: InternalAxiosRequestConfig<unknown>) => {
  const method = String(config.method ?? 'GET').toUpperCase();
  return `${method}:${config.url ?? ''}`;
};

const clearExpiredErrorLimit = () => {
  const now = Date.now();
  if (!Number.isNaN(errorLimitResetTime) && now >= errorLimitResetTime) {
    errorLimitRemaining = NaN;
    errorLimitResetTime = NaN;
  }
  if (!Number.isNaN(genericRetryAfterResetTime) && now >= genericRetryAfterResetTime) {
    genericRetryAfterResetTime = NaN;
  }
  for (const [group, state] of rateLimitStateByGroup.entries()) {
    if (!Number.isNaN(state.resetTime) && now >= state.resetTime) {
      rateLimitStateByGroup.delete(group);
    }
  }
};

const shouldBlockRequest = (config?: InternalAxiosRequestConfig<unknown>) => {
  clearExpiredErrorLimit();
  const now = Date.now();

  if (!Number.isNaN(genericRetryAfterResetTime) && now < genericRetryAfterResetTime) {
    return {
      blocked: true,
      kind: 'retry-after' as const,
      resetTime: genericRetryAfterResetTime,
    };
  }

  if (config) {
    const routeKey = getRouteKey(config);
    const routeGroup = rateLimitGroupByRoute.get(routeKey);
    if (routeGroup) {
      const groupState = rateLimitStateByGroup.get(routeGroup);
      if (
        groupState &&
        !Number.isNaN(groupState.resetTime) &&
        now < groupState.resetTime &&
        groupState.remaining <= 0
      ) {
        return {
          blocked: true,
          kind: 'group' as const,
          group: routeGroup,
          remaining: groupState.remaining,
          resetTime: groupState.resetTime,
        };
      }
    }
  }

  if (
    !Number.isNaN(errorLimitRemaining) &&
    !Number.isNaN(errorLimitResetTime) &&
    now < errorLimitResetTime &&
    errorLimitRemaining <= 0
  ) {
    return {
      blocked: true,
      kind: 'error-limit' as const,
      remaining: errorLimitRemaining,
      resetTime: errorLimitResetTime,
    };
  }

  return { blocked: false };
};

const updateRateLimitState = (
  headers: RawAxiosResponseHeaders | AxiosResponseHeaders,
  config?: InternalAxiosRequestConfig<unknown>,
) => {
  const group = getHeaderValue(headers, 'x-ratelimit-group');
  const retryAfter = parseRetryAfterSeconds(getHeaderValue(headers, 'retry-after'));

  if (group) {
    const remainingHeader = getHeaderValue(headers, 'x-ratelimit-remaining');
    const limitHeader = getHeaderValue(headers, 'x-ratelimit-limit');
    const windowPart = limitHeader?.split('/')[1];
    const windowSeconds = parseWindowSeconds(windowPart);

    const existingState = rateLimitStateByGroup.get(group);
    const rateState: RateLimitState = existingState
      ? {
          ...existingState,
          windowSeconds: windowSeconds ?? existingState.windowSeconds,
          lastUpdated: Date.now(),
        }
      : {
          remaining: Number.POSITIVE_INFINITY,
          resetTime: NaN,
          windowSeconds,
          lastUpdated: Date.now(),
        };

    if (remainingHeader !== undefined) {
      const remaining = parseFloat(remainingHeader);
      if (!Number.isNaN(remaining)) {
        rateState.remaining = Math.floor(remaining);
      }
    }

    if (windowSeconds !== undefined) {
      rateState.windowSeconds = windowSeconds;
    }

    if (retryAfter !== null) {
      rateState.resetTime = Date.now() + retryAfter * 1000;
    } else if (Number.isNaN(rateState.resetTime) && rateState.windowSeconds) {
      rateState.resetTime = Date.now() + rateState.windowSeconds * 1000;
    }

    rateLimitStateByGroup.set(group, rateState);
    if (config) {
      rateLimitGroupByRoute.set(getRouteKey(config), group);
    }
    return;
  }

  const remaining = getHeaderValue(headers, 'x-esi-error-limit-remain');
  const resetSeconds = getHeaderValue(headers, 'x-esi-error-limit-reset');

  if (remaining !== undefined) {
    const parsedRemaining = parseInt(remaining, 10);
    if (!Number.isNaN(parsedRemaining)) {
      errorLimitRemaining = parsedRemaining;
    }
  }

  if (resetSeconds !== undefined) {
    const parsedReset = parseInt(resetSeconds, 10);
    if (!Number.isNaN(parsedReset)) {
      errorLimitResetTime = Date.now() + parsedReset * 1000;
    }
  }

  if (retryAfter !== null) {
    genericRetryAfterResetTime = Date.now() + retryAfter * 1000;
  }
};

const getQuery = (config: InternalAxiosRequestConfig<unknown>) => {
  if (config.method === 'get') {
    const params = new URLSearchParams(config.params ? config.params : {}).toString();
    return params ? `${config.url}?${params}` : `${config.url}`;
  } else if (config.method === 'post') {
    return `${config.url}?${JSON.stringify(config.data)}`;
  }
  return `${config.url}`;
};

const getCachedResponse = async (cacheKey: string, lang: string) => {
  try {
    const q = await cache.get(cacheKey);
    if (q && q.response[lang]) {
      return q.response[lang];
    }
  } catch (error) {
    console.warn('Cache read failed:', error);
  }
  return null;
};

const cacheResponse = async (cacheKey: string, response: AxiosResponse) => {
  const lang = String(response.headers['content-language'] ?? 'en');
  const esiResponse = {
    data: response.data,
    headers: {
      ...response.headers,
    },
  };

  try {
    const existing = await cache.get(cacheKey);
    if (existing?.response) {
      log(`Updating cache for ${cacheKey} with language ${lang}`, esiResponse);
      await cache.update(cacheKey, (entry) => {
        entry.response = {
          ...entry.response,
          [lang]: esiResponse,
        };
      });
      return;
    }

    log(`Creating new cache entry for ${cacheKey} with language ${lang}`, esiResponse);
    await cache.put({
      query: cacheKey,
      response: {
        [lang]: esiResponse,
      },
    });
  } catch (error) {
    console.warn('Cache write failed:', error);
  }
};

axiosInstance.interceptors.request.use(async (config) => {
  // Check rate limit state before making any request
  const blockState = shouldBlockRequest(config);
  if (blockState.blocked) {
    const resetTime = blockState.resetTime ?? Date.now();
    const secondsUntilReset = Math.max(0, Math.ceil((resetTime - Date.now()) / 1000));
    return Promise.reject({
      __rateLimitExceeded: true,
      kind: blockState.kind,
      message:
        blockState.kind === 'retry-after'
          ? `ESI rate limit exceeded; retry after ${secondsUntilReset} seconds.`
          : blockState.kind === 'group'
            ? `ESI rate limit group '${blockState.group}' exhausted. Retry in ${secondsUntilReset} seconds.`
            : `ESI error limit exceeded. ${blockState.remaining} errors remaining. Retry in ${secondsUntilReset} seconds.`,
      remaining: blockState.remaining,
      retryAfterSeconds: secondsUntilReset,
      resetTime,
      group: blockState.kind === 'group' ? blockState.group : undefined,
    });
  }

  const cacheKey = getQuery(config);
  const cached = await getCachedResponse(cacheKey, config.headers['Accept-Language'] || 'en');

  if (cached) {
    config.headers.set('If-None-Match', cached.headers.etag);
    const expirationDate = new Date(cached.headers.expires);
    if (!isNaN(expirationDate.getTime()) && expirationDate > new Date()) {
      log(`Cache HIT for ${cacheKey} in ${config.headers['Accept-Language']}!`, cached);
      // Return cached response
      return Promise.reject({
        __cached: true,
        data: cached.data,
        headers: cached.headers,
        config: config,
      });
    }
  } else {
    log(`Cache MISS for ${cacheKey} in ${config.headers['Accept-Language']}!`);
    config.headers.set('If-None-Match', '');
  }
  return config;
});

axiosInstance.interceptors.response.use(
  async (response) => {
    // Update rate limit state from all responses
    updateRateLimitState(response.headers, response.config);

    // Cache responses
    const cacheKey = getQuery(response.config);
    await cacheResponse(cacheKey, response);
    return response;
  },
  async (error) => {
    // Handle special error cases first
    if (error.__cached) {
      return Promise.resolve({
        status: 200,
        statusText: 'OK',
        data: error.data,
        headers: error.headers || {},
        config: error.config,
      });
    }

    if (error.status === 304) {
      const response = error.response;
      const cacheKey = getQuery(response.config);
      const lang = String(response.headers['content-language'] ?? 'en');

      updateRateLimitState(response.headers, response.config);

      let cachedEntry = null;
      try {
        cachedEntry = await cache.get(cacheKey);
      } catch (e) {
        console.warn('Cache read failed:', e);
        return Promise.reject({
          ...error,
          message: `Cache read failed: ${e}`,
        });
      }

      const cached = cachedEntry?.response?.[lang];
      if (cached) {
        if (response.headers.expires) {
          try {
            await cache.update(cacheKey, (entry) => {
              entry.response = {
                ...entry.response,
                [lang]: {
                  ...entry.response[lang],
                  headers: {
                    ...entry.response[lang]?.headers,
                    expires: response.headers.expires,
                  },
                },
              };
            });
          } catch (updateError) {
            console.warn('Cache update failed:', updateError);
          }
        }
        log(`Cache HIT (304) for ${cacheKey} in ${lang}!`, cached);
        return Promise.resolve({
          data: cached.data,
          status: 200,
          statusText: 'OK',
          headers: {
            ...cached.headers,
            ...response.headers,
          },
          config: response.config,
        });
      }
    }

    if (error.__errorLimitExceeded) {
      return Promise.reject(error);
    }

    // Update rate limit state from error responses too
    if (error.response?.headers) {
      updateRateLimitState(error.response.headers, error.response.config);
    }

    return Promise.reject(error);
  },
);

// Optional: Export functions to check current error limit state
export const getErrorLimitState = () => ({
  remaining: errorLimitRemaining,
  resetTime: errorLimitResetTime,
  resetInSeconds: errorLimitResetTime ? Math.ceil((errorLimitResetTime - Date.now()) / 1000) : null,
  isBlocked: shouldBlockRequest(),
});

// Optional: Export function to inspect current rate limit group state
export const getRateLimitState = () => ({
  groups: Array.from(rateLimitStateByGroup.entries()).map(([group, state]) => ({
    group,
    remaining: state.remaining,
    windowSeconds: state.windowSeconds,
    resetTime: state.resetTime,
    resetInSeconds: Number.isNaN(state.resetTime)
      ? null
      : Math.max(0, Math.ceil((state.resetTime - Date.now()) / 1000)),
    lastUpdated: state.lastUpdated,
  })),
  routeGroups: Object.fromEntries(rateLimitGroupByRoute.entries()),
  genericRetryAfterResetTime,
  genericRetryAfterSeconds: Number.isNaN(genericRetryAfterResetTime)
    ? null
    : Math.max(0, Math.ceil((genericRetryAfterResetTime - Date.now()) / 1000)),
  errorLimit: {
    remaining: errorLimitRemaining,
    resetTime: errorLimitResetTime,
    resetInSeconds: errorLimitResetTime
      ? Math.ceil((errorLimitResetTime - Date.now()) / 1000)
      : null,
  },
  isBlocked: shouldBlockRequest(),
});

// Optional: Export function to manually reset error limit (for testing or manual intervention)
export const resetErrorLimit = () => {
  errorLimitRemaining = NaN;
  errorLimitResetTime = NaN;
};
