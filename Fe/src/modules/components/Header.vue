<template>
  <div id="header">
    <b-navbar toggleable="lg" type="dark" class="header-color">
      <b-navbar-brand href="#">NavBar</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Link</b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data() { 
    return {

    }
  }
};

</script>

<style scoped>
    #header .header-color {
        background: linear-gradient(to top, rgba(30, 30, 30, 0), rgba(30, 30, 30, 1));
    }
</style>
