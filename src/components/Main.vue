<template>
  <div class="hello">
    <h1>{{mainText}}</h1>
    <h3 v-if="user">{{user.name}}</h3>
    
    <button @click="onClickTest">Test</button>
    <br><br>

    <router-link to="/hello">안녕??</router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user : {},
      mainText: '안뇽ㅂㅂㅂ'
    }
  },
  mounted() {
  },
  methods: {

    onClickTest() {
      this.login()
    },

    login(){
      this.axios
      .post('/api/user',{
        no : 1
      })
      .then(response => {
        if(response.data.success){
          this.user = response.data.result
        }
      })
    }

  }
}
</script>

<style lang="scss">
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
</style>
