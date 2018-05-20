<template>
  <div class="signUp_form_container">
    <div class="row">

        <div class="col-md-6 offset-md-3">
          <h2 class="form-signin-heading">Sign Up</h2>
          <div class="form" @keyup.enter="onSubmitSignUp">
            <input type="text" class="form-control" placeholder="Id" required="" autofocus="" v-model="id"
            @keyup="onKeyUpIdCheck">
            <span class="user" v-bind:class="idCheckBool ? 'fa fa-user' : 'fa fa-user-times'"></span>
            <input type="password" class="form-control" placeholder="Password" required="" v-model="pw">
            <button class="btn btn-lg btn-primary btn-block" 
            @click="onSubmitSignUp"><span v-html="isLoadingHtml()"></span></button>
          </div>
        </div>

      </div>
    </div>
</template>

<script>
import User from '../models/user.js';

export default {
  name: 'SignUp',
  data() {
    return {
      id : '',
      pw : '',
      signUpLoading : false,
      idCheckBool : null
    }
  },
  mounted() {
  },
  methods: {
    idCheck() {
      User.idCheck(
        this.id
      )
      .then((data) => {
        console.log(data)
        this.idCheckBool = data
      })
      .catch(err => {
      })
      .finally(() => {
      });
    },

    onKeyUpIdCheck() {
      this.idCheck()
    },

    onSubmitSignUp(){
      if (!this.idCheckBool) {
        alert("아이디 중복")
        return
      }
      this.signUpLoading = true;
      this.signUp()
    },

    isLoadingHtml(){
      return this.signUpLoading ? '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>' : "Sign Up"
    },

    signUp(){
      User.signUp({
        id : this.id,
        pw : this.pw
      })
      .then((data) => {
        this.$router.push({path: '/login', name: 'login', params: {userId: data.userId}});
      })
      .catch(err => {
        alert("계정 생성 오류")
      })
      .finally(() => {
        this.signUpLoading = false;
      });
    }


  }
}
</script>

<style lang="scss">
  .signUp_form_container{
    .row{
      margin: 100px 0px 50px;
    }

    .form {
      .checkbox{
        padding-top: 10px;
      }
    }

    .user {
      float: right;
      margin-right: 6px;
      margin-top: -33px;
      position: relative;
      font-size: 30px;
      opacity: 0.85;
    }
    .fa-user {
      color: #169016;
    }
    .fa-user-times {
      color: #d41717;
    }
  }
</style>
