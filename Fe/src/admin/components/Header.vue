<template>
  <div id="head">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">Admin</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <b-icon icon="person-circle" class="header-admin-icon"></b-icon>
            </template>
            <b-dropdown-item href="#">Thông tin tài khoản</b-dropdown-item>
            <b-dropdown-item @click="signOut">Đăng xuất</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  props: ["token"],
  data() {
    return {};
  },
  created() {
    if (this.token == "" || this.token == null) {
      this.$router.push({ name: "AdminLogin" });
    }
  },
  methods: {
    signOut() {
      localStorage.clear();
      this.$swal({
          icon: 'question',
          text: 'Bạn có muốn đăng xuất?',
          showDenyButton: true,
          confirmButtonText: 'Đăng xuất',
          denyButtonText: `Hủy`
      }).then((result) => {
          if (result.isConfirmed) {
          this.$router.push({ name: "AdminLogin" });
          } else if (result.isDenied) {
          
          }
      })
    }
  }
};
</script>

<style scoped>
#head .navbar-brand {
  margin-left: 8%;
}

#head .navbar-collapse {
  position: absolute;
  right: 8%;
}

#head .navbar-collapse .header-admin-icon {
  font-size: 30px;
}
</style>
