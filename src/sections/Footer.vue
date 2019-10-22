<template>
<footer class="footer">

  <div class="l-container main">

    <div class="col">
      <h3 class="t-h3 title">About Blog</h3>

      <p>Lorem ipsum dolor sit amet, conser adipisicing  esse cillum dolore nulla pariatur.</p>
    </div>

    <div class="col">
      <h3 class="t-h3 title">Latest Tweets</h3>

      <div class="list">
        <div class="item" v-for="i in 2">
          <div class="item-icon">
            <app-icon type="fab" name="twitter"></app-icon>
          </div>

          <div>
            <h4 class="item-title">@Twitter@magicalrebekah</h4>
            <p>Developer Advocate @heyval isaiyou knows the very well is about things.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="col">
      <h3 class="t-h3 title">Follow me on instagram</h3>

      <div class="images">
        <div v-for="i in 6">
          <img src="http://placehold.it/200x200" alt="">
        </div>
      </div>
    </div>

    <div class="col">
      <h3 class="t-h3 title">Latest Comments</h3>

      <div class="list">
        <div class="item has-border" v-for="i in 2">
          <div>
            <h4 class="item-title">From Alex :</h4>
            <p>Developer Advocate @heyval isaiyou knows the very well is about things.</p>
          </div>
        </div>
      </div>
    </div>

  </div>

  <div class="copy">
    <p>@2015 copyright .all right reserved by awesome theme</p>

    <ul>
      <li><a href="#">terms policy</a></li>
      <li><a href="#">disclaimer</a></li>
    </ul>
  </div>

</footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  color: #fff;
  background-color: #212429;
  letter-spacing: 1px;
}

.main {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
  padding: 50px 0 60px;
}

.title {
  color: #f9f9fb;
  margin-bottom: 30px;
}

// .list {}

.item {
  display: flex;
  font-size: 15px;
  font-weight: 300;
  line-height: 1.8;
  letter-spacing: 1.5px;

  &:not(:last-child).has-border {
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid rgba(#ccc, .4);
  }

  &:not(:last-child) {
    margin-bottom: 30px;
  }
}

.item-icon {
  width: 23px;
  flex-shrink: 0;
}

.item-title {
  font-weight: 300;
  font-size: 14px;
  text-align: left;
  margin-bottom: 5px;
  letter-spacing: 0.7px;
}

.images {
  display: grid;
  grid-template-rows: 100px;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2px;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
}

.copy {
  background-color: #17191c;
  color: rgba(#fff, 0.4);
  font-size: 14px;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 1.4px;
  text-align: center;
  transition: color;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  &:hover {
    color: rgba(#fff, .7);
  }

  ul {
    display: inline-flex;
    flex-wrap: wrap;
  }

  li::before {
    content: '';
    display: inline-block;
    margin: 0 10px;
    height: 14px;
    width: 1px;
    background-color: currentColor;
    vertical-align: middle;
  }

  a:hover {
    color: #09f;
    transition: color;
    text-decoration: underline;
  }
}
</style>
