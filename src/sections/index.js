import Vue from 'vue';

import Header from './Header';
import Footer from './Footer';
import Aside from './Aside';
import RecomendedPosts from './RecomendedPosts';
import Promo from './Promo';

export default {
  AppHeader: Vue.component('AppHeader', Header),
  AppFooter: Vue.component('AppFooter', Footer),
  AppAside: Vue.component('AppAside', Aside),
  AppRecomendedPosts: Vue.component('AppRecomendedPosts', RecomendedPosts),
  AppPromo: Vue.component('AppPromo', Promo),
};
