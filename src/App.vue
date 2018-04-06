<template>
  <div id="app">
    <main-header></main-header>

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
</style>
