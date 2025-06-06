// @ts-expect-error: Ignore type errors for swagger-client import
import SwaggerClient from 'swagger-client';

const esiSpecUrl = `https://${import.meta.env.VITE_EVE_ESI_DOMAIN}/${import.meta.env.VITE_EVE_ESI_VERSION}/swagger.json`;
export const dataSource = import.meta.env.VITE_EVE_ESI_SERVER || 'tranquility';

const accessToken = localStorage.getItem('sso-access-token') || '';
const refreshToken = localStorage.getItem('sso-refresh-token') || '';

export async function createESIClient() {
  return new SwaggerClient({
    url: esiSpecUrl,
    requestInterceptor: (req: { headers: Record<string, string> }) => {
      req.headers['User-Agent'] = 'EVE Online API Client';
      if (accessToken) {
        req.headers['Authorization'] = `Bearer ${accessToken}`;
      }
      return req;
    },
    responseInterceptor: (res: { status: number }) => {
      if (res.status === 401 && refreshToken) {
        // Handle token refresh logic here if needed
        console.warn('Received 401 Unauthorized, consider refreshing token');
      }
      return res;
    },
  });
}
