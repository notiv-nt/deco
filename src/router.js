import VueRouter from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('@/pages/Home'),
  },

  {
    path: '/contact',
    component: () => import('@/pages/Contact'),
    meta: {
      noPromo: true,
    },
  },

  {
    path: '/about',
    component: () => import('@/pages/About'),
    meta: {
      noPromo: true,
    },
  },

  {
    path: '/post/:id',
    component: () => import('@/pages/Single'),
  },

  {
    path: '/*',
    component: () => import('@/pages/404'),
  },
];

export default new VueRouter({
  mode: 'history',
  routes,
});
