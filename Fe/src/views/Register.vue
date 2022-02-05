<template>
  <div id="register">
    <div class="dark-bg"></div>

    <img class="register-logo" src="../assets/images/movie-logo-2-new.png" alt="website logo">

    <div class="register-container">
        <div class="register-content">
            <h1> {{ pageTitle }} </h1>
            <input type="text" v-model="register_user" placeholder="Tên đăng nhập">
            <input type="password" v-model="register_password" placeholder="Mật khẩu">
            <input type="password" v-model="register_password_repeat" placeholder="Nhập lại mật khẩu">
            <input type="text" v-model="register_email" placeholder="Email">
            <input type="text" v-model="register_address" placeholder="Địa chỉ">
            <input type="text" v-model="register_phone" placeholder="Số điện thoại">
            <button id="register_button" type="button" @click="handleSubmit()"> {{ pageTitle }} </button>
            <div class="sign-up">
              <p>Bạn đã có tài khoản?</p>
              <router-link :to="{ name: 'Login' }"> Đăng nhập ngay </router-link>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      pageTitle: 'Đăng ký',
      register_user: '',
      register_password: '',
      register_password_repeat: '',
      register_email: '',
      register_address: '',
      register_phone: '',
    }
  },
  methods: {

  }
}
</script>

<style>

</style>
