import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/time/:timestamp?',
    component: () => import('../views/EpochView.vue'),
    props: true,
    name: 'epoch',
  },
];

export default routes;
