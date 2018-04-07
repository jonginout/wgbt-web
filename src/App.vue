<template>
  <div id="app">
    <main-header></main-header>

    <div id="main_view">
      <router-view></router-view>
    </div>

    <main-footer></main-footer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    }
  }
</script>

<style lang="scss">
  @import url('http://fonts.googleapis.com/earlyaccess/notosanskr.css');
  @import './style/style.scss';

  #main_view{
    margin: 80px 0px 10px 0px;
    padding: 0px 50px;
  }
</style>
