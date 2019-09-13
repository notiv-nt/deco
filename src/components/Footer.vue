<template>
<footer class="footer">

  <div class="l-container">

    Footer

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
