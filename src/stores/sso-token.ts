import { computed, onMounted, ref } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router';
import axios from 'axios'
import pkceChallenge from "pkce-challenge";
import jwt from 'jsonwebtoken';

export const useTokenStore = defineStore('sso-token', () => {
  interface AuthServerSpec {
    authorization_endpoint?: string;
    token_endpoint?: string;
    [key: string]: string | undefined;
  }

  const accessToken = ref(localStorage.getItem("sso-access-token") || "")
  const refreshToken = ref(localStorage.getItem("sso-refresh-token") || "")
  const spec = ref<AuthServerSpec>({})
  const stateLength = 15
  const state = ref("")
  const router = useRouter()

  onMounted(async () => {
    spec.value = await getSpec()
  })

  async function getSpec(force: boolean = false, wellKnownEndpoint?: string): Promise<AuthServerSpec> {
    wellKnownEndpoint = wellKnownEndpoint ?? (import.meta.env.VITE_EVE_ESI_WELL_KNOWN_ENDPOINT || "https://login.eveonline.com/.well-known/oauth-authorization-server")
    if (!force) {
      const spec = localStorage.getItem("sso-auth-endpoint-spec")
      if (spec) {
        return JSON.parse(spec) as AuthServerSpec
      }
    }
    const response = await axios.get(wellKnownEndpoint as string)
    localStorage.setItem("sso-auth-endpoint-spec", JSON.stringify(response.data))
    return response.data as AuthServerSpec
  }

  const authEndpointUrl = computed(() => spec.value.authorization_endpoint || "https://login.eveonline.com/v2/oauth/authorize")
  const tokenEndpointUrl = computed(() => spec.value.token_endpoint || "https://login.eveonline.com/v2/oauth/token")
  const jwksEndpointUrl = computed(() => spec.value.jwks_uri || "https://login.eveonline.com/oauth/jwks")

  function setState() {
    state.value = Math.random().toString(36).substring(2, 2 + stateLength)
    localStorage.setItem("sso-state", state.value)
    return state.value
  }

  function checkState(inputState: string) {
    return state.value !== "" && inputState === state.value
  }

  async function generatePkceChallenge() {
    const challenge = await pkceChallenge(32);
    localStorage.setItem("sso-code-verifier", challenge.code_verifier);
    return challenge.code_challenge;
  }

  async function requestToken(authorizationCode: string, codeVerifier: string): Promise<any> {
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
    };
    const payload = new URLSearchParams({
      grant_type: 'authorization_code',
      code: authorizationCode,
      client_id: import.meta.env.VITE_EVE_ESI_CLIENT_ID,
      code_verifier: codeVerifier,
    });

    const response = await axios.post(tokenEndpointUrl.value, payload, { headers });
    if (response.status !== 200) {
      throw new Error('Token request failed');
    }

    return response.data;
  }

  function generateAuthUrl(scope: string, next: string, challenge: string): string {
    const state = setState() + next;
    const query = new URLSearchParams({
      response_type: 'code',
      client_id: import.meta.env.VITE_EVE_ESI_CLIENT_ID,
      redirect_uri: new URL(router.resolve({ name: "sso-callback" }).path, window.location.origin).href,
      scope: scope,
      state: state,
      code_challenge: challenge,
      code_challenge_method: 'S256',
    });
    console.log(`${authEndpointUrl.value}?${query.toString()}`)
    return `${authEndpointUrl.value}?${query.toString()}`;
  }

  async function validateToken() {
    const token = localStorage.getItem("sso-access-token")
    if (!token) {
      return false;
    }
    let res = await axios.get(jwksEndpointUrl.value)
    if (res.status !== 200) {
      getSpec(true)
      res = await axios.get(jwksEndpointUrl.value)
    }
    const jwks = res.data.keys
    jwks.forEach((key: any) => {
      try {
        const decoded = jwt.verify(token, publicKey, { algorithms: ['RS256'] });
        console.log('Token is valid:', decoded);
      } catch (err) {
        console.error('Token verification failed:', err);
      }
    })
    return token.value !== "" && token.value !== "null"
  }
  return { accessToken, refreshToken, stateLength, setState, checkState, generateAuthUrl, }
})
