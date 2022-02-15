<template>
  <div id="login">
    <div class="dark-bg"></div>

    <img class="login-logo" src="../assets/images/movie-logo-2-new.png" alt="website logo">
    
    <div class="login-container">
        <div class="login-content">
            <h1> {{ pageTitle }} </h1>
            <input type="text" v-model="email" placeholder="Email">
            <input type="password" v-model="password" placeholder="Mật khẩu">
            <button id="login_button" type="button" @click="loginSubmit"> {{ pageTitle }} </button>
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
import axios from 'axios'

export default {
  data () {
    return {
      pageTitle: 'Đăng nhập',
      email: '',
      password: '',
      apiUrl: 'http://localhost:3333/'
    }
  },
  methods: {
    loginSubmit() {
      const login = {
        email: this.email,
        password: this.password
      }
      axios.post(this.apiUrl + 'auth/login', login)
      .then(response => console.log(response))
    }
  }
}
</script>

<style>

</style>
