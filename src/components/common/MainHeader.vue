<template>
  <header>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      <a class="navbar-brand" href="/">WGBT</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link" active-class="active">메인</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/community" class="nav-link" active-class="active">커뮤니티</router-link>
          </li>
          <li class="nav-item" v-if="!isLoggedIn">
            <router-link to="/login" class="nav-link" active-class="active">로그인</router-link>
          </li>
          <li class="nav-item" v-if="!isLoggedIn">
            <router-link to="/signUp" class="nav-link" active-class="active">회원가입</router-link>
          </li>
          <li class="nav-item dropdown" v-if="isLoggedIn">
            <a class="nav-link dropdown-toggle" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{me.id}}</a>
            <div class="dropdown-menu" aria-labelledby="dropdown01">
              <a class="dropdown-item" href="#">마이페이지</a>
              <a class="dropdown-item" href="#">쪽지함</a>
              <a class="dropdown-item" @click="logout">Logout</a>
            </div>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
  </header>
</template>

<script>
import User from '../../models/user.js';
import eventBus from '../../eventBus.js';

export default {
  name: 'MainHeader',
  data() {
    return {
      isLoggedIn: false,
      me: {}
    }
  },
  mounted() {
    eventBus.$on('didLogin', this.fetchMe);
  },
  methods: {

    logout() {
      User
      .logout()
      .then(() => {
        this.fetchMe();
        this.$router.push('/');
      })
    },
    fetchMe() {
      this.isLoggedIn = User.data.isLoggedIn;
      this.me = User.data.me;
    }
  }
}
</script>

<style lang="scss">
  header{

    .navbar-nav{
      margin-right: 10px;
    }

    .nav-item.dropdown{
      cursor: pointer;
      .dropdown-menu{
        background-color: #dae0e5;
        .dropdown-item{
          cursor: pointer;
        }
      }
    }

  }
</style>
