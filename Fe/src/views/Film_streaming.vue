<template>
  <div id="film_streaming">
    <div class="film-detail-streaming">
      <p> Xem phim </p>
      <video
        class="film-detail-stream-content"
        controls
        preload="auto"
        poster="../assets/images/spider-man-nwh-2.jpg">
        <source :src="$apiUrl.api + 'films/stream/' + source" type="video/mp4" />
      </video>
    </div>
  </div>
</template>

<script>
export default {
  props: ['source', 'img'],
  data() {
    return {
      
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
  margin-bottom: 180px;
}

#film_streaming .film-detail-streaming p {
  font-family: "Roboto", Arial;
  font-weight: bold;
  font-size: 35px;
  color: rgb(252, 226, 69);
  text-align: center;
  margin-top: 70px;
  margin-bottom: 60px;
}

#film_streaming .film-detail-streaming video {
  width: 100%;
  height: 100%;
}

</style>
