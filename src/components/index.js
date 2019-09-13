import Vue from 'vue';

import Header from './Header';
import Footer from './Footer';
import Icon from './Icon';

export default {
  AppHeader: Vue.component('AppHeader', Header),
  AppFooter: Vue.component('AppFooter', Footer),
  AppIcon: Vue.component('AppIcon', Icon),
};
