import axios, {
  type AxiosResponseHeaders,
  type InternalAxiosRequestConfig,
  type RawAxiosResponseHeaders,
} from 'axios';
import Dexie, { type EntityTable } from 'dexie';

export const axiosInstance = axios.create();

interface ESIQuery {
  query: string;
  data: object;
  headers: {
    etag: string;
    expires: Date;
    [key: string]: unknown;
  };
}

const db = new Dexie('EVEMultitool') as Dexie & {
  entries: EntityTable<ESIQuery, 'query'>;
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
  let cached = null;
  try {
    cached = await cache.get(cacheKey);
  } catch (error) {
    console.warn('Cache read failed:', error);
  }

  if (cached) {
    config.headers.set('If-None-Match', cached.headers.etag);
    const expirationDate = new Date(cached.headers.expires);
    if (!isNaN(expirationDate.getTime()) && expirationDate > new Date()) {
      // Return cached response
      return Promise.reject({
        __cached: true,
        data: cached.data,
        headers: cached.headers,
        config: config,
      });
    }
  }
  return config;
});

axiosInstance.interceptors.response.use(
  async (response) => {
    // Update error limit state from all responses
    updateErrorLimitState(response.headers);

    // Cache responses
    const cacheKey = getQuery(response.config);
    try {
      cache.put({
        query: cacheKey,
        data: response.data,
        headers: response.headers,
      });
    } catch (error) {
      console.warn('Cache write failed:', error);
    }
    return response;
  },
  async (error) => {
    // Handle special error cases first
    if (error.__cached) {
      console.log('Cache HIT!');
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
        console.log('Cache HIT!(304)');
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
