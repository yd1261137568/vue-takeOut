import Vue from 'vue';
import App from './App.vue';
import router from './router';
import TopHeader from './components/TopHeader/TopHeader.vue';

import store from './store';
// import Shop from './pages/Shop/Shop.vue';

//注册全局组件
Vue.component('TopHeader',TopHeader);
import './mock/mockServer'

export default new Vue({
  el:'#app',
  render:h => h(App),
  router,
  store,
})
