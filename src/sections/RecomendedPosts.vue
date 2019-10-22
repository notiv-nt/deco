<template>
<div class="u-box host">

  <div class="u-mb30 top">
    <h2 class="t-h2">Recomended posts</h2>

    <div class="actions">
      <button type="button" class="action" @click="prev">
        <app-icon name="long-arrow-alt-left"></app-icon>
      </button>

      <button type="button" class="action" @click="next">
        <app-icon name="long-arrow-alt-right"></app-icon>
      </button>
    </div>
  </div>

  <div class="swiper-container slider" ref="slider">
    <div class="swiper-wrapper">
      <a href="#" class="slide swiper-slide" v-for="i in 10">

        <div class="slide-image">
          <img src="http://placehold.it/340x218" alt="">
        </div>

        <h3 class="t-h3 slide-title">Girl on car vintage fashion</h3>

      </a>
    </div>
  </div>

</div>
</template>

<script>
import Swiper from 'swiper';

export default {
  props: {
    for: [Number, String]
  },

  methods: {
    prev() {
      this.$refs.slider.swiper.slidePrev(300, false);
    },

    next() {
      this.$refs.slider.swiper.slideNext(300, false);
    }
  },

  mounted() {
    const swiper = new Swiper(this.$refs.slider, {
      loop: true,
      spaceBetween: 30,
      autoHeight: true,
      allowTouchMove: false,
      slidesPerView: 3
    })
  }
};
</script>

<style src="swiper/css/swiper.min.css"></style>

<style lang="scss" scoped>
.host {
  padding: 40px 30px;
}

.top {
  display: flex;
  text-transform: uppercase;
  justify-content: space-between;
}

.actions {
  display: inline-flex;
}

.action {
  @include button-reset;

  width: 30px;
  height: 30px;
  background-color: #464646;
  color: #fff;
  transition: background-color;

  &:hover {
    background-color: lighten(#464646, 10%);
  }

  &:not(:last-child) {
    margin-right: 10px;
  }
}

.slide:hover .slide-title {
  text-decoration: underline;
}

.slide-image {
  height: 220px;
  background-color: #464646;

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    object-position: center;
  }
}

.slide-title {
  text-align: center;
  margin-top: 10px;
}
</style>
