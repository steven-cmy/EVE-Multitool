import { createRouter, createWebHistory } from 'vue-router';
import sso from '@/router/sso';
import types from '@/router/types';
import epoch from '@/router/epoch';
import harvest from '@/router/harvest';
import rdf from '@/router/rdf';

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
    ...sso,
    ...types,
    ...epoch,
    ...harvest,
    ...rdf,
  ],
});

export default router;
