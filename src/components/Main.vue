<template>
  <div class="hello">
    <h1>{{mainText}}</h1>
    <h3 v-if="user">{{user.name}}</h3>
    
    <button @click="onClickMe">GetMe</button>
    <br><br>

    <router-link to="/hello">안녕??</router-link>
  </div>
</template>

<script>
import User from '../models/user.js';

export default {
  data () {
    return {
      user : {},
      mainText: '안뇽ㅂㅂㅂ',
      token : ''
    }
  },
  mounted() {
  },
  methods: {

    onClickMe(){
      User.me()
      .then(data => {
        console.log(data)
      })
    },


  }
}
</script>

<style lang="scss">
.hello{
  h1, h2 { 
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
}
</style>
