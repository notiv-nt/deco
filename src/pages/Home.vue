<template>
<layout-aside>

  <app-post
    class="post"
    v-for="post in posts"
    :key="post.id"
    :post="post"
  ></app-post>

</layout-aside>
</template>

<script>
export default {
  data: () => ({
    posts: null,
  }),

  async created() {
    const data = await fetch(`${process.env.API}/posts?_embed`).then((r) => r.json());

    this.posts = data.map((post) => {
      const categories = post._embedded['wp:term'][0].map((i) => i.name).join(', ');
      const tags = post._embedded['wp:term'][1].map((i) => i.name);

      return {
        title: post.title.rendered,
        date: post.date,
        id: post.id,
        slug: post.slug,
        content: post.content.rendered,
        excerpt: post.excerpt.rendered,
        author: post._embedded.author[0].name,
        image: post._embedded['wp:featuredmedia'][0].source_url,
        comments: post.comments,
        tags,
        categories,
        // type: post.type,
      };
    });
  },
};
</script>

<style lang="scss" scoped>
.post {
  margin-bottom: 60px;
}
</style>
