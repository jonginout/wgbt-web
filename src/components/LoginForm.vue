<template>
  <div class="login_form container">
      <form class="form-signin">
        <h2 class="form-signin-heading">Please Login in</h2>
        <input type="email" id="inputEmail" class="form-control" placeholder="Id" required="" autofocus="">
        <input type="password" id="inputPassword" class="form-control" placeholder="Password" required="">
        <div class="checkbox">
          <label>
            <input type="checkbox" value="remember-me"> Remember me
          </label>
        </div>
        <button class="btn btn-lg btn-primary btn-block" type="submit">Login</button>
      </form>
    </div>
</template>

<script>

export default {
  name: 'LoginForm',
  data() {
    return {

    }
  },
  mounted() {
  },
  methods: {

  }
}
</script>

<style lang="scss">
  .login_form{
    .form-signin {
        max-width: 330px;
        padding: 15px;
        margin: 0 auto;
    }
  }
</style>
