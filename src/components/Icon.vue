<template>
  <span :class="type + ' fa-' + name"></span>
</template>

<script>
export default {
  props: {
    name: String,
    type: {
      type: String,
      default: 'fas',
    },
  },
};
</script>

<style lang="scss" scoped>
.fa {
  @include icon;
}
</style>
