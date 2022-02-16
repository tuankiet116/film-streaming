<template>
  <div id="dashboard">
    <header-admin></header-admin>
    <side-bar></side-bar>

    <div class="panel">
      <div class="panel-content">
        <img src="../assets/images/dashboard.png">
      </div>
    </div>
  </div>
</template>

<script>
import HeaderAdmin from "./components/Header.vue";
import SideBar from "./components/Sidebar.vue";
import axios from "axios";
import { API_URL } from "../constant/api";

export default {
  components: { HeaderAdmin, SideBar },
  data() {
    return {
      API_URL
    }
  },
  computed: {
    
  },
  mounted() {
    axios
      .get(this.API_URL + "admin/film/list")
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        if (err.response.status == 401) {
          alert("Bạn không có quyền truy cập!");
          this.$router.push({
            name: "AdminLogin"
          });
        }
        location.reload();
      });
  },
  methods: {
    
  }
};
</script>

<style scoped>
#dashboard {
  height: auto;
}

#dashboard .panel {
  position: relative;
  width: 80%;
  height: 91.5vh;
  padding: 30px;
  float: left;
  background-color: rgb(210, 210, 210);
}

#dashboard .panel .panel-content {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 5px;
  box-shadow: 5px 5px 10px 3px rgba(30, 30, 30, 0.25);
  overflow: hidden;
}

#dashboard .panel .panel-content img {
  width: 100%;
  height: 100%;
}

</style>
