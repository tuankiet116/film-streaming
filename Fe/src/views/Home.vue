<template>
  <div id="home">
    <header-navbar></header-navbar>
    <VueSlickCarousel v-bind="slickOptions">
      <div v-for='slick in slickItems' :key='slick.slickId' class="slick-img">
        <img :src="slick.slickSrc" :alt='slick.slickAlt'>
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import HeaderNavbar from '../modules/components/Header.vue'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  data () {
    return {
      components: { 
        HeaderNavbar,
        VueSlickCarousel
      },
      slickOptions: {
        autoplay:true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots:true,
        arrows:true
      },
      slickItems: [
        {
          slickId: 1,
          slickSrc: require('../assets/images/spider-man-nwh-2.jpg'),
          slickAlt: 'Slider 1'
        },
        {
          slickId: 2,
          slickSrc: require('../assets/images/suicide-squad-2.jpg'),
          slickAlt: 'Slider 2'
        },
        {
          slickId: 3,
          slickSrc: require('../assets/images/venom-2.jpg'),
          slickAlt: 'Slider 3'
        }
      ]
    }
  },
  methods: {

  }
}
</script>

<style scoped>
  #home {
    background-color: rgb(60, 60, 60);
    width: 100%;
    height: 800px;
  }

  #home .slick-img {
    width: 100%;
    height: 600px;
    overflow: hidden;
    border: 1px solid red;
  }

  #home .slick-img img {
    width: 100%;
    height: auto;
  }

  @media screen and (max-width: 996px) {
    #home .slick-img {
      height: 300px;
    }

    #home .slick-img img {
      width: 100%;
      height: 100%;
    }
  }

</style>
