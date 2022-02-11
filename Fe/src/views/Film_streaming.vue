<template>
  <div id="film_streaming">
    <div class="film-detail-streaming">
        <p> Xem phim </p>
        <video width="450" controls :src="source"></video>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      components: { source }
    };
  },
  methods: {}
};
</script>

<style scoped>
#film_streaming .film-detail-streaming p {
  font-family: "Roboto", Arial;
  font-weight: bold;
  font-size: 35px;
  color: rgb(252, 226, 69);
  text-align: center;
}
</style>
