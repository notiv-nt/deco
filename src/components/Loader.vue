<template>
<div class="loader">
  <h2 v-if="!$slots.default">Loading...</h2>
  <slot v-else></slot>
</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
