<template>
  <div id="login-admin">
    <div class="login-content">
      <p class="login-content-title"> ADMIN </p>
      <b-form-group
        class="mb-3"
        label="Tài khoản"
        label-for="admin-user"
        valid-feedback="Tài khoản hợp lệ!"
        :invalid-feedback="invalidFeedback"
        :state="state"
      >
        <b-form-input
          class="mt-2"
          id="admin-user"
          v-model="user"
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
export default {
  data() {
    return {
        user: '',
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
