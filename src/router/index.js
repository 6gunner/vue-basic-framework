import Vue from 'vue';
import VueRouter from 'vue-router';

import { lazyLoad } from '@/libs/index';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history', // history或hash模式
  routes: [{
    path: '/',
    redirect: '/ipos',
  }, {
    path: '/ipos',
    component: () => import('../views/ipos/index'),
  }]
})

// 路由拦截器
router.beforeEach((from, to, next) => {
	// 一般处理一些权限校验
	// console.log(from, to, next);
	next();
});
router.afterEach(() => {
	// 一般都是直接放过去
});

export default router;
