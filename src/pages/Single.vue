<template>
<layout-aside>

  <app-loader>
    <template v-if="post">

      <app-post
        class="u-mb60"
        :post="post"
        context="single"
      ></app-post>

      <div class="u-mb60 pagination">
        <a href="#" class="pagination-item">
          <app-icon name="chevron-left" class="pagination-icon"></app-icon>
          Previous Post
        </a>

        <a href="#" class="pagination-item">
          Next Post
          <app-icon name="chevron-right" class="pagination-icon"></app-icon>
        </a>
      </div>

      <div class="u-mb20 author">
        <a href="#" class="author-image">
          <img src="http://placehold.it/209x130" alt="">
        </a>

        <div class="author-body u-box">
          <div class="author-top">
            <a href="#" class="author-name">Michell Beverly</a>
            <a href="#" class="author-more">All Posts</a>
          </div>

          <div class="author-content">
            <p>Patricia gives you the ability to let people actually read have your content, instead of focusing on all the other stuff that’s going on their screen.</p>
          </div>
        </div>
      </div>

      <ul class="u-mb60 socials">
        <li class="u-box" v-for="item in socials" :key="item.name">
          <a href="#" class="social-item">
            <span class="social-icon">
              <app-icon type="fab" :name="item.icon"></app-icon>
            </span>
            <span class="social-text">{{ item.name }} {{ item.count }}</span>
          </a>
        </li>
      </ul>

      <app-recomended-posts :for="post.id"></app-recomended-posts>

    </template>
  </app-loader>

</layout-aside>
</template>

<script>
export default {
  data: () => ({
    post: null,
    socials: [
      {
        name: 'Facebook',
        icon: 'facebook-f',
        count: 28
      },
      {
        name: 'Twitter',
        icon: 'twitter',
        count: 40
      },
      {
        name: 'Tumbler',
        icon: 'tumblr',
        count: 10
      },
      {
        name: 'Pinterest',
        icon: 'pinterest-p',
        count: 83
      },
    ],
  }),

  async created() {
    const id = this.$route.params.id;

    const data = await fetch(`${process.env.API}/posts/${id}?_embed`).then((r) => r.json());
    const categories = data._embedded['wp:term'][0].map((i) => i.name).join(', ');
    const tags = data._embedded['wp:term'][1].map((i) => i.name);

    this.post = {
      title: data.title.rendered,
      date: data.date,
      id: data.id,
      slug: data.slug,
      content: data.content.rendered,
      author: data._embedded.author[0].name,
      image: data._embedded['wp:featuredmedia'][0].source_url,
      comments: data.comments,
      tags,
      categories,
      // type: post.type,
    };
  },
};
</script>

<style lang="scss" scoped>
.pagination {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;

  font-size: 14px;
  font-weight: 500;
  letter-spacing: 2.8px;
  color: #fff;
  text-transform: uppercase;
}

.pagination-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 138px;
  background-color: rgba(#000, .8);
  transition: background-color;

  &:hover {
    background-color: rgba(#3a3c49, .9);
  }
}

.pagination-icon {
  font-size: 0.9em;
  opacity: .8;

  &:first-child { margin-right: 10px; }
  &:last-child { margin-left: 10px; }
}

.author {
  display: flex;
}

.author-image {
  width: 210px;
  height: auto;
  background-color: #0c0d0f;
  flex-shrink: 0;

  img {
    display: block;
    object-fit: cover;
    width: 100%;
    height: 100%;
    object-position: center;
  }
}

.author-body {
  padding: 34px 26px 20px;
}

.author-top {
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  color: #212121;
  border-bottom: 1px solid #eaeaeb;
  padding-bottom: 13px;
  margin-bottom: 11px;

  a:hover {
    text-decoration: underline;
  }
}

.author-name {
  font-family: Montserrat, sans-serif;
  letter-spacing: 1.6px;
}

.author-more {
  font-size: 14px;
  letter-spacing: 1.4px;
  font-weight: 500;
}

.author-content {
  font-weight: 300;
  line-height: 1.7;
  letter-spacing: 1.6px;
}

.socials {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
}

.social-item {
  height: 50px;
  display: flex;
  text-align: center;
  align-items: center;
  letter-spacing: 1.6px;
  color: #999;
  text-transform: uppercase;

  &:hover .social-icon {
    background-color: #212121;
    color: #fff;
  }
}

.social-text {
  flex-grow: 1;
}

.social-icon {
  width: 60px;
  height: 100%;
  border-right: 1px solid rgba(#ddd, .2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #464646;
  transition: background-color, color;
}
</style>
