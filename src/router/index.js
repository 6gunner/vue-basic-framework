import Vue from 'vue';
import VueRouter from 'vue-router';

import { lazyLoad } from '@/libs/index';

import IndexView from '../views/index';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'hash', // history或hash模式
  routes: [{
    path: '/',
    redirect: '/index',
  }, {
    path: '/index',
    component: IndexView,
  }]
})

