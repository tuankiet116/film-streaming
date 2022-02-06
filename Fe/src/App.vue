<template>
  <div id="nav">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
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

  @media screen and (min-width: 996px) {
    .navbar-expand-lg .navbar-nav .dropdown-menu {
      right: 0 !important;
    }
  }
</style>
