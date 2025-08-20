import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

const modules = import.meta.glob(['@/router/**/*.ts', '!@/router/index.ts']);
const routeModules = Object.values(modules).map((module) => module());

interface RouteModule {
  default?: RouteRecordRaw[];
}

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
  ] as RouteRecordRaw[],
});

// Load dynamic routes after router creation
Promise.all(routeModules).then((results) => {
  const dynamicRoutes = results.flatMap((result) => (result as RouteModule).default || []);
  dynamicRoutes.forEach(route => router.addRoute(route));
});

export default router;
