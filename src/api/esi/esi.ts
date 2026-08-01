import axios, {
  type AxiosResponse,
  type AxiosResponseHeaders,
  type InternalAxiosRequestConfig,
  type RawAxiosResponseHeaders,
} from 'axios';
import Dexie, { type EntityTable } from 'dexie';

export const axiosInstance = axios.create();

const DEBUG = false || import.meta.env.VITE_DEBUG; // Set to false in production
const log = (...args: unknown[]) => {
  if (DEBUG) {
    console.log(...args);
  }
};

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

// Check if we should block requests due to error limit
const shouldBlockRequest = () => {
  if (Number.isNaN(errorLimitRemaining) || Number.isNaN(errorLimitResetTime)) {
    return false; // No error limit info yet, allow request
  }

  const now = Date.now();

  // Check if reset time has passed
  if (now >= errorLimitResetTime) {
    // Reset time has passed, clear the limits
    errorLimitRemaining = NaN;
    errorLimitResetTime = NaN;
    return false;
  }

  // Block if no errors remaining
  return errorLimitRemaining <= 0;
};

// Update error limit state from response headers
const updateErrorLimitState = (headers: RawAxiosResponseHeaders | AxiosResponseHeaders) => {
  const remaining = headers['x-esi-error-limit-remain'];
  const resetSeconds = headers['x-esi-error-limit-reset'];

  if (remaining !== undefined) {
    errorLimitRemaining = parseInt(remaining, 10);
  }

  if (resetSeconds !== undefined) {
    const resetSecondsInt = parseInt(resetSeconds, 10);
    errorLimitResetTime = Date.now() + resetSecondsInt * 1000;
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
  // Check error limit before making any request
  if (shouldBlockRequest()) {
    const secondsUntilReset = Math.ceil((errorLimitResetTime - Date.now()) / 1000);
    return Promise.reject({
      __errorLimitExceeded: true,
      message: `ESI error limit exceeded. ${errorLimitRemaining} errors remaining. Retry in ${secondsUntilReset} seconds.`,
      remainingErrors: errorLimitRemaining,
      retryAfterSeconds: secondsUntilReset,
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
    // Update error limit state from all responses
    updateErrorLimitState(response.headers);

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

      updateErrorLimitState(response.headers);

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
        log('Cache HIT!(304)');
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

    // Update error limit state from error responses too
    if (error.response?.headers) {
      updateErrorLimitState(error.response.headers);
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

// Optional: Export function to manually reset error limit (for testing or manual intervention)
export const resetErrorLimit = () => {
  errorLimitRemaining = NaN;
  errorLimitResetTime = NaN;
};
