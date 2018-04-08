<template>
  <div class="hello">
    <h1>{{mainText}}</h1>
    <h3 v-if="user">{{user.name}}</h3>
    
    <button @click="onClickMakeToken">MakeToken</button>
    <button @click="onClickGetToken">GetToken</button>
    <button @click="onClickGetCookie">GetCookie</button>
    <br><br>

    <router-link to="/hello">안녕??</router-link>
  </div>
</template>

<script>
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

    onClickMakeToken() {
      this.setToken()
    },
    onClickGetToken() {
      this.getToken()
    },
    onClickGetCookie(){
      this.getCookie()
    },

    setToken(){
      this.axios
      .post('/user/make',{
        no : 1
      })
      .then(response => {
        this.token = response.headers.authorization
        // 이건 쿠키에 저장하는게 좋을 것 같기도???
        console.log(response.headers.authorization)
      })
      .catch(function (error) {
        console.log(error);
      });
    },

    getToken(){
      this.axios
      .get('/user', {
        params: {
          // 쿠키로
          "Authorization": this.token
        }
      })
      .then(function (response) {
        console.log(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
    },

    getCookie(){
      console.log(document.cookie)
    }


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
