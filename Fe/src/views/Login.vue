<template>
  <div id="login">
    <div class="dark-bg"></div>

    <img class="login-logo" src="../assets/images/movie-logo-2-new.png" alt="website logo">
    
    <div class="login-container">
        <div class="login-content">
            <h1> {{ pageTitle }} </h1>
            <input type="text" v-model="login_user" placeholder="Email hoặc số điện thoại">
            <input type="password" v-model="login_password" placeholder="Mật khẩu">
            <button id="login_button" type="button" @click="handleSubmit()"> {{ pageTitle }} </button>
            <div class="remember-me">
              <input type="checkbox">
              <p> Ghi nhớ tôi </p>
            </div>
            <div class="sign-up">
              <p>Bạn mới tham gia?</p>
              <router-link :to="{ name: 'Register' }"> Đăng ký ngay </router-link>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      pageTitle: 'Đăng nhập',
      login_user: '',
      login_password: '',
    }
  },
  methods: {

  }
}
</script>

<style>

</style>
