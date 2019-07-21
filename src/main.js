import Vue from 'vue'
import './cube-ui';
import App from './App.vue';
import router from './router';
import store from '@/store';
import 'amfe-flexible'

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})
