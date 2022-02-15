<template>
  <div id="register">
    <div class="dark-bg"></div>

    <img class="register-logo" src="../assets/images/movie-logo-2-new.png" alt="website logo">

    <div class="register-container">
        <div class="register-content">
            <h1> {{ pageTitle }} </h1>
            <input type="text" v-model="email" placeholder="Email">
            <input type="password" v-model="password" placeholder="Mật khẩu">
            <input type="password" v-model="password_repeat" placeholder="Nhập lại mật khẩu">
            <button id="register_button" type="button" @click="registerSubmit"> {{ pageTitle }} </button>
            <!-- <p v-if="msg">{{ msg }}</p> -->
            <div class="sign-up">
              <p>Bạn đã có tài khoản?</p>
              <router-link :to="{ name: 'Login' }"> Đăng nhập ngay </router-link>
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
      pageTitle: 'Đăng ký',   
      email: '',
      password: '',       
      password_repeat: '',
      apiUrl: 'http://localhost:3333/'
    }
  },
  methods: {
    registerSubmit() {
      const register = {
        email: this.email,
        password: this.password
      }
      axios.post(this.apiUrl + 'auth/register', register)
      .then(response => {
        console.log(response);
      });
    }
  }
}
</script>

<style>

</style>
