<template>
  <div id="app">
    <router-view></router-view>

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

  $background-color : #f5f5f5;

  body {
    background-color: $background-color;
    font-family: 'Noto Sans KR', sans-serif;
  }

</style>
