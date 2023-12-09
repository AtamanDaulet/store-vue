import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/good/:id',
    name: 'good',
    props: true,
    component: () => import('@/views/GoodView.vue')
  }
];
export default routes;
