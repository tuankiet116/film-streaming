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

  .dropdown-toggle::after {
    margin-left: 2.3em !important;
  }

  @media screen and (min-width: 996px) {
    .navbar-expand-lg .navbar-nav .dropdown-menu {
      right: 0 !important;
    }
  }
</style>
