<template>
  <div id="bannerCarousel" class="carousel slide carousel-fade" data-bs-ride="carousel">

    <div class="carousel-inner carouselSize py-3">
      <div v-for="(img, index) in home.firstCarouselImg" :data-id="index" class="carousel-item active">
        <img :src="(img.medium.url)" class="carousel-img img-fit d-block" :alt="img.medium.name">
        <div class="carousel-text">
          <h1>Treasure Valley</h1>
          <h1>LifeStyle Family Photography</h1>
        </div>
      </div>
      <div v-for="(img, index) in home.carouselImgs" :data-id="index" class="carousel-item">
        <img :src="(img.medium.url)" class="carousel-img img-fit d-block" :alt="img.medium.name">
        <div class="carousel-text">
          <h1>Treasure Valley</h1>
          <h1>LifeStyle Family Photography</h1>
        </div>
      </div>

    </div>

    <!-- TODO speed up carousel timer -->
  </div>
</template>


<script>
import { computed } from '@vue/reactivity';
import { AppState } from '../AppState.js';



export default {

  setup() {
    return {
      home: computed(() => AppState.homePage)


    }
  }
}
</script>


<style lang="scss" scoped>
.carouselSize {
  height: 80vh;
}

.img-fit {
  width: 100%;
  height: auto;
}

.carousel-text {
  position: absolute;
  right: 15%;
  top: 30%;
  left: 15%;
  color: white;
  text-shadow: 2px 2px #181818;
  text-align: center;
}
</style>