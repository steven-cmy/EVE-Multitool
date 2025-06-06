// @ts-expect-error: Ignore type errors for swagger-client import
import SwaggerClient from 'swagger-client';

const esiSpecUrl = `https://${import.meta.env.VITE_EVE_ESI_DOMAIN}/${import.meta.env.VITE_EVE_ESI_VERSION}/swagger.json`;
export const dataSource = import.meta.env.VITE_EVE_ESI_SERVER || 'tranquility';


const accessToken = localStorage.getItem('sso-access-token') || '';
const refreshToken = localStorage.getItem('sso-refresh-token') || '';

export async function createESIClient() {
  return new SwaggerClient({
    url: esiSpecUrl,
    oAuth2: { token: { access_token: accessToken || null } },
  });
}

export function processEVEMarkup(markup: string): string {
  if (!markup) return '';
  return markup
    .replace(/href=showinfo:(\d+)/gi, (_, typeId) => {
      return `href="/types/${typeId}"`;
    })
    .replace(/<b>/g, '<span style="font-weight:bold;">')
    .replace(/<\/b>/g, '</span>')
    .replace(/<color=(\w+)>/g, (_, color) => {
      return `<span style="color:${color};">`;
    })
    .replace(/<\/color>/g, '</span>');
}
