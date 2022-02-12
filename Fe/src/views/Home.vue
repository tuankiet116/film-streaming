<template>
  <div id="home">
  
    <!------ Header ------>
    <header-navbar></header-navbar>

    <!------ Slick slider ------>
    <!-- <VueSlickCarousel v-bind="slickOptions">
      <div v-for='slick in filmList' :key='slick.id' class="slick-img">
        <div v-if='slick.id == 1'>
          <div v-for='slickItem in slick.films.rows' :key='slickItem.id'>
            <img :src="slickItem.image" alt="slick slider image">
            <div class="slick-info">
              <p class="slick-title"> {{ slickItem.name }} </p>
              <p class="slick-description" v-if="slickItem.description < 100"> {{ slickItem.description }} </p>
              <p class="slick-description" v-else> {{ slickItem.description.substring(0,100)+"..."  }} </p>
              <a href="#" target="_self" class="slick-play">
                <b-icon icon="play-fill" class="slick-play-icon"></b-icon>
                Xem phim
              </a>
            </div>
          </div>
        </div>
        <div v-else></div>
      </div>
    </VueSlickCarousel> -->

    <!------ Film list ------>

    <div v-for="item in list.data" :key="item.id">
      <p> {{ item.id }} </p>
    </div>

    <div v-for='lists in list.data' :key='lists.id' class="film-list">
      <div class="film-list-name"> 
        <b-icon icon="play-circle-fill" class="film-list-icon"></b-icon>
        {{ lists.name }}
      </div>
      <div class="film-list-content">
        <VueSlickCarousel v-bind="listFilms">
          <div v-for='listFilm in lists.films.rows' :key='listFilm.id' class="film-list-items">
            <a href="#" target="_self">
              <div class="film-list-img">
                <img :src="listFilm.image">
              </div>
              <div class="film-list-info">
                <p class="film-list-title"> {{ listFilm.name }} </p>
                <!-- <p class="film-list-eng"> {{ listItems.itemTitleEng }} </p> -->
              </div>
            </a>
          </div>
        </VueSlickCarousel>
      </div>
    </div>

    <!------ New Film list ------>

    <!-- <b-container class="new-film-list-content" fluid>
      <b-row>
        <b-col lg="4" md="6" sm="12" v-for='newFilm in filmList' :key='newFilm.id'>
          <div class="new-film-list">
            <p class="new-film-name"> {{ newFilm.name }} </p>

            <a v-for='newFilmItem in newFilm.films.rows' :key='newFilmItem.id' href="#" target="_self">
              <div class="new-film-items"> 
                <div class="new-film-img">
                  <img :src="newFilmItem.image" alt="new film image">
                </div>
                <div class="new-film-info">
                  <p class="new-film-title"> {{ newFilmItem.name }} </p>
                  
                </div>
              </div>
            </a>
          </div>
        </b-col>
      </b-row>
    </b-container> -->

    <footer-menu></footer-menu>
  </div>
</template>

<script>
import HeaderNavbar from '../components/Header.vue'
import FooterMenu from '../components/Footer.vue'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import { mapState } from 'vuex'

export default {
  data () {
    return {
      components: { 
        HeaderNavbar,
        FooterMenu,
        VueSlickCarousel
      },
      slickOptions: {
        autoplay:true,
        autoplaySpeed: 4000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots:true,
        arrows:true
      },
      listFilms: {
        autoplay:false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots:false,
        arrows:true,
        responsive: [
          {
            breakpoint: 1308,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 998,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 650,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
        ]
      },
    }
  },
  computed: {
    list() {
      console.log("state: " + this.$store.state.list);
      return this.$store.state.list;     
    }
  },
  mounted() {
    this.$store.dispatch('getList');
  },
  methods: {
    
  }

}
</script>

<style scoped>
  #home {
    background-color: rgb(60, 60, 60);
    width: 100%;
    height: auto;
  }

  /********** SLICK **********/

  #home .slick-img {
    width: 100%;
    height: 600px;
    overflow: hidden;
  }

  #home .slick-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  #home .slick-img .slick-info {
    width: 50vw;
    position: absolute;
    top: 20%;
    margin-left: 10vw;
    color: white;
  }

  #home .slick-img .slick-info .slick-title {
    font-size: 3vw;
    font-weight: bold;
    text-shadow: 3px 3px 3px rgb(30, 30, 30);
  }

  #home .slick-img .slick-info .slick-description {
    font-size: 1.5vw;
    width: 30vw;
    text-shadow: 3px 3px 3px rgb(30, 30, 30);
    margin-bottom: 35px;
  }

  #home .slick-img .slick-info .slick-play {
    border-radius: 5px;
    padding: 10px 20px;
    background-color: rgba(30, 30, 30, 0.7);
    color: white;
    text-decoration: none;
    transition: .2s;
  }

  #home .slick-img .slick-info .slick-play:hover {
    background-color: rgba(30, 30, 30, 0.85);
    transition: .2s;
  }

  #home .slick-img .slick-info .slick-play .slick-play-icon {
    font-size: 23px;
    vertical-align: bottom;
  }

  /********** FILM LIST **********/

  #home .film-list {
    width: 90%;
    height: auto;
    margin: 0 auto;
    margin-top: 50px;
  }

  #home .film-list .film-list-name {
    color: white;
    font-size: 20px;
    font-weight: bold;
    font-family: 'Roboto', Arial;
    margin-bottom: 10px;
  }

  #home .film-list .film-list-name .film-list-icon {
    margin-right: 10px;
  }

  #home .film-list .film-list-content {
    background-color: rgb(30, 30, 30);
    width: 100%;
    height: 300px;
  }

  #home .film-list .film-list-content .film-list-items {
    width: 30%;
    height: 300px;
    padding: 20px;
  }

  #home .film-list .film-list-content .film-list-items a {
    text-decoration: none;
  }

  #home .film-list .film-list-content .film-list-items .film-list-img {
    height: 80%;
    width: 100%;
    overflow: hidden;
  }

  #home .film-list .film-list-content .film-list-items .film-list-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  #home .film-list .film-list-content .film-list-items .film-list-title {
    color: white;
    font-weight: bold;
    font-family: 'Roboto', Arial;
    font-size: 18px;
    text-transform: uppercase;
    margin-bottom: 0 !important;
    margin-top: 8px;
    height: 25px;
    overflow-y: hidden;
  }

  #home .film-list .film-list-content .film-list-items .film-list-eng {
    color: white;
    font-family: 'Roboto', Arial;
    font-size: 15px;
    height: 25px;
    overflow-y: hidden;
  }

  /********** FILM LIST **********/

  #home .new-film-list-content {
    padding: 67px;
  }

  #home .new-film-list-content .new-film-list {
    background-color: rgb(40, 40, 40);
    height: auto;
    padding: 15px;
    margin-bottom: 22px;
  }

  #home .new-film-list-content .new-film-list a {
    text-decoration: none;
  }

  #home .new-film-list-content .new-film-name {
    font-family: 'Roboto', Arial;
    font-weight: bold;
    font-size: 22px;
    color: rgb(252, 226, 69);
  }

  #home .new-film-list-content .new-film-items {
    background-color: rgb(30, 30, 30);
    height: 120px;
    padding: 8px;
    margin-bottom: 15px;
  }

  #home .new-film-list-content .new-film-items .new-film-img {
    float: left;
    height: 100%;
    width: 25%;
    overflow: hidden;
    margin-right: 8px;
  }

  #home .new-film-list-content .new-film-items .new-film-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  #home .new-film-list-content .new-film-items .new-film-info .new-film-title {
    color: white;
    font-weight: bold;
    font-family: 'Roboto', Arial;
    font-size: 15px;
    margin-bottom: 5px;
    height: 25px;
    overflow-y: hidden;
  }

  #home .new-film-list-content .new-film-items .new-film-info .new-film-eng {
    color: rgb(120, 120, 120);
    font-family: 'Roboto', Arial;
    font-size: 13.5px;
    height: 25px;
    overflow-y: hidden;
  }

  /********** RESPONSIVE **********/

  @media screen and (max-width: 996px) {
    #home .slick-img {
      height: 85vh;
    }

    #home .slick-img img {
      min-width: 100%;
      height: 100%;
    }

    #home .slick-img .slick-info .slick-title {
      font-size: 3vw;
    }

    #home .slick-img .slick-info .slick-description {
      font-size: 2vw;
    }
  }

  @media screen and (max-width: 415px) {
    #home .slick-img {
      height: 300px;
    }

    #home .slick-img .slick-info {
      top: 30%;
    }

    #home .new-film-list-content {
      padding: 20px;
    }
  }

</style>
