import Vue from 'vue';

import Header from './Header';
import Footer from './Footer';
import Icon from './Icon';

import LayoutAside from './layouts/LayoutAside';

export default {
  AppHeader: Vue.component('AppHeader', Header),
  AppFooter: Vue.component('AppFooter', Footer),
  AppIcon: Vue.component('AppIcon', Icon),

  //
  LayoutAside: Vue.component('LayoutAside', LayoutAside),
};
