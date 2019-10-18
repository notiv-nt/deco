<template>
<aside class="u-box aside">

  <form class="u-mb40 search">
    <input type="text" name="search" class="search-input" placeholder="Search">

    <button type="submit" class="search-action">
      <app-icon name="search"></app-icon>
    </button>
  </form>

  <img src="/assets/img/mock/aside/1.jpg" alt="" class="u-responsive u-mb30">

  <h2 class="t-h2 heading">Categories</h2>
  <div class="list">

    <a href="#" class="list-item" v-for="(count, name) in categories" :key="name">
      {{ name }}
      <span class="u-mlauto">{{ count }}</span>
    </a>

  </div>

  <img src="/assets/img/mock/aside/2.jpg" alt="" class="u-mt40 u-mb40 u-responsive">

  <h2 class="t-h2 heading">Latest posts</h2>
  <div class="list u-mb30">

    <a href="#" class="list-item" v-for="post in posts" :key="post.id">
      <img :src="post.image" :alt="post.title" class="list-image">

      <div>
        <h3>{{ post.title }}</h3>

        <span class="list-meta">{{ post.date }}</span>
        <span class="list-meta">Like {{ post.likes }}</span>
      </div>
    </a>

  </div>

  <ul class="socials">
    <li v-for="(url, name) in socials" :key="name">
      <a :href="url">
        <app-icon type="fab" :name="name"></app-icon>
      </a>
    </li>
  </ul>

</aside>
</template>

<script>
export default {
  data: () => ({
    categories: {
      lifestyle: 93,
      audio: 102,
      gallery: 83,
      image: 4,
      standard: 109,
      status: 50,
      video: 102,
    },

    posts: [
      {
        id: 0,
        title: 'Jurney towards a lifestyle',
        image: 'http://placehold.it/80x62',
        date: 'Jan. 16 2015',
        likes: 255,
      },

      {
        id: 1,
        title: 'Fashionable shoes for ment',
        image: 'http://placehold.it/80x62',
        date: 'Jan. 18 2015',
        likes: 26,
      },

      {
        id: 2,
        title: 'really awesome’s Adventure',
        image: 'http://placehold.it/80x62',
        date: 'Jan. 18 2015',
        likes: 26,
      },

      {
        id: 3,
        title: 'Man Hunting in jungle',
        image: 'http://placehold.it/80x62',
        date: 'Jan. 18 2015',
        likes: 26,
      },
    ],

    socials: {
      twitter: '#',
      'facebook-f': '#',
      dribbble: '#',
      pinterest: '#',
      'linkedin-in': '#',
    },
  }),
};
</script>

<style lang="scss" scoped>
.aside {
  padding: 40px 30px;
}

.search {
  display: flex;
  height: var(--search-size);

  --search-size: 50px;
}

.search-input {
  @include input-reset;

  background-color: #f9f9fb;
  font-size: 15px;
  font-weight: 300;
  letter-spacing: 1.5px;
  padding: 0 17px;
  border-color: transparent
}

.search-action {
  @include button-reset;

  flex-shrink: 0;
  background-color: #212121;
  color: #fff;
  width: var(--search-size);

  &:hover {
    background-color: lighten(#212121, 10%);
  }
}

.heading {
  text-align: center;
  margin-bottom: 15px;
}

.list {
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 1.6px;
  line-height: 1.4;
  color: #212121;
}

.list-item {
  display: flex;
  padding: 14px 30px;
  margin: 0 -30px;
  position: relative;
  transition: background-color;

  &:hover {
    background-color: rgba(#d7d7d7, .2);
  }

  &::before, &::after {
    content: '';
    display: block;
    left: 30px;
    right: 30px;
    height: 1px;
    background-color: rgba(#d7d7d7, .2);
    position: absolute;
  }

  &:not(:last-child)::after {
    display: none;
  }

  &::before {
    top: 0;
  }

  &::after {
    bottom: 0;
  }

  h3 {
    font: inherit;
    font-family: Montserrat;
    letter-spacing: 1.2px;
    margin-bottom: 6px;

    @include crop-text(1.4, 2, 10px);
    @include crop-lh(5px);
  }
}

.list-image {
  margin-right: 10px;
  object-fit: cover;
  object-position: center;
  width: 80px;
  flex-shrink: 0;
}

.list-meta {
  color: #999;
  font-size: 14px;
  font-weight: 300;
  letter-spacing: 0.84px;

  &:not(:last-child) {
    margin-right: 20px;
  }
}

.socials {
  display: flex;
  margin: 0 -30px;
  justify-content: space-around;
  align-items: center;
  color: #464646;
  font-size: 20px;
  line-height: 1;

  a {
    display: block;
    padding: 10px;
    transition: color;

    &:hover {
      color: #212429;
    }
  }
}
</style>
