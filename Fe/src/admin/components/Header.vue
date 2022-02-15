<template>
  <div id="head">
    <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">Admin</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">

                <b-nav-item-dropdown right>
                    <!-- Using 'button-content' slot -->
                    <template #button-content>
                        <span style="color: white">User</span>
                    </template>
                    <b-dropdown-item href="#">Thông tin tài khoản</b-dropdown-item>
                    <b-dropdown-item href="#">Đăng xuất</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
    data() {

    }
}
</script>

<style scoped>
    #head .navbar-brand {
        margin-left: 8%;
    }

    #head .navbar-collapse {
        position: absolute;
        right: 8%;
    }
</style>