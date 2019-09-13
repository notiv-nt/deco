const path = require('path');

module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: ['airbnb-base', 'plugin:vue/essential'],
  plugins: ['prettier'],

  settings: {
    'import/resolver': 'webpack',
  },

  parserOptions: {
    parser: 'babel-eslint',
  },
};
