import axios, {
  type AxiosResponse,
  type AxiosResponseHeaders,
  type InternalAxiosRequestConfig,
  type RawAxiosResponseHeaders,
} from 'axios';
import Dexie, { type EntityTable } from 'dexie';

export const axiosInstance = axios.create();

const DEBUG = true; // Set to false in production
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
  entries: EntityTable<ESIResponse, 'query'>;
};
db.version(1).stores({
  entries: 'query',
});
const cache = db.table('entries');

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
  const lang = response.headers['content-language'];
  const cached = await getCachedResponse(cacheKey, lang);
  const esiResponse = {
    data: response.data,
    headers: {
      ...response.headers,
    },
  };
  try {
    if (cached) {
      // Update existing cache entry
      log(`Updating cache for ${cacheKey} with language ${lang}`, esiResponse);
      await cache.update(cacheKey, (entry) => {
        entry.response[lang] = esiResponse;
      });
    } else {
      const q = await cache.get(cacheKey);
      if (!q) {
        log(`Creating new cache entry for ${cacheKey} with language ${lang}`, esiResponse);
        await cache.put({
          query: cacheKey,
          response: {
            [lang]: esiResponse,
          },
        });
      } else {
        // Add new language to existing cache entry
        log(`Adding new language ${lang} to existing cache entry for ${cacheKey}`, esiResponse);
        await cache.update(cacheKey, (entry) => {
          entry.response[lang] = esiResponse;
        });
      }
    }
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

      updateErrorLimitState(response.headers);

      let cached = null;
      try {
        cached = await cache.get(cacheKey);
      } catch (e) {
        console.warn('Cache read failed:', e);
        Promise.reject({
          ...error,
          message: `Cache read failed: ${e}`,
        });
      }
      if (cached) {
        // Update expiration if provided in 304 response
        if (response.headers.expires) {
          cached.headers.expires = response.headers.expires;
          try {
            cache.update(cacheKey, (entry) => {
              entry.headers.expires = new Date(response.headers.expires);
            });
          } catch (error) {
            console.warn('Cache update failed:', error);
          }
        }
        log('Cache HIT!(304)');
        // Return cached data with 200 status
        return Promise.resolve({
          data: cached.data,
          status: 200,
          statusText: 'OK',
          headers: {
            ...cached.headers,
            ...response.headers, // Merge any updated headers from 304 response
          },
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
