<template>
  <div class="login_form_container">
    <div class="row">
      <div class="col-md-3"></div>

        <div class="col-md-6">
          <h2 class="form-signin-heading">Please Login in</h2>
          <div class="form" @keyup.enter="onSubmitLogin">
            <input type="text" class="form-control" placeholder="Id" required="" autofocus="" v-model="id">
            <input type="password" class="form-control" placeholder="Password" required="" v-model="pw">
            <div class="checkbox">
              <label>
                <input type="checkbox" v-model="save"> 비밀번호 저장
              </label>
            </div>
            <button class="btn btn-lg btn-primary btn-block" 
            @click="onSubmitLogin"><span v-html="isLoadingHtml()"></span></button>
          </div>
        </div>

        <div class="col-md-3"></div>
      </div>
    </div>
</template>

<script>
import User from '../models/user.js';

export default {
  name: 'LoginForm',
  data() {
    return {
      id : '',
      pw : '',
      save : false,
      loginLoading : false
    }
  },
  mounted() {
  },
  methods: {
    onSubmitLogin(){
      this.loginLoading = true;
      this.login()
    },

    isLoadingHtml(){
      var html = "Login"
      if(this.loginLoading){
        html = '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>'
      }
      return html
    },

    login(){
      User.login({
        id : this.id,
        pw : this.pw,
        save : this.save
      })
      .then((data) => {
        this.$router.push('/');
      })
      .catch(err => {
        alert("존재하지 않는 아이디 입니다.")
      })
      .finally(() => {
        this.loginLoading = false;
      });
    }


  }
}
</script>

<style lang="scss">
  .login_form_container{
    .row{
      margin: 100px 0px 50px;
    }

    .form {
      .checkbox{
        padding-top: 10px;
      }
    }

  }
</style>
