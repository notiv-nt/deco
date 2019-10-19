<template>
<div class="l-main l-container layout-wrap">

  <main class="main">
    <slot></slot>
  </main>

  <app-aside class="aside"></app-aside>

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
  width: 360px;
  flex-shrink: 0;
  margin-left: 30px;
}

.main {
  flex-grow: 1;
  min-width: 0;
}
</style>
