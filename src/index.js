import '@/styles/index.scss';

import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';

import components from './components';
import sections from './sections';
import layouts from './layouts';
import './mixins';

import router from './router';

Vue.use(VueRouter);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  components: {
    ...components,
    ...sections,
    ...layouts,
  },
}).$mount('#app-root');
