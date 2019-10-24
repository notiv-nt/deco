<template>
<article class="u-box">

  <div class="media">
    <img :src="post.image" :alt="post.title" class="u-responsive thumbnail">

    <div class="media-type">
      <app-icon name="image"></app-icon>
    </div>
  </div>

  <div class="body">
    <p class="color-gray" v-html="post.categories"></p>
    <h2 class="t-h1 title">
      <router-link :to="'/post/' + post.id" v-if="!isSingle">{{ post.title }}</router-link>
      <span v-else>{{ post.title }}</span>
    </h2>

    <ul class="meta">
      <li class="meta-item">
        <app-icon class="meta-icon" name="user"></app-icon>
        <span class="color-gray">{{ post.author }}</span>
      </li>

      <li class="meta-item">
        <app-icon class="meta-icon" name="calendar"></app-icon>
        <span class="color-gray">{{ postDate }}</span>
      </li>
    </ul>

    <div class="plain-text content" v-html="post.content"></div>

    <router-link
      :to="'/post/' + post.id"
      class="read-more"
      v-if="!isSingle"
    >Read more</router-link>
  </div>

  <div class="footer" v-if="!isSingle">
    <ul class="meta">
      <li class="meta-item">
        <app-icon class="meta-icon" name="comments"></app-icon>
        <span class="color-gray">{{ post.comments }} comments</span>
      </li>

      <!-- <li class="meta-item">
        <app-icon class="meta-icon" name="heart"></app-icon>
        <span class="color-gray">Like 25</span>
      </li> -->
    </ul>

    <ul class="socials">
      <li>
        <a href="#">
          <app-icon type="fab" name="dribbble"></app-icon>
        </a>
      </li>

      <li>
        <a href="#">
          <app-icon type="fab" name="facebook-f"></app-icon>
        </a>
      </li>

      <li>
        <a href="#">
          <app-icon type="fab" name="twitter"></app-icon>
        </a>
      </li>

      <li>
        <a href="#">
          <app-icon type="fab" name="pinterest"></app-icon>
        </a>
      </li>
    </ul>
  </div>

</article>
</template>

<script>
export default {
  props: {
    post: Object,
    context: String,
  },

  computed: {
    postDate() {
      return this.$date.format(new Date(this.post.date), 'd MMMM, yyyy');
    },

    isSingle() {
      return this.content !== 'single';
    }
  },
};
</script>

<style lang="scss" scoped>
.media {
  display: block;
  position: relative;
}

.media-type {
  position: absolute;
  left: 50%;
  bottom: 0;
  height: 35px;
  width: 40px;
  color: #fff;
  background-color: #212121;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  transform: translate(-50%, 50%);
}

.thumbnail {
  height: 490px;
}

.title {
  text-transform: uppercase;
  margin: 13px 0 17px;

  a {
    &:hover {
      text-decoration: underline;
    }
  }
}

.color-gray {
  color: #999999;
  letter-spacing: 1.6px;
  line-height: 1.5;
  text-transform: uppercase;
}

.body {
  padding: 60px;
  padding-bottom: 50px;
  text-align: center;
}

.meta {
  display: inline-flex;
}

.meta-item:not(:last-child) {
  margin-right: 30px;
}

.meta-icon {
  margin-right: .2em;
}

.content {
  margin-top: 30px;
}

.read-more {
  @include button-reset;

  height: 34px;
  padding: 0 14px;
  margin-top: 45px;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 2.8px;
  color: #212121;
  text-transform: uppercase;
  border-left: 1px solid #d7d7d7;
  border-right: 1px solid #d7d7d7;
  transition: color, background-color, border-color;

  &:hover {
    color: #fff;
    border-color: #212121;
    background-color: #212121;
  }
}

.footer {
  border-top: 1px solid rgba(#d7d7d7, .4);
  padding: 20px 60px;
  display: flex;
  align-items: center;
}

.socials {
  display: inline-flex;
  margin-left: auto;
  line-height: 1;

  > *:not(:last-child) {
    margin-right: 20px;
  }

  a {
    display: block;
    padding: 5px;
  }
}
</style>
