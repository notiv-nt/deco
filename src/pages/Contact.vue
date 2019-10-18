<template>
<layout-aside class="u-main l-container">

  <form action="" method="POST">
    <div class="row">
      <input type="text" name="name" class="u-mb20 form__input" placeholder="Your Name">
      <input type="email" name="email" class="u-mb20 form__input" placeholder="Your Email Address">
    </div>

    <input type="text" name="website" class="u-mb20 form__input" placeholder="Website Address">

    <textarea
      name="message"
      rows="10"
      class="u-mb20 form__input"
      placeholder="Please write a message here!"
    ></textarea>

    <button class="btn" type="button">Send Message</button>
  </form>

</layout-aside>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  margin-left: -10px;
  margin-right: -10px;

  > * {
    margin-left: 10px;
    margin-right: 10px;
  }
}
</style>
