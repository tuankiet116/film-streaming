<template>
  <div id="home">
    <header-navbar></header-navbar>
    <VueSlickCarousel v-bind="slickOptions">
      <div v-for='slick in slickItems' :key='slick.slickId' class="slick-img">
        <img :src="slick.slickSrc" :alt='slick.slickAlt'>
        <div class="slick-info">
          <p class="slick-title"> {{ slick.slickTitle }} </p>
          <p class="slick-description" v-if="slick.slickDes < 100"> {{ slick.slickDes }} </p>
          <p class="slick-description" v-else> {{ slick.slickDes.substring(0,100)+"..."  }} </p>
        </div>
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import HeaderNavbar from '../components/Header.vue'
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
        autoplay:false,
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
          slickAlt: 'Slider 1',
          slickTitle: 'Người Nhện: Không Còn Nhà',
          slickDes: 'Sau khi Quentin Beck buộc tội Peter Parker về tội giết người và tiết lộ danh tính của cậu cho cả thế giới'
        },
        {
          slickId: 2,
          slickSrc: require('../assets/images/suicide-squad-2.jpg'),
          slickAlt: 'Slider 2',
          slickTitle: 'Người Nhện: Không Còn Nhà',
          slickDes: 'Sau khi Quentin Beck buộc tội Peter Parker về tội giết người và tiết lộ danh tính của cậu cho cả thế giới'
        },
        {
          slickId: 3,
          slickSrc: require('../assets/images/venom-2.jpg'),
          slickAlt: 'Slider 3',
          slickTitle: 'Người Nhện: Không Còn Nhà',
          slickDes: 'Sau khi Quentin Beck buộc tội Peter Parker về tội giết người và tiết lộ danh tính của cậu cho cả thế giới'
        }
      ]
    }
  },
  methods: {
    // textCheck(text) {
    //   return text.slice(0, 10) + (text.length > 10 ? "..." : "");
    // }
  },

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
  }

  #home .slick-img img {
    width: 100%;
    height: auto;
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
  }

  @media screen and (max-width: 996px) {
    #home .slick-img {
      height: 85vh;
    }

    #home .slick-img img {
      min-width: 100%;
      height: 100%;
    }
  }

  @media screen and (max-width: 415px) {
    #home .slick-img {
      height: 300px;
    }
  }

</style>
