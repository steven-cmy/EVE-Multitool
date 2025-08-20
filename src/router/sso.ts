import { useTokenStore } from '@/stores/TokenStore';
import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/sso',
    name: 'sso',
    children: [
      {
        path: 'login',
        name: 'sso-login',
        component: () => import('../views/SSOView.vue'),
        beforeEnter: async (to, from) => {
          const tokenStore = useTokenStore();
          tokenStore.clearTokens();
          const url = await tokenStore.generateAuthUrl(
            to.query.scope as string,
            (to.query.redirect as string) || from.fullPath,
          );
          window.location.replace(url);
        },
      },
      {
        path: 'callback',
        name: 'sso-callback',
        component: () => import('../views/SSOView.vue'),
        beforeEnter: async (to) => {
          const tokenStore = useTokenStore();
          return await tokenStore.callbackHandler(
            to.query.code as string,
            to.query.state as string,
          );
        },
      },
    ],
  },
];

export default routes;
