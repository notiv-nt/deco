<template>
<div>

  <h1 class="u-sr-only">Promo</h1>

  <div class="l-container">

    <div class="swiper-container slider" ref="slider">
      <div class="swiper-wrapper">

        <div class="slide swiper-slide" v-for="i in 4" :key="i">
          <img src="/assets/img/mock/promo/pic-01.jpg" alt="">

          <div class="slide-content">
            <p class="slide-sup-title">Latest News</p>
            <h2 class="slide-title">Bodybuilding best for you health</h2>
          </div>
        </div>

      </div>

      <div class="slider-actions">
        <div class="slider-pagination"></div>

        <div class="slider-nav">
          <button type="button" class="slider-nav-item" @click="next">
            <app-icon name="long-arrow-alt-left"></app-icon>
          </button>

          <span>Featured article</span>

          <button type="button" class="slider-nav-item" @click="prev">
            <app-icon name="long-arrow-alt-right"></app-icon>
          </button>
        </div>
      </div>

    </div>
  </div>

  <form class="l-container subscription">
    <h2 class="t-h2 subscription-title">Signup to newsletter</h2>

    <input type="text" name="name" placeholder="Your Name" class="form__input">
    <input type="text" name="email" placeholder="Your Email Address" class="form__input">

    <button type="submit" class="btn subscription-action">Subscribe now</button>
  </form>

</div>
</template>

<script>
import Swiper from 'swiper';

export default {
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
      allowTouchMove: false,
      direction: 'vertical',
      pagination: {
        clickable: true,
        el: this.$refs.slider.querySelector('.slider-pagination'),
        // type: 'bullets'
      }
    });
  }
};
</script>

<style src="swiper/css/swiper.min.css"></style>

<style lang="scss" scoped>
.slider {
  position: relative;
  height: 580px;
}

.slide {
  flex-shrink: 0;
  width: 100%;
  position: relative;
  padding: 0 100px;
  display: flex;
  align-items: center;

  img {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
}

.slide-content {
  position: relative;
  z-index: 1;
  color: #fff;
  max-width: 500px;
}

.slide-sup-title {
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 3.6px;
  margin-bottom: 7px;
}

.slide-title {
  font-size: 40px;
  font-weight: bold;
  line-height: 1.2;
  letter-spacing: 5.6px;
  text-transform: uppercase;
}

.slider-actions {
  z-index: 1;
  color: #fff;
  position: absolute;
  bottom: 50%;
  right: 0;
  width: 100%;
  max-width: 300px;
  transform: rotate(-90deg) translate(0, 90px);
  text-align: center;

  // bottom: 20px;
  // right: auto;
  // left: 50%;
  // transform: translateX(-50%);
}

.slider-pagination {
  display: flex;
  justify-content: center;
  margin-bottom: 18px;
  flex-direction: row-reverse;

  /deep/ span {
    border-radius: 0;
    background-color: rgba(#000, .4);
    border: 1px solid #fff;
    opacity: .9;
    margin: 0 4px;

    &.swiper-pagination-bullet-active {
      opacity: 1;
      background-color: #999;
    }
  }
}

.slider-nav {
  font-size: .9em;
  font-weight: 600;
  text-transform: uppercase;
}

.slider-nav-item {
  @include button-reset;

  font-size: 1.3em;

  &:first-child {
    margin-right: 10px;
  }

  &:last-child {
    margin-left: 10px;
  }
}

.subscription {
  padding: 28px 40px;
  display: grid;
  grid-template-columns: 180px 1fr 1fr 280px;
  grid-gap: 30px;
}

.subscription-title {
  line-height: 1;
  letter-spacing: 3px;
}

.subscription-action {
  letter-spacing: 2px;
}
</style>
