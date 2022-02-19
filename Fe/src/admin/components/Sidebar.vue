<template>
  <div id="sidebar">
    <!-- <b-button v-b-toggle.sidebar-no-header class="toggle-slider" @click="changePanel">Toggle Sidebar</b-button>
    <b-sidebar id="sidebar-no-header" aria-labelledby="sidebar-no-header-title" no-header shadow>
      <template #default="{ hide }">
        <div class="p-3">
          <nav class="mb-3">
            <b-nav vertical>
              <b-nav-item active @click="hide">Active</b-nav-item>
              <b-nav-item href="#link-1" @click="hide">Link</b-nav-item>
              <b-nav-item href="#link-2" @click="hide">Another Link</b-nav-item>
            </b-nav>
          </nav>
          <b-button variant="primary" block @click="hide">Close Sidebar</b-button>
        </div>
      </template>
    </b-sidebar> -->
    <div class="sidebar-content">
      <b-nav vertical pills>
        <!-- <b-nav-item>
          <b-icon icon="bar-chart-line-fill" class="sidebar-icon"></b-icon>
          Thống kê
        </b-nav-item> -->
        <b-nav-item :href="$baseUrl.url + 'admin/films'">
          <b-icon icon="film" class="sidebar-icon"></b-icon>
          Quản lý phim
        </b-nav-item>
        <b-nav-item :href="$baseUrl.url + 'admin/type'">
          <b-icon icon="tags-fill" class="sidebar-icon"></b-icon>
          Quản lý thể loại
        </b-nav-item>
      </b-nav>
    </div>
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
  #sidebar {
    width: 20%;
    height: 91.5vh;
    position: relative;
    float: left;
  }

  .toggle-slider {
    top: 9px;
    left: 20%;
    position: absolute;
  }

  #sidebar .sidebar-content {
    width: 100%;
    height: 100%;
    background-color: rgb(53, 57, 61);
    position: relative;
    box-shadow: 5px 5px 10px 3px rgba(30, 30, 30, 0.25);
  }

  #sidebar .sidebar-content .nav-pills .nav-item {
    transition: .3s;
  }

  #sidebar .sidebar-content .nav-pills .nav-item:hover {
    background-color: rgb(120, 120, 120);
    transition: .3s;
  }


  #sidebar .sidebar-content .nav-pills .nav-item .nav-link {
    border-radius: 0 !important;
    color: white;
    padding-top: 12px;
    padding-bottom: 12px;
  }

  #sidebar .sidebar-content .nav-pills .nav-item .nav-link .sidebar-icon {
    margin-right: 5px;
  }
</style>
