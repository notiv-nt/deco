<template>
<div class="app-root">

  <app-header />

  <main>
    <app-promo />
    <router-view></router-view>
  </main>

  <app-footer />

</div>
</template>

<script>
export default {
  methods: {
    setTabKeyHandler() {
      const TAB_CODE = 9;

      document.addEventListener('keyup', (e) => {
        if (e.keyCode === TAB_CODE && !e.altKey && !e.ctrlKey) {
          document.documentElement.classList.add('is-keyboard-navigation');
        }
      });

      document.addEventListener('click', () => {
        document.documentElement.classList.remove('is-keyboard-navigation');
      });
    },
  },

  created() {
    this.setTabKeyHandler();
  },
};
</script>

<style lang="scss" scoped>
.app-root {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
