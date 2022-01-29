<template>
  <div id="register">
    <div id="login">
        <div class="dark-bg"></div>

        <img class="login-logo" src="../assets/images/movie-logo-2-new.png" alt="website logo">
    
        <div class="login-container">
            <div class="login-content">
                <h1> {{ msg }} </h1>
                <input type="text" placeholder="Email hoặc số điện thoại">
                <input type="password" placeholder="Mật khẩu">
                <input type="password" placeholder="Nhập lại mật khẩu">
                <input type="text" placeholder="Email">
                <input type="text" placeholder="Địa chỉ">
                <input type="text" placeholder="Số điện thoại">
                <button type="button"> {{ msg }} </button>
                <div class="remember-me">
                <input type="checkbox">
                <p> Ghi nhớ tôi </p>
                </div>
                <div class="sign-up">
                <p>Bạn đã có tài khoản?</p>
                <a href="#" target="_self"> Đăng nhập ngay </a>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'register',
  data () {
    return {
      msg: 'Đăng ký'
    }
  }
}
</script>

<style>
@import '../assets/css/style.css';

</style>
