import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// 路由拦截器
router.beforeEach((from, to, next) => {
  // 一般处理一些权限校验
});
router.afterEach(() => {
  // 一般都是直接放过去
});


new Vue({
  router,
  render: h => h(App),

}).$mount('#app')
