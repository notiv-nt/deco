import '@/styles/index.scss';

import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';

import components from './components';

import router from './router';

Vue.use(VueRouter);

new Vue({
  render: (h) => h(App),
  router,
  components,
}).$mount('#app-root');
