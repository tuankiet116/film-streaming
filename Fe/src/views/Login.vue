<template>
  <div id="login">
    <div class="dark-bg"></div>

    <img
      class="login-logo"
      src="../assets/images/movie-logo-2-new.png"
      alt="website logo"
    />

    <div class="login-container">
      <div class="login-content">
        <h1>{{ pageTitle }}</h1>
        <input type="text" v-model="email" placeholder="Email" />
        <input type="password" v-model="password" placeholder="Mật khẩu" />
        <button id="login_button" type="button" @click="loginSubmit">
          {{ pageTitle }}
        </button>
        <div class="remember-me">
          <input type="checkbox" />
          <p>Ghi nhớ tôi</p>
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
import axios from "axios";
import { API_URL } from "../constant/api";

export default {
  data() {
    return {
      pageTitle: "Đăng nhập",
      email: "",
      password: "",
      API_URL: API_URL
    };
  },
  methods: {
    loginSubmit() {
      const login = {
        email: this.email,
        password: this.password
      };
      axios
        .post(this.API_URL + "auth/login", login)
        .then(response => {
          this.checkLogin(response.data, response.status);
        })
        .catch(err => {
          if (err.response.status == 301) {
            this.$swal({
              icon: "warning",
              text: "Bạn đã đăng nhập rồi!",
              confirmButtonText: "Đóng"
            }).then(result => {
              if (result.isConfirmed) {
                this.$router.push({ name: "Home" });
              } 
            });
          }
          if (err.response.status == 401) {
            this.$swal({
              icon: "error",
              text: "Đăng nhập thất bại!",
              confirmButtonText: "Đóng"
            })
          }
          if (err.response.status == 500) {
            this.$swal({
              icon: "error",
              text: "Đăng nhập thất bại!",
              confirmButtonText: "Đóng"
            })
          }
        });
    },
    checkLogin(data, status) {
      if (status == 200 && data.code == 200) {
        this.$store.dispatch("login", data.data.token);
        this.$swal({
          icon: "success",
          text: "Đăng nhập thành công!",
          confirmButtonText: "Đóng"
        }).then(result => {
          if (result.isConfirmed) {
            this.$router.push({ name: "Home" });
          } 
        });
      }
    }
  }
};
</script>

<style></style>
