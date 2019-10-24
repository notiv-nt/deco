<template>
<layout-aside>

  <app-loader>
    <template v-if="loaded">

      <app-post v-if="post" :post="post" content="single"></app-post>
      <h2 v-else>Page not fould</h2>

    </template>
  </app-loader>

</layout-aside>
</template>

<script>
export default {
  data: () => ({
    loaded: false,
    post: null,
  }),

  async created() {
    const data = await fetch(`${process.env.API}/pages?slug=about&_embed`).then((r) => r.json());

    if (data && data.length) {
      const post = data[0];

      this.post = {
        title: post.title.rendered,
        date: post.date,
        id: post.id,
        slug: post.slug,
        content: post.content.rendered,
        author: post._embedded.author[0].name,
        image: post._embedded['wp:featuredmedia'][0].source_url,
      }
    }

    this.loaded = true;
  }
};
</script>

<style lang="scss" scoped></style>
