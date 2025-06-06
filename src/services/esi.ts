import { useTokenStore } from '@/stores/sso-token';
import SwaggerClient from 'swagger-client';

const esiSpecUrl = `https://${import.meta.env.VITE_EVE_ESI_DOMAIN}/${import.meta.env.VITE_EVE_ESI_VERSION}/swagger.json`;
const dataSource = import.meta.env.VITE_EVE_ESI_SERVER || 'tranquility';

const esi = new SwaggerClient({
  url: esiSpecUrl,
  requestInterceptor: (request: { headers: { [x: string]: string; }; }) => {
    const tokenStore = useTokenStore();
    const accessToken = tokenStore.accessToken;
    if (accessToken) {
      request.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return request;
  },
});

console.log(`ESI initialized with spec URL: ${esiSpecUrl}`, esi);
export default esi;
