import axios, { type AxiosResponse, type InternalAxiosRequestConfig } from 'axios';
import Dexie, { type EntityTable } from 'dexie';

export const axiosInstance = axios.create();

export const baseDomain = import.meta.env.VITE_FUZZWORK_DOMAIN || 'fuzzwork.co.uk';

const DEBUG = false || import.meta.env.VITE_DEBUG; // Set to false in production
const log = (...args: unknown[]) => {
  if (DEBUG) {
    console.log(...args);
  }
};

interface Response {
  query: string;
  response: {
    data: object;
    headers: {
      [key: string]: unknown;
    };
  };
  cachedAt: number;
}

const db = new Dexie('EVEMultitool') as Dexie & {
  Fuzzwork: EntityTable<Response, 'query'>;
};
db.version(1).stores({
  Fuzzwork: 'query',
});
const cache = db.table('Fuzzwork');

const getQuery = (config: InternalAxiosRequestConfig<unknown>) => {
  if (config.method === 'get') {
    const params = new URLSearchParams(config.params ? config.params : {}).toString();
    return params ? `${config.url}?${params}` : `${config.url}`;
  } else if (config.method === 'post') {
    return `${config.url}?${JSON.stringify(config.data)}`;
  }
  return `${config.url}`;
};

const getCachedResponse = async (cacheKey: string) => {
  try {
    const q = await cache.get(cacheKey);
    if (q) return q;
  } catch (error) {
    console.warn('Cache read failed:', error);
  }
  return null;
};

const getCachedPayload = (cached: Response | null | undefined) => {
  if (!cached) return null;
  if ('response' in cached && cached.response) {
    return cached.response;
  }

  return {
    data: (cached as { data?: unknown }).data,
    headers: (cached as { headers?: Record<string, unknown> }).headers || {},
  };
};

const cacheResponse = async (cacheKey: string, response: AxiosResponse) => {
  const raw = {
    data: response.data,
    headers: {
      ...response.headers,
    },
  };

  log(`Caching for ${cacheKey}`, raw);
  try {
    await cache.put({
      query: cacheKey,
      response: raw,
      cachedAt: Date.now(),
    });
  } catch (error) {
    console.warn('Cache write failed:', error);
  }
};

// 请求拦截器中，替换过期判断逻辑：
axiosInstance.interceptors.request.use(async (config) => {
  const cacheKey = getQuery(config);
  const cached = await getCachedResponse(cacheKey);

  const cachedPayload = getCachedPayload(cached);
  if (cachedPayload) {
    const cacheControl = cachedPayload.headers?.['cache-control'] as string | undefined;
    let maxAge = 0;

    if (cacheControl) {
      const match = cacheControl.match(/max-age=(\d+)/);
      if (match && match[1]) {
        maxAge = parseInt(match[1], 10);
      }
    }

    const isFresh = maxAge > 0 && cached?.cachedAt && Date.now() - cached.cachedAt < maxAge * 1000;

    if (isFresh) {
      log(`Cache HIT for ${cacheKey}!`, cachedPayload);
      return Promise.reject({
        __cached: true,
        data: cachedPayload.data,
        headers: cachedPayload.headers,
        config: config,
      });
    } else {
      log(`Cache STALE for ${cacheKey} (max-age=${maxAge})`);
    }
  } else {
    log(`Cache MISS for ${cacheKey}!`);
  }
  return config;
});

axiosInstance.interceptors.response.use(
  async (response) => {
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

    console.error('Failed:', error?.response?.data || error?.message || error);
    return Promise.reject(error);
  },
);
