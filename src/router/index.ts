import { createRouter, createWebHistory } from 'vue-router';
import { useTokenStore } from '@/stores/sso-token';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/types',
      component: () => import('../views/esiTypes/esiTypes.vue'),
      children: [
        {
          path: '',
          component: () => import('../views/esiTypes/TypeList.vue'),
          name: 'types-list',
        },
        {
          path: ':typeid',
          component: () => import('../views/esiTypes/TypesView.vue'),
          name: 'types-showinfo',
          props: true,
        },
      ],
    },
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
            window.location.href = url;
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
  ],
});

export default router;
