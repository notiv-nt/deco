import Vue from 'vue';

import format from 'date-fns/format';
import parse from 'date-fns/parse';

Vue.mixin({
  beforeCreate() {
    this.$date = {
      format,
      parse,
    };
  },
});
