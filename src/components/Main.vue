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
      this.axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('jwtToken');

      this.axios
      .post('/user/make',{
        no : 1
      })
      .then(response => {
        this.token = response.headers.authorization
        // 이건 쿠키에 저장하는게 좋을 것 같기도???
        console.log(response.headers.authorization)
        console.log(document.cookie)
      })
      .catch(function (error) {
        console.log(error);
      });
    },

    getToken(){
      this.axios
      .get('/user', {
        headers: {
          // 쿠키로
          // "Authorization": "eyJ0eXAiOiJKV1QiLCJyZWdEYXRlIjoxNTIzMTY3MzcxNTYwLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyIiwidXNlckluZm8iOnsibm8iOjEsImlkIjoiY3Y2MTMiLCJuYW1lIjoi6rmA7KKF7J24MSIsImZvcm1hdHRlZENyZWF0ZWREYXRlIjoiMTjrhYQgMDPsm5QgMzHsnbwgMTA6NDg6MzMiLCJmb3JtYXR0ZWRNb2RpZmllZERhdGUiOiIxOOuFhCAwNOyblCAwNOydvCAxOTowNDoxOCJ9fQ.Y74hBmdPPKrYQe4gOihZMehWDeWZeMqOtJ_xT8TtIAE"
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
