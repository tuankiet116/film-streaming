<template>
  <div id="film_detail">
    <header-navbar :nav="navbar" :token="tokenUser"></header-navbar>
      <div class="film-detail-image">
        <img :src="API_URL + 'profiles/' + detail.data.image">
        <div class="film-detail-background">
          <b-container>
            <b-row>
              <b-col lg="4" md="6" sm="12">
                <div class="film-detail-img">
                  <img :src="API_URL + 'profiles/' + detail.data.image">
                </div>
              </b-col>

              <b-col lg="8" md="6" sm="12">
                <div class="film-detail-info"> 
                  <h1> {{ detail.data.name }} </h1>
                  <div class="film-detail-btn">
                    <button @click="moveTrailer()" type="button" class="film-detail-trailer-btn"> 
                      <b-icon icon="film"></b-icon>
                      Trailer 
                    </button>
                    <button @click="uploadStream('film-streaming')" type="button" class="film-detail-film-btn"> 
                      <b-icon icon="play-fill"></b-icon>
                      Xem phim 
                    </button>
                  </div>
                  <p> Diễn viên: {{ detail.data.actor }} </p>
                  <div v-for="type in navbar.data" :key="type.id">
                    <p v-if="id == type.id">
                      Thể loại: {{ type.name }}
                    </p>
                    <p v-else></p>
                  </div>
                </div>
              </b-col>
            </b-row>
          </b-container>
        </div>
      </div>

      <div class="film-detail-des">
        <p> {{ detail.data.description }} </p>
      </div>

      <div class="film-detail-trailer">
        <p> Official trailer </p>
        <video-embed :src="detail.data.trailer" class="film-detail-trailer-video"></video-embed>
      </div>

      <div class="movie">
        <component 
          :is="cmp"
          :name="detail.data.name"
          :source="detail.data.id"
          :img="detail.data.image">
        </component>
      </div>

      <!-- <div v-if="comments">
        <div class="fb-comments" id="show" data-href="http://localhost:8080/" data-width="500" data-numposts="5"></div>
      </div>
      <div v-else></div> -->
  
      <div class="film-detail-same-type">
        <p> Cùng thể loại </p>
        <b-container>
          <b-row>
            <b-col lg="3" md="6" sm="1" v-for="same in listByType.data.rows" :key="same.id">
              <div class="film-detail-same-items">
                <a :href="$baseUrl.url + 'phim/' + title + '/' + same.id">
                  <div class="film-detail-same-img">
                    <img :src="API_URL + 'profiles/' + same.image" alt="same film type">
                  </div>
                  <div class="film-detail-same-info">
                    <p class="film-detail-same-title"> {{ same.name }} </p>
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
import FilmStreaming from "./Film_streaming.vue";
import { API_URL } from '../constant/api'

export default {
  props: ['title', 'filmDetail'],
  data() {
    return {
      API_URL: API_URL,
      components: { 
        HeaderNavbar, 
        FooterMenu, 
        'film-streaming':FilmStreaming
      },
      cmp: '',
      comments: false,
      tokenUser: ''
    };
  },
  computed: {
    navbar() {
      return this.$store.state.navbar;
    },
    detail() {
      return this.$store.state.detail;
    },
    id() {
      return this.$route.params.title.slice(-1);
    },
    listByType() {
      return this.$store.state.listByType;
    }
  },
  mounted() {
    this.$store.dispatch('getNavbar');
    this.$store.dispatch("getDetail", this.filmDetail);
    this.$store.dispatch("getListByType", this.id);
    this.tokenUser = localStorage.getItem('token');
  },
  methods: {
    uploadStream(item) {
      this.cmp = item;
      this.comments = !this.comments;
      let el = this.$el.getElementsByClassName('movie')[0];
      el.scrollIntoView({behavior: 'smooth'});
    },

    moveTrailer() {
      let trailer = this.$el.getElementsByClassName('film-detail-trailer')[0];
      trailer.scrollIntoView({behavior: 'smooth'});
    }
  }
};
</script>

<style scoped>
#film_detail {
  background-color: rgb(30, 30, 30);
  width: 100%;
  height: auto;
}

#film_detail .film-detail-image {
  height: 100vh;
  overflow: hidden;
  position: relative;
}

#film_detail .film-detail-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

#film_detail .film-detail-background {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(30, 30, 30, 0.7), rgba(30, 30, 30, 1));
}

#film_detail .film-detail-background .film-detail-img {
  height: 420px;
  margin-top: 150px;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 5px 5px 10px 3px rgb(30, 30, 30);
}

#film_detail .film-detail-background .film-detail-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

#film_detail .film-detail-background .film-detail-info {
  margin-top: 150px;
}

#film_detail .film-detail-background .film-detail-info h1 {
  font-family: "Roboto", Arial;
  font-weight: bold;
  font-size: 35px;
  color: rgb(252, 226, 69);
}

#film_detail .film-detail-background .film-detail-info .film-detail-btn {
  margin-top: 40px;
  margin-bottom: 20px;
}

#film_detail .film-detail-background .film-detail-info .film-detail-btn .film-detail-trailer-btn {
  background-color: rgb(229, 102, 101);
  border-radius: 5px;
  border: none;
  padding: 7px 15px;
  color: white;
  display: inline-block;
  text-decoration: none;
  margin-right: 8px;
}

#film_detail .film-detail-background .film-detail-info .film-detail-btn .film-detail-film-btn {
  background-color: rgb(80, 143, 222);
  border-radius: 5px;
  border: none;
  padding: 7px 15px;
  color: white;
  display: inline-block;
  text-decoration: none;
}

#film_detail .film-detail-background .film-detail-info p {
  font-family: "Roboto", Arial;
  font-size: 16px;
  color: white;
  margin-bottom: 5px;
}

#film_detail .film-detail-des {
  width: 70%;
  margin: 0 auto;
}

#film_detail .film-detail-des p {
  font-family: "Roboto", Arial;
  font-size: 16px;
  color: white;
  text-align: justify;
}

#film_detail .film-detail-trailer,
#film_detail .film-detail-same-type {
  margin-top: 70px;
}

#film_detail .film-detail-same-type {
  margin-bottom: 80px;
}

#film_detail .film-detail-trailer p {
  margin-bottom: 60px;
}

#film_detail .film-detail-trailer p,
#film_detail .film-detail-same-type p {
  font-family: "Roboto", Arial;
  font-weight: bold;
  font-size: 35px;
  color: rgb(252, 226, 69);
  text-align: center;
}

#film_detail .film-detail-same-type .film-detail-same-items {
  margin-top: 50px;
}

#film_detail .film-detail-same-type .film-detail-same-items a {
  text-decoration: none;
}

#film_detail .film-detail-same-type .film-detail-same-items .film-detail-same-img {
  width: 100%;
  height: 300px;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 5px 5px 10px 3px rgb(15, 15, 15);
}

#film_detail .film-detail-same-type .film-detail-same-items .film-detail-same-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

#film_detail .film-detail-same-type .film-detail-same-items .film-detail-same-info {
  margin-top: 15px;
}

#film_detail .film-detail-same-type .film-detail-same-items .film-detail-same-info .film-detail-same-title {
  font-family: "Roboto", Arial;
  font-weight: bold;
  font-size: 18px;
  color: white;
  text-shadow: 5px 5px 4px rgb(30, 30, 30);
  margin-bottom: 5px;
  overflow-y: hidden;
  height: 30px;
  text-align: left !important;
}

@media screen and (max-width: 767px) {
  #film_detail .film-detail-image {
    height: 1000px;
  }

  #film_detail .film-detail-background .film-detail-info {
    margin-top: 100px;
  }

  #film_detail .film-detail-des {
    width: 90%;
  }
}

</style>
