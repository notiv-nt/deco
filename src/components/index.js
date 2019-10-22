import Vue from 'vue';

import Icon from './Icon';
import Post from './Post';
import Loader from './Loader';

export default {
  AppIcon: Vue.component('AppIcon', Icon),
  AppPost: Vue.component('AppPost', Post),
  AppLoader: Vue.component('AppLoader', Loader),
};
