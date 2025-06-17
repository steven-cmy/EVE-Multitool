import axios, { type AxiosResponseHeaders, type RawAxiosResponseHeaders } from 'axios';

export const axiosInstance = axios.create();

const cache = new Map();

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

axiosInstance.interceptors.request.use((config) => {
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
  let cacheKey;
  if (config.method === 'get') {
    cacheKey = `${config.url}?${JSON.stringify(config.params)}`;
  } else if (config.method === 'post') {
    cacheKey = `${config.url}?${JSON.stringify(config.data)}`;
  }
  const cached = cache.get(cacheKey);

  if (cached) {
    config.headers.set('If-None-Match', cached.etag);
    if (new Date(cached.expireOn) > new Date()) {
      // Return cached response
      return Promise.reject({
        __cached: true,
        data: cached.data,
      });
    }
  }

  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    // Update error limit state from all responses
    updateErrorLimitState(response.headers);

    // Handle 304 Not Modified
    if (response.status === 304) {
      const method = response.config.method;
      let cacheKey;

      if (method === 'get') {
        cacheKey = `${response.config.url}?${JSON.stringify(response.config.params)}`;
      } else if (method === 'post') {
        cacheKey = `${response.config.url}?${JSON.stringify(response.config.data)}`;
      }

      const cached = cache.get(cacheKey);
      if (cached) {
        // Update expiration if provided in 304 response
        if (response.headers.expires) {
          cached.expireOn = response.headers.expires;
          cache.set(cacheKey, cached);
        }
        console.log('Cache HIT!(304)');
        // Return cached data with 200 status
        return {
          ...cached.data,
          status: 200,
          statusText: 'OK',
          headers: {
            ...cached.data.headers,
            ...response.headers, // Merge any updated headers from 304 response
          },
        };
      }
    }

    // Cache responses
    let cacheKey;
    if (response.config.method === 'get') {
      cacheKey = `${response.config.url}?${JSON.stringify(response.config.params)}`;
    } else if (response.config.method === 'post') {
      cacheKey = `${response.config.url}?${JSON.stringify(response.config.data)}`;
    }
    cache.set(cacheKey, response);
    return response;
  },
  (error) => {
    // Handle special error cases first
    if (error.__cached) {
      console.log('Cache HIT!');
      return Promise.resolve({ data: error.data });
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
