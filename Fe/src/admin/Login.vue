<template>
  <div id="login-admin">
    <div class="login-content">
      <p class="login-content-title"> ADMIN </p>
      <b-form-group
        class="mb-3"
        label="Tài khoản"
        label-for="admin-user"
        valid-feedback="Tài khoản hợp lệ!"
      >
        <b-form-input
          class="mt-2"
          id="admin-user"
          v-model="email"
          trim
        ></b-form-input>
      </b-form-group>

      <b-form-group
        label="Mật khẩu"
        label-for="admin-pass"
        valid-feedback="Mật khẩu hợp lệ!"
        :invalid-feedback="invalidPassword"
        :state="pass"
      >
        <b-form-input
          class="mt-2"
          type="password"
          id="admin-pass"
          v-model="password"
          :state="pass"
          trim
        ></b-form-input>
      </b-form-group>

      <b-button variant="primary" @click="adminSubmit" style="margin-top: 20px; width: 100%">Đăng nhập</b-button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { API_URL } from '../constant/api'

export default {
  data() {
    return {
        API_URL,
        email: '',
        password: ''
    };
  },
  computed: {
    pass() {
      return this.password.length >= 8;
    },
    invalidPassword() {
      if (this.password.length > 0) {
        return "Mật khẩu phải chứa 8 ký tự!";
      }
      return "Điền mật khẩu.";
    }
  },
  methods: {
    adminSubmit() {
      const admin = {
        email: this.email,
        password: this.password
      }
      axios.post(this.API_URL + 'admin/auth/login', admin)
      .then(response => {
        this.checkAdmin(response.data, response.status);
      })
    },
    checkAdmin(data, status) {
      if (status == 200 && data.code == 200) {
        this.$store.dispatch('getTokenAdmin', data.data.token);
        alert('Đăng nhập thành công!');
        this.$router.push({name: 'AdminFilms'});
        return;
      }

      if (status = 301) {
        alert('Bạn đã đăng nhập rồi');
        this.$router.push({name: 'Admin'});
      }
      alert('Đăng nhập thất bại!');
    }
  }
};
</script>

<style scoped>
    #login-admin {
        background-color: rgb(230, 230, 230);
        width: 100%;
        height: 100vh;
        padding-top: 70px;
    }

    #login-admin .login-content {
        background-color: white;
        width: 30%;
        height: auto;
        margin: 0 auto;
        border-radius: 5px;
        box-shadow: 5px 5px 10px 3px rgba(30, 30, 30, 0.25);
        padding: 20px;
    }

    #login-admin .login-content .login-content-title {
        text-align: center;
        font-family: 'Roboto', Arial;
        font-weight: bold;
        font-size: 28px;
        color: rgb(13, 202, 240);
    }
</style>
