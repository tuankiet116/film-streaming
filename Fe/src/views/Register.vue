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
            <p v-if="msg" style="color: rgb(212, 39, 47);">{{ msg }}</p>
            <div class="sign-up">
              <p>Bạn đã có tài khoản?</p>
              <router-link :to="{ name: 'Login' }"> Đăng nhập ngay </router-link>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { API_URL } from "../constant/api";

export default {
  data () {
    return {
      pageTitle: 'Đăng ký',   
      email: '',
      password: '',       
      password_repeat: '',
      msg: '',
      API_URL: API_URL
    }
  },
  methods: {
    registerSubmit() {
      if (this.password != this.password_repeat) {
        return this.msg = "Mật khẩu không trùng khớp"
      }
      else {
        const register = {
          email: this.email,
          password: this.password
        }
        axios.post(this.API_URL + 'auth/register', register)
        .then(response => {
          this.checkRegister(response.data, response.status);
        }).catch(err => {
          if (err.response.status == 500) {
            this.$swal({
              icon: "error",
              text: "Đăng ký thất bại!",
              confirmButtonText: "Đóng"
            });
            return this.msg = "";
          }
        });
      }
    },

    checkRegister(data, status) {
      if (status == 200 && data.code == 200) {
        this.$swal({
          icon: "success",
          text: "Đăng ký thành công!",
          confirmButtonText: "Đóng"
        }).then(result => {
          if (result.isConfirmed) {
            this.$router.push({ name: "Login" });
          } 
        });
        return;
      }
    }
  }
}
</script>

<style>

</style>
