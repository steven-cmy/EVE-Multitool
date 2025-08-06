import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/category',
    component: () => import('../views/CategoryView.vue'),
    props: true,
    name: 'categories',
    children: [
      {
        path: ':categoryid',
        component: () => import('../views/CategoryView.vue'),
        props: true,
        name: 'category',
      },
    ],
  },
  {
    path: '/group/:groupid',
    component: () => import('../views/GroupView.vue'),
    props: true,
    name: 'group',
  },
  {
    path: '/type/:typeid',
    component: () => import('../views/TypeView.vue'),
    props: true,
    name: 'types-showinfo',
  },
];

export default routes;
