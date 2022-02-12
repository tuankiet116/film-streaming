<template>
  <div id="nav">
    <router-view></router-view>
  </div>
</template>

<script>
// import store from './store'

export default {
  name: 'app',
  // store
}
</script>

<style>
  .slick-prev {
    left: 5% !important;
    z-index: 1000 !important;
  }

  .slick-next {
    right: 5% !important;
    z-index: 1000 !important;
  }

  .header-user .dropdown-toggle::after {
    margin-left: 2.3em !important;
  }

  #header .header-items span {
    color: white !important;
  }
  
  .slick-prev:before, .slick-next:before {
    font-size: 40px !important;
  }

  #film_detail .film-detail-trailer .film-detail-trailer-video {
    margin: 0 auto;
    width: 560px;
    height: 340px;
  }

  #film_detail .film-detail-trailer .film-detail-trailer-video iframe {
    width: 100% !important;
    height: 100% !important;
  }

  @media screen and (min-width: 996px) {
    .navbar-expand-lg .navbar-nav .dropdown-menu {
      right: 0 !important;
    }
  }

  @media screen and (max-width: 575px) {
    #film_detail .film-detail-trailer .film-detail-trailer-video {
      width: 360px;
      height: 240px;
    }
  }

  @media screen and (max-width: 321px) {
    #film_detail .film-detail-trailer .film-detail-trailer-video {
      width: 260px;
      height: 180px;
    }
  }
</style>
