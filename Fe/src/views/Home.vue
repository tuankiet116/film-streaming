<template>
  <div id="home">
    <header-navbar></header-navbar>
  </div>
</template>

<script>
import HeaderNavbar from '../modules/components/Header.vue'

export default {
  data () {
    return {
      msg: 'Đăng ký',
      components: { HeaderNavbar }
    }
  },
  metaInfo() {
    return {
      title: 'Trang chủ | Xem phim trực tuyến'
    }
  },
  methods: {

  }
}
</script>

<style scoped>
  #home {
    background-color: rgb(60, 60, 60);
    width: 100%;
    height: 500px;
  }

</style>
