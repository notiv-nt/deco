<template>
<header class="header">
  <div class="l-container header-container">

    <nav class="nav-main">
      <button type="button" class="nav-button nav-switch" @click="isNavVisible = !isNavVisible">
        <app-icon name="bars" />
      </button>

      <div class="primary-nav" :class="{ 'is-visible': isNavVisible }">
        <div class="l-container">

          <ul>
            <li>
              <router-link to="/" class="primary-nav-link">Home</router-link>
            </li>
            <li>
              <router-link to="/contact" class="primary-nav-link">Contact</router-link>
            </li>
            <li>
              <a href="/" class="primary-nav-link">Post types</a>
            </li>
            <li>
              <a href="/" class="primary-nav-link">Travel</a>
            </li>
            <li>
              <a href="/" class="primary-nav-link">Feature</a>
            </li>
          </ul>

        </div>
      </div>
    </nav>

    <a href="/" class="logo">
      <img src="/assets/img/logo.svg" alt="">
    </a>

    <div class="right-wrap">

      <ul class="nav-social">
        <li class="nav-li">
          <button type="button" class="nav-button">
            <app-icon name="rss" />
          </button>
        </li>

        <li class="nav-li">
          <button type="button" class="nav-button">
            <app-icon type="fab" name="twitter" />
          </button>
        </li>

        <li class="nav-li">
          <button type="button" class="nav-button">
            <app-icon type="fab" name="tumblr" />
          </button>
        </li>

        <li class="nav-li">
          <button type="button" class="nav-button">
            <app-icon type="fab" name="facebook-f" />
          </button>
        </li>

        <li class="nav-li">
          <button type="button" class="nav-button" @click="isSearchVisible = true">
            <app-icon name="search" />
          </button>
        </li>
      </ul>

      <form action="/" class="search" :class="{ 'is-visible': isSearchVisible }">
        <input type="search" class="search-input" placeholder="Search...">

        <button type="button" class="nav-button search-button" @click="isSearchVisible = false">
          <app-icon name="times" />
        </button>
      </form>

    </div>

  </div>
</header>
</template>

<script>
export default {
  data: () => ({
    isNavVisible: false,
    isSearchVisible: false,
  }),
};
</script>

<style lang="scss" scoped>
.header {
  background-color: #212429;
  color: #fff;
  position: relative;
}

.header-container {
  height: 5.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  margin: auto;
  width: 150px;
  height: 20px;
  display: block;
  height: auto;
  transform: translateX(75px);

  img {
    display: block;
  }
}

.nav-button {
  @include button-reset;

  height: 100%;
  width: 5.5rem;
  border-right: 1px solid #3c3c3c;
  border-left: 1px solid #3c3c3c;
  transition: background-color;

  &:hover {
    background-color: lighten(#212429, 10%);
  }
}

.nav-social {
  display: flex;
  font-size: 16px;

  &, li {
    height: 100%;
  }
}

.nav-main,
.right-wrap {
  height: 100%;
}

.right-wrap {
  position: relative;
}

.nav-switch {
  font-size: 22px;
}

.primary-nav {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, .3);

  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.84px;

  transition: transform, opacity, visibility;
  opacity: 0;
  transform-origin: top;
  transform: rotateX(-45deg) translateY(-10px);
  visibility: hidden;

  &.is-visible {
    opacity: 1;
    visibility: visible;
    transform: none;
  }

  ul {
    display: flex;
    align-items: center;
  }
}

.primary-nav-link {
  display: block;
  padding: 1.5rem 1.7rem;
  margin-right: 1.1rem;
  transition: background-color;

  &:hover {
    background-color: rgba(0, 0, 0, .3);
  }
}

.search {
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 500px;
  display: flex;
  align-items: center;
  background-color: lighten(#212429, 5%);
  transition: opacity, visibility;
  opacity: 0;
  visibility: hidden;

  &.is-visible {
    opacity: 1;
    visibility: visible;
  }
}

.search-input {
  @include input-reset;

  font-size: 1.2em;
  height: 100%;
  flex-grow: 1;
  padding: 0 20px;
}

.search-button {
  font-size: 20px;
}
</style>
