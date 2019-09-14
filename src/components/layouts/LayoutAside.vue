<template>
<div class="layout-wrap">

  <div class="main">
    <slot></slot>
  </div>

  <div class="u-box aside">

  </div>

</div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.layout-wrap {
  display: flex;
  align-items: flex-start;
}

.aside {
  padding: 40px 30px;
  width: 360px;
  flex-shrink: 0;
  margin-left: 30px;
}

.main {
  flex-grow: 1;
}
</style>
