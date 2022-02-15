<template>
  <div id="list">
    <header-navbar :nav="navbar"></header-navbar>
    <div class="list-container">  
      <span v-for="listTitle in navbar.data" :key="listTitle.id">
        <h1 v-if="id == listTitle.id">
          {{ listTitle.name }}
        </h1>
        <span v-else></span>
      </span>
      <b-container>
        <b-row>
          <b-col
            lg="3"
            md="4"
            sm="6"
            xs="12"
            v-for="listItem in listByType.data.rows"
            :key="listItem.id"
          >
            <div class="list-items">
              <!-- <router-link :to="{ name: 'Detail', params: { title: title, detail: listItem.id}}">
                <div class="list-items-img">
                  <img :src="listItem.image" alt="film image" />
                </div>
                <div class="list-items-info">
                  <p class="list-items-title">{{ listItem.name }}</p>
                </div>
              </router-link> -->
              <a :href="$baseUrl.url + 'phim/' + title + '/' + listItem.id">
                <div class="list-items-img">
                  <img :src="$apiUrl.api + 'profiles/' + listItem.image" alt="film image" />
                </div>
                <div class="list-items-info">
                  <p class="list-items-title">{{ listItem.name }}</p>
                </div>
              </a>
            </div>
          </b-col>
        </b-row>
      </b-container> 
    </div>

    <footer-menu></footer-menu>
  </div>
</template>

<script>
import HeaderNavbar from "../components/Header.vue";
import FooterMenu from "../components/Footer.vue";

export default {
  props: ['title'],
  data() {
    return {
      components: { HeaderNavbar, FooterMenu },
    };
  },
  created() {
    const reloaded = localStorage.getItem('reloaded');
    if (reloaded !== 'true') {
      localStorage.setItem('reloaded', 'true');
      location.reload();
    }
  },
  computed: {
    navbar() {
      return this.$store.state.navbar;
    },
    listByType() {
      return this.$store.state.listByType;
    },
    id() {
      return this.$route.params.title.slice(-1);
    }
  },
  mounted() {
    this.$store.dispatch('getNavbar');
    this.$store.dispatch('getList');
    this.$store.dispatch("getListByType", this.id);
  },
  methods: {
    
  }
};
</script>

<style scoped>
#list {
  background-color: rgb(60, 60, 60);
  width: 100%;
  height: auto;
}

#list .list-container h1 {
  font-family: "Roboto", Arial;
  font-weight: bold;
  font-size: 30px;
  text-transform: uppercase;
  color: rgb(252, 226, 69);
  margin-left: 8.5vw;
  margin-bottom: 40px;
  padding-top: 150px;
}

#list .list-container .list-items {
  margin-bottom: 50px;
}

#list .list-container .list-items a {
  text-decoration: none;
}

#list .list-container .list-items .list-items-img {
  width: 100%;
  height: 300px;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 5px 5px 10px 3px rgb(30, 30, 30);
}

#list .list-container .list-items .list-items-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

#list .list-container .list-items .list-items-info {
  margin-top: 15px;
}

#list .list-container .list-items .list-items-info .list-items-title {
  font-family: "Roboto", Arial;
  font-weight: bold;
  font-size: 18px;
  color: rgb(252, 226, 69);
  text-shadow: 5px 5px 4px rgb(30, 30, 30);
  margin-bottom: 5px;
  overflow-y: hidden;
  height: 30px;
}

#list .list-container .list-items .list-items-info .list-items-eng {
  font-family: "Roboto", Arial;
  font-weight: bold;
  font-size: 14px;
  color: white;
  text-shadow: 5px 5px 4px rgb(30, 30, 30);
  overflow-y: hidden;
  height: 30px;
}
</style>
