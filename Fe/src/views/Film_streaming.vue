<template>
  <div id="film_streaming">
    <div class="film-detail-streaming">
      <p> Xem phim </p>
      <p class="film-detail-name"> {{ name }} </p>
      <video
        class="film-detail-stream-content"
        controls
        preload="auto"
        :poster="API_URL + 'profiles/' + img">
        <source :src="API_URL + 'films/stream/' + source" type="video/mp4" />
      </video>
    </div>
  </div>
</template>

<script>
import { API_URL } from "../constant/api"

export default {
  props: ['source', 'img', 'name'],
  data() {
    return {
      API_URL: API_URL
    };
  },
  methods: {
    
  },

};
</script>

<style scoped>
#film_streaming .film-detail-streaming {
  width: 800px;
  height: 460px;
  margin: 0 auto;
  margin-bottom: 250px;
}

#film_streaming .film-detail-streaming p {
  font-family: "Roboto", Arial;
  font-weight: bold;
  font-size: 35px;
  color: rgb(252, 226, 69);
  text-align: center;
  margin-top: 70px;
}

#film_streaming .film-detail-streaming .film-detail-name {
  font-family: "Roboto", Arial;
  font-weight: bold;
  font-size: 30px;
  color: white;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 60px;
}

#film_streaming .film-detail-streaming video {
  width: 100%;
  height: 100%;
}

</style>
