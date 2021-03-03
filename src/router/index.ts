import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '@/views/index.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/:patee',
    name: 'patee',
    component: () =>
      import(/* webpackChunkName: "[patee]" */ '../views/patee/[patee].vue'),
  },
  {
    path: '/:patee/:id',
    name: 'patee-id',
    component: () =>
      import(/* webpackChunkName: "[patee-id]" */ '../views/patee/[id].vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
