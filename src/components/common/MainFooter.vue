<template>
<div class="footer_container box">
  <div class="footer_content">
    <img class="logo" src="https://s3.ap-northeast-2.amazonaws.com/dankookie/static/logo.png" alt="logo">
    <ul class="links">
      <li>
        <router-link to="/terms">약관 및 운영수칙</router-link>
        <span class="vertical_bar"></span>
      </li>
      <li>
        <a href="#">운영팀에게</a>
        <span class="vertical_bar"></span>
      </li>
      <li>
        <a href="#">가입문의</a>
        <span class="vertical_bar"></span>
      </li>
      <li>
        <a href="#">광고문의</a>
      </li>
    </ul>
    <p class="copyright">Copyright ⓒ Dankookie All rights reserved</p>
  </div>
</div>
</template>

<style lang="scss">


.footer_container {
  position: relative;
  background-color: white;
  width: 100%;
  border-left: 0;
  border-right: 0;
  border-bottom: 0;

  .footer_content {
    width: 700px;
    padding: 10px 0;
    margin: 0 auto;

    .logo {
      display: block;
      margin: 10px auto;
      width: 90px;
    }

    .links {
      text-align: center;
      font-size: 0.9em;
      list-style: none;
      display: block;
      padding-top: 8px;
      margin: 15px auto;
      margin-bottom: 0;
      padding: 0;

      li {
        display: inline-block;
        margin-left: 7px;

        a {
          color: #888;
          text-decoration: none;
        }
      }

      .vertical_bar {
        width: 1px;
        height: 11px;
        background-color: #e8e9ec;
        display: inline-block;
        margin-left: 7px;
      }
    }

    .copyright {
      text-align: center;
      margin: 0 auto;
      margin-top: 8px;
    }

  }
}
</style>
