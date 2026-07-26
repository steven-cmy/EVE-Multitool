import axios, { type AxiosResponse, type InternalAxiosRequestConfig } from 'axios';
import Dexie, { type EntityTable } from 'dexie';

export const axiosInstance = axios.create();

const baseUrl = import.meta.env.VITE_EVETYCOON_API_ENDPOINT;
const version = 'v1';
export const endpoint = `${baseUrl}/${version}`;

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
}

const db = new Dexie('EVEMultitool') as Dexie & {
  EVETycoon: EntityTable<Response, 'query'>;
};
db.version(1).stores({
  EVETycoon: 'query',
});
const cache = db.table('EVETycoon');

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
    });
  } catch (error) {
    console.warn('Cache write failed:', error);
  }
};

axiosInstance.interceptors.request.use(async (config) => {
  const cacheKey = getQuery(config);
  const cached = await getCachedResponse(cacheKey);

  const cachedPayload = getCachedPayload(cached);
  if (cachedPayload) {
    const expirationHeader = cachedPayload.headers?.expires;
    const expirationDate = expirationHeader ? new Date(expirationHeader as string) : null;
    if (expirationDate && !isNaN(expirationDate.getTime()) && expirationDate > new Date()) {
      log(`Cache HIT for ${cacheKey}!`, cachedPayload);
      return Promise.reject({
        __cached: true,
        data: cachedPayload.data,
        headers: cachedPayload.headers,
        config: config,
      });
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
