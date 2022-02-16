<template>
  <div id="header">
    <b-navbar toggleable="lg" type="dark" class="header-color">
      <b-navbar-brand :href="$baseUrl.url" class="header-logo">
        <img src="../assets/images/movie-logo-2-new.png" alt="Navbar Logo" />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item
            v-for="navbar in nav.data"
            :key="navbar.id"
            :href="$baseUrl.url + 'phim/' + removeAccents(navbar.name) + '-' + navbar.id"
            class="header-items">
            {{ navbar.name }}
          </b-nav-item>
          <!-- <router-link 
            v-for="navbar in nav.data"
            :key="navbar.id"
            :to="{ name: 'Films', params: {title: removeAccents(navbar.name) + '-' + navbar.id} }"
            class="header-items">
            {{ navbar.name }}
          </router-link> -->
          
        </b-navbar-nav>

        <b-navbar-nav class="header-items header-right">
          <b-nav-form class="header-search-form">
            <b-form-input size="md" placeholder="Tìm kiếm phim"></b-form-input>
            <b-button
              variant="primary"
              size="md"
              type="submit"
              class="header-search-btn"
            >
              <b-icon icon="search"></b-icon>
            </b-button>
          </b-nav-form>

          <b-nav-item-dropdown class="header-user" right>
            <template #button-content>
              <em>
                <b-icon icon="person-circle" class="header-user-icon"></b-icon>
              </em>
            </template>
            <span v-if="token != ''">
              <b-dropdown-item href="#">Thông tin tài khoản</b-dropdown-item>
              <b-dropdown-item @click="signOut">Đăng xuất</b-dropdown-item>
            </span>
            <span v-else>
              <b-dropdown-item :href="$baseUrl.url + 'dang-nhap'">Đăng nhập</b-dropdown-item>
              <b-dropdown-item :href="$baseUrl.url + 'dang-ky'">Đăng ký</b-dropdown-item>
            </span>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
// import EventService from '../services/EventService.js'

export default {
  props: ['nav', 'token'],
  data() {
    return {

    };
  },
  methods: {
    removeAccents(str) {
      return str.normalize('NFD')
             .replace(/[\u0300-\u036f]/g, '')
             .replace(/đ/g, 'd').replace(/Đ/g, 'D')
             .replace(/\s+/g, '-').toLowerCase();
    },

    signOut() {
      this.$store.dispatch('logout');
      // alert('Đăng xuất thành công!');
      this.$swal({
        icon: 'question',
        text: 'Bạn có muốn đăng xuất?',
        showDenyButton: true,
        confirmButtonText: 'Đăng xuất',
        denyButtonText: `Hủy`
      }).then((result) => {
        if (result.isConfirmed) {
          location.reload();
        } else if (result.isDenied) {
         
        }
      })
    }
  }
  // created() {
  //   EventService.getMenu()
  //     .then(response => {
  //       this.menu = response.data
  //     })
  //     .catch(error => {
  //       console.log('There was an error:' + error.response)
  //     });
  // }
};
</script>

<style scoped>
#header {
  position: fixed;
  z-index: 2000;
  width: 100%;
}

#header .header-color {
  background: linear-gradient(to top, rgba(30, 30, 30, 0.05), rgba(30, 30, 30, 1));
  height: 80px;
}

#header .header-logo {
  width: 10%;
  height: auto;
  overflow: hidden;
  margin-top: -15px;
  margin-left: 10px;
}

#header .header-logo img {
  width: 60%;
  height: auto;
  /* margin-top: -10px; */
  margin-left: 20%;
}

#header .header-items {
  text-transform: uppercase;
  font-family: "Roboto", Arial;
  font-weight: bold;
}

#header .header-items a {
  text-transform: uppercase;
  font-family: "Roboto", Arial;
  font-weight: bold;
  color: white !important;
  text-decoration: none;
  padding-right: 20px;
}

#header .header-items .header-search-form {
  position: relative;
}

#header .header-items .header-search-form .header-search-btn {
  position: absolute;
  right: -43px;
  top: 0;
  border-radius: 0 5px 5px 0;
  opacity: 1 !important;
}

#header .header-items .header-user-icon {
  font-size: 30px;
  position: absolute;
  top: 5px;
}

#header .header-dropdown {
  padding-right: 27px;
}

@media screen and (min-width: 996px) {
  #header .header-right {
    position: absolute;
    right: 5%;
    padding-right: 28px;
  }

  #header .header-items .header-search-form {
    right: 70px;
  }
}

@media screen and (max-width: 996px) {
  #header .header-color {
    background-color: rgba(30, 30, 30, 0.8);
    height: 80px;
    margin-top: -5px;
  }

  #header .header-color .navbar-toggler {
    margin-right: 5%;
    margin-top: -5px;
  }

  #header .header-color .navbar-collapse {
    position: absolute;
    width: 100vw;
    top: 80px;
  }

  #header .header-logo {
    width: 80px;
    height: auto;
    overflow: hidden;
  }

  #header .header-logo img {
    width: 100%;
    height: auto;
    margin-left: 0;
  }

  #header .header-items {
    padding-left: 10px;
    background-color: rgba(30, 30, 30, 0.8);
  }

  #header .header-items .header-search-form input[type="text"] {
    width: 95%;
  }

  #header .header-items .header-search-form .header-search-btn {
    right: 0;
  }

  #header .header-right {
    padding-right: 28px;
  }
}

@media screen and (max-width: 415px) {
  #header .header-right {
    padding-right: 10px;
  }

  #header .header-logo {
    width: 20%;
    overflow: hidden;
  }

  #header .header-logo img {
    width: 100%;
    height: auto;
    margin-left: 10%;
  }

  #header .header-dropdown {
    padding-right: 2.5%;
  }
}

@media screen and (max-width: 376px) {
  
}

@media screen and (max-width: 321px) {
  
}
</style>
