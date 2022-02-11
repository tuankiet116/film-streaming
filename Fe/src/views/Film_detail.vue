<template>
  <div id="film_detail">
    <header-navbar></header-navbar>
    <div v-for='film in filmDetails' :key='film.filmId'>
      <div v-if='detail == film.filmName'>
        <div class="film-detail-image">
          <img :src="film.filmImage">
          <div class="film-detail-background">
            <b-container>
              <b-row>
                <b-col lg="4" md="6" sm="12">
                  <div class="film-detail-img">
                    <img :src="film.filmImage" alt="Film image">
                  </div>
                </b-col>

                <b-col lg="8" md="6" sm="12">
                  <div class="film-detail-info"> 
                    <h1> {{ film.filmTitle }} </h1>
                    <div class="film-detail-btn">
                      <button type="button" class="film-detail-trailer-btn"> 
                        <b-icon icon="film"></b-icon>
                        Trailer 
                      </button>
                      <button @click="uploadStream('film-streaming')" type="button" class="film-detail-film-btn"> 
                        <b-icon icon="play-fill"></b-icon>
                        Xem phim 
                      </button>
                    </div>
                    <p> Thời lương: 145 phút </p>
                    <p> Quốc gia: Mỹ </p>
                    <p> Chất lượng: HD </p>
                    <p> Ngôn ngữ: Vietsub + Thuyết minh </p>
                  </div>
                </b-col>
              </b-row>
            </b-container>
          </div>
        </div>

        <div class="film-detail-des">
          <p> {{ film.filmDes }} </p>
        </div>

        <div class="film-detail-trailer">
          <p> Official trailer </p>
          {{ film.filmTrailer }}
          <video-embed src="https://www.youtube.com/embed/kTJczUoc26U" class="film-detail-trailer-video"></video-embed>
        </div>

        <component 
          :is="cmp"
          :source="film.filmTrailer">
        </component>
   
        <div class="film-detail-same-type">
          <p> Cùng thể loại </p>
          <b-container>
            <b-row>
              <b-col lg="3" md="6" sm="1">
                <div class="film-detail-same-items">
                  <router-link to="#">
                    <div class="film-detail-same-img">
                      <img src="../assets/images/spider-man-nwh-2.jpg" alt="same film type">
                    </div>
                    <div class="film-detail-same-info">
                      <p class="film-detail-same-title"> Người Nhện: Không Còn Nhà </p>
                    </div>
                  </router-link>
                </div>  
              </b-col>

              <b-col lg="3" md="6" sm="1">
                <div class="film-detail-same-items">
                  <div class="film-detail-same-img">
                    <img src="../assets/images/suicide-squad-2.jpg" alt="same film type">
                  </div>
                  <div class="film-detail-same-info">
                    <p class="film-detail-same-title"> Biệt Đội Cảm Tử 2 </p>
                  </div>
                </div>
              </b-col>

              <b-col lg="3" md="6" sm="1">
                <div class="film-detail-same-items">
                  <div class="film-detail-same-img">
                    <img src="../assets/images/venom-2.jpg" alt="same film type">
                  </div>
                  <div class="film-detail-same-info">
                    <p class="film-detail-same-title"> Venom: Let There Be Carnage </p>
                  </div>
                </div>
              </b-col>

              <b-col lg="3" md="6" sm="1">
                <div class="film-detail-same-items">
                  <div class="film-detail-same-img">
                    <img src="../assets/images/spider-man-nwh-2.jpg" alt="same film type">
                  </div>
                  <div class="film-detail-same-info">
                    <p class="film-detail-same-title"> Người Nhện: Không Còn Nhà </p>
                  </div>
                </div>
              </b-col>
            </b-row>
          </b-container>
        </div>
      </div>

      <div v-else></div>
    </div>

    <footer-menu></footer-menu>
  </div>
</template>

<script>
import HeaderNavbar from "../components/Header.vue";
import FooterMenu from "../components/Footer.vue";
import FilmStreaming from "./Film_streaming.vue";

export default {
  props: {
    name: {
      type: String,
      required: true
    },
    detail: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      components: { 
        HeaderNavbar, 
        FooterMenu, 
        'film-streaming':FilmStreaming
      },
      filmDetails: [
        {
          filmId: 1,
          filmType: "phim-moi",
          filmName: "nguoi-nhen",
          filmTitle: "Người Nhện: Không Còn Nhà",
          filmDes: "Sau khi Quentin Beck buộc tội Peter Parker về tội giết người và tiết lộ danh tính của cậu cho cả thế giới",
          filmImage: require('../assets/images/spider-man-nwh-2.jpg'),
          filmTrailer: '',
          filmSource: 'https://media.istockphoto.com/videos/large-young-female-siberian-tiger-runs-directly-against-the-camera-video-id1296400636'
        },
        {
          filmId: 2,
          filmType: "phim-moi",
          filmName: "venom",
          filmTitle: "Venom 2: Đối Mặt Tử Thù",
          filmDes: "Sau khi Quentin Beck buộc tội Peter Parker về tội giết người và tiết lộ danh tính của cậu cho cả thế giới",
          filmImage: require('../assets/images/venom-2.jpg'),
          filmTrailer: ''
        },
        {
          filmId: 1,
          filmType: "phim-moi",
          filmName: "biet-doi-cam-tu",
          filmTitle: "Biệt Đội Cảm Tử 2",
          filmDes: "Sau khi Quentin Beck buộc tội Peter Parker về tội giết người và tiết lộ danh tính của cậu cho cả thế giới",
          filmImage: require('../assets/images/suicide-squad-2.jpg'),
          filmTrailer: ''
        }
      ],
      cmp: ''
    };
  },
  methods: {
    uploadStream(item) {
      this.cmp = item;
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
  box-shadow: 5px 5px 10px 3px rgb(30, 30, 30);
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
