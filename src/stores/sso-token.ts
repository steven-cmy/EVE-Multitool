import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import { useRouter } from 'vue-router';
import axios from 'axios';
import pkceChallenge from 'pkce-challenge';
import * as jose from 'jose';

export const useTokenStore = defineStore('sso-token', () => {
  interface AuthServerSpec {
    authorization_endpoint?: string;
    token_endpoint?: string;
    jwks_uri?: string;
    [key: string]: string | undefined;
  }

  const accessToken = ref(localStorage.getItem('sso-access-token') || '');
  const refreshToken = ref(localStorage.getItem('sso-refresh-token') || '');
  const spec = computed(async () => {
    const localSpec = localStorage.getItem('sso-auth-endpoint-spec');
    if (!localSpec) {
      const wellKnownEndpoint =
        import.meta.env.VITE_EVE_ESI_WELL_KNOWN_ENDPOINT ||
        'https://login.eveonline.com/.well-known/oauth-authorization-server';
      const response = await axios.get(wellKnownEndpoint as string);
      localStorage.setItem('sso-auth-endpoint-spec', JSON.stringify(response.data));
      return response.data as AuthServerSpec;
    }
    return JSON.parse(localStorage.getItem('sso-auth-endpoint-spec') || '{}') as AuthServerSpec;
  });
  const stateLength = 15;
  const state = ref();
  const router = useRouter();

  const authEndpointUrl = computed(
    async () =>
      (await spec.value).authorization_endpoint || 'https://login.eveonline.com/v2/oauth/authorize',
  );
  const tokenEndpointUrl = computed(
    async () => (await spec.value).token_endpoint || 'https://login.eveonline.com/v2/oauth/token',
  );
  const jwksEndpointUrl = computed(
    async () => (await spec.value).jwks_uri || 'https://login.eveonline.com/oauth/jwks',
  );

  function setState() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const cryptoArray = new Uint32Array(stateLength);
    crypto.getRandomValues(cryptoArray);
    state.value = Array.from(cryptoArray, (num) => characters[num % characters.length]).join('');
    sessionStorage.setItem('sso-state', state.value);
    return state.value;
  }

  function checkState(inputState: string) {
    state.value = sessionStorage.getItem('sso-state') || '';
    sessionStorage.removeItem('sso-state');
    return state.value !== '' && inputState === state.value;
  }

  async function generatePkceChallenge() {
    const challenge = await pkceChallenge();
    sessionStorage.setItem('sso-code-verifier', challenge.code_verifier);
    return challenge.code_challenge;
  }

  async function generateAuthUrl(scope: string, next: string): Promise<string> {
    const state = setState() + next;
    const query = new URLSearchParams({
      response_type: 'code',
      client_id: import.meta.env.VITE_EVE_ESI_CLIENT_ID,
      redirect_uri: new URL(router.resolve({ name: 'sso-callback' }).path, window.location.origin)
        .href,
      scope: scope,
      state: state,
      code_challenge: await generatePkceChallenge(),
      code_challenge_method: 'S256',
    });
    return `${await authEndpointUrl.value}?${query.toString()}`;
  }

  async function callbackHandler(
    authorizationCode: string,
    state: string,
  ): Promise<string | { name: string }> {
    const next = state.substring(stateLength);
    state = state.substring(0, stateLength);

    if (!checkState(state)) {
      console.error('State mismatch in SSO callback');
      return next || { name: 'home' };
    }
    if ((await exchangeToken(authorizationCode)) === undefined) {
      console.error('Failed to exchange token in SSO callback');
      return next || { name: 'home' };
    }
    const payload = await validateToken();
    if (!payload) {
      console.error('Token validation failed in SSO callback');
      return next || { name: 'home' };
    }
    return next || { name: 'home' };
  }

  async function exchangeToken(authorizationCode: string): Promise<string | undefined> {
    const codeVerifier = sessionStorage.getItem('sso-code-verifier');
    sessionStorage.removeItem('sso-code-verifier');
    if (!codeVerifier) {
      console.error('Code verifier not found in session storage');
      return undefined;
    }
    await axios
      .post(
        await tokenEndpointUrl.value,
        new URLSearchParams({
          grant_type: 'authorization_code',
          code: authorizationCode,
          client_id: import.meta.env.VITE_EVE_ESI_CLIENT_ID,
          code_verifier: codeVerifier,
        }),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      )
      .then((response) => {
        if (response.status === 200) {
          accessToken.value = response.data.access_token;
          refreshToken.value = response.data.refresh_token;
          localStorage.setItem('sso-access-token', accessToken.value);
          localStorage.setItem('sso-refresh-token', refreshToken.value);
        } else {
          console.error('Failed to exchange token:', response.statusText);
          return undefined;
        }
      })
      .catch((error) => {
        console.error('Error exchanging token:', error);
        return undefined;
      });
    return accessToken.value;
  }

  async function validateToken(): Promise<jose.JWTPayload | undefined> {
    if (!accessToken.value) {
      accessToken.value = localStorage.getItem('sso-access-token') || '';
      if (!accessToken.value) {
        console.error('No access token found');
        clearTokens();
        return undefined;
      }
    }
    const JWKS = jose.createRemoteJWKSet(new URL(await jwksEndpointUrl.value));
    try {
      const { payload } = await jose.jwtVerify(accessToken.value, JWKS);
      return payload;
    } catch (error) {
      console.error('JWT verification failed:', error);
      return undefined;
    }
  }

  async function refreshAccessToken(): Promise<string | undefined> {
    if (!refreshToken.value) {
      console.error('No refresh token found');
      clearTokens();
      return undefined;
    }
    try {
      const response = await axios.post(
        await tokenEndpointUrl.value,
        new URLSearchParams({
          grant_type: 'refresh_token',
          refresh_token: refreshToken.value,
          client_id: import.meta.env.VITE_EVE_ESI_CLIENT_ID,
        }),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      );
      if (response.status === 200) {
        accessToken.value = response.data.access_token;
        refreshToken.value = response.data.refresh_token;
        localStorage.setItem('sso-access-token', accessToken.value);
        localStorage.setItem('sso-refresh-token', refreshToken.value);
        return accessToken.value;
      }
    } catch (error) {
      console.error('Error refreshing token:', error);
      clearTokens();
    }
    return undefined;
  }

  function clearTokens() {
    accessToken.value = '';
    refreshToken.value = '';
    localStorage.removeItem('sso-access-token');
    localStorage.removeItem('sso-refresh-token');
  }

  return {
    accessToken,
    refreshToken,
    generateAuthUrl,
    callbackHandler,
    validateToken,
    refreshAccessToken,
    clearTokens,
  };
});
