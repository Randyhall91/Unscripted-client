<template>
  <div id="bannerCarousel" class="carousel slide carousel-fade" data-bs-ride="carousel">

    <div class="carousel-inner carouselSize py-3">
      <div v-for="(img, index) in home.carousel" :id="index" :class="index === 0 ? 'active' : ''" class="carousel-item"
        data-bs-interval="2000">
        <img :src="(img.medium.url)" class="carousel-img img-fit d-block" :alt="img.medium.name">
        <div class="carousel-text">
          <h1>Treasure Valley</h1>
          <h1>LifeStyle Family Photography</h1>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#bannerCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#bannerCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>


    </div>

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
  height: 100%;
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