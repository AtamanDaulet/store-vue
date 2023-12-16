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
  },
  {
    path: '/auth/login',
    name: 'login',
    component: () => import('@/views/auth/LoginView.vue')
  },
  {
    path: '/auth/signup',
    name: 'signup',
    component: () => import('@/views/auth/LoginView.vue')
  }
];
export default routes;
