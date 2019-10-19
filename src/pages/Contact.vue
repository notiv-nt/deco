<template>
<layout-aside>

  <div class="top u-mb20">
    <img src="http://placehold.it/800x600" alt="" class="map">

    <div class="u-box info">
      <h1 class="t-h2">Contact information</h1>
      <hr class="hr">
      <p>In case you some aquestions popped in your’s mind, FeIn case you some aquestions popped in your’el email or even visit us.</p>

      <ul class="list">
        <li>
          <app-icon class="list-icon" name="home"></app-icon>
          <span>Address: 123 Street Name, City Name, United States.</span>
        </li>
        <li>
          <app-icon class="list-icon" name="envelope"></app-icon>
          <span>Email: info@lifestyle.com</span>
        </li>
        <li>
          <app-icon class="list-icon" name="globe"></app-icon>
          <span>www.lifestyle.com</span>
        </li>
      </ul>
    </div>
  </div>

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

.top {
  display: flex;
}

.info {
  padding: 30px;
  font-size: 14px;
  letter-spacing: 0.2px;
  line-height: 1.7;
}

.map {
  width: 434px;
  height: 100%;
}

.hr {
  background: #eaeaeb;
  height: 1px;
  border: 0;
  max-width: 380px;
  margin: 25px 0 23px;
}

.list {
  margin-top: 15px;

  li {
    margin: 8px 0;
  }
}

.list-icon {
  margin-right: 5px;
}
</style>
