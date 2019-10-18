import Vue from 'vue';

import Header from './Header';
import Footer from './Footer';
import Icon from './Icon';
import Post from './Post';
import Aside from './Aside';

export default {
  AppHeader: Vue.component('AppHeader', Header),
  AppFooter: Vue.component('AppFooter', Footer),
  AppIcon: Vue.component('AppIcon', Icon),
  AppPost: Vue.component('AppPost', Post),
  AppAside: Vue.component('AppAside', Aside),
};
