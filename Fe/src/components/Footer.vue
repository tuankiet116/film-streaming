<template>
  <div id="footer">
    <b-container>
      <b-row>
        <b-col lg="3" md="3" sm="12">
          <img
            class="footer-logo"
            src="../assets/images/movie-logo-2-new.png"
            alt="footer logo"
          />
          <p class="footer-intro">
            Xem phim mới miễn phí nhanh chất lượng cao. Xem phim online Viet
            Sub, Thuyết minh, lồng tiếng chất lượng HD.
          </p>
        </b-col>

        <b-col
          v-for="footer in navbar.data"
          :key="footer.id"
          lg="2"
          md="2"
          sm="12"
        >
          <p class="footer-title">{{ footer.name }}</p>
          <!-- <ul class="footer-list">
            <li
              v-for="footerItem in footer.footerItems"
              :key="footerItem.footerItemId"
            >
              <a href="#" target="_self">
                {{ footerItem.footerItemTitle }}
              </a>
            </li>
          </ul> -->
        </b-col>

        <b-col lg="3" md="3" sm="12" class="footer-contact-content">
          <div class="footer-contact">
            <b-icon icon="telephone-fill" class="footer-contact-icon"></b-icon>
            <div class="footer-contact-info">
              <p>Số điện thoại:</p>
              <p>035.955.9225</p>
            </div>
          </div>
          <div class="footer-contact">
            <b-icon icon="envelope-fill" class="footer-contact-icon"></b-icon>
            <div class="footer-contact-info">
              <p>Email liên hệ:</p>
              <p>doanphilong2k@gmail.com</p>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    navbar() {
      return this.$store.state.navbar;
    }
  },
  mounted() {
    this.$store.dispatch('getNavbar');
  }
};
</script>

<style scoped>
  #footer {
    height: auto;
    background-color: rgb(25, 25, 25);
    padding-bottom: 50px;
  }

  #footer .footer-logo {
    width: 150px;
    height: 150px;
  }

  #footer .footer-intro {
    color: white;
    font-family: "Roboto", Arial;
    font-size: 12px;
  }

  #footer .footer-title {
    color: rgb(252, 226, 69);
    font-family: "Roboto", Arial;
    font-size: 22px;
    font-weight: bold;
    margin-top: 80px;
    margin-left: 15px;
  }

  #footer .footer-list li a {
    color: white;
    font-family: "Roboto", Arial;
    font-size: 15px;
    text-decoration: none;
  }

  #footer .footer-contact-content {
    margin-top: 50px;
  }

  #footer .footer-contact-content .footer-contact .footer-contact-icon {
    color: white;
    font-size: 35px;
    float: left;
    height: 78px;
    margin-right: 20px;
  }

  #footer .footer-contact-content .footer-contact .footer-contact-info {
    height: auto;
    padding: 20px 0 20px 0;
  }

  #footer .footer-contact-content .footer-contact .footer-contact-info p {
    color: rgb(120, 120, 120);
    font-size: 13px;
    font-family: "Roboto", Arial;
    font-weight: bold;
    margin-bottom: 0;
  }
</style>
