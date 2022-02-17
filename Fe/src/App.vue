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

  .b-sidebar {
    top: 8.5% !important;
    width: 250px;
  }

  .table-responsive {
    overflow-x: scroll;
    overflow-y: auto;
    max-height: 410px;
    min-height: 410px;
  }

  .table-responsive table {
    width: 180%;
  }

  .table-types {
    overflow-x: scroll;
  }

  .table-types table {
    width: 100%;
  }

  .table-responsive table thead tr th {
    padding: 10px;
  }

  .table-responsive table thead tr th div {
    font-family: 'Roboto', Arial;
    color: rgb(120, 120, 120);
  }

  .table-img {
    width: 55px;
    height: 60px;
    overflow: hidden;
    margin: 0 auto;
  }

  .table-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  button.close {
    border: none;
    border-radius: 5px;
    background-color: rgb(230, 230, 230);
    width: 30px;
    height: 30px;
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
