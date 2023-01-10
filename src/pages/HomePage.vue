<template>
  <div v-if="home" class="container-fluid p-0">
    <div class="row g-0">
      <div class="col-12 mt-5 mx-0 px-0">
        <BannerCarousel />
      </div>
    </div>
    <div class="row g-0 d-flex justify-content-center mt-3">
      <div class="col-lg-12 text-center">
        <p class="barlow fs-1">
          {{ home.quote }}
        </p>
      </div>
    </div>
    <div class="row g-0 mt-5 pb-5 pe-3">
      <div class="col-lg-6 d-flex flex-column justify-content-center">
        <h3 class="px-5">{{ home.aboutHeader }}</h3>
        <p class="px-5 fragment">
          {{ home.aboutContent }}
        </p>
      </div>
      <!-- <div :style="{ backgroundImg: `url(${(home.mugshot)})` }" class="col-lg-6 mugshot">
      </div> -->
      <div class="col-lg-6 d-flex justify-content-center">
        <img class="mugshot" :src="home.mugshot">
      </div>
    </div>
    <div class="row g-0 mt-5">
      <div class="col-lg-6">
        <img class="img-fluid" :src="home.lifeStylePicture">
      </div>
      <div class="col-lg-6 d-flex flex-column justify-content-center pt-3">
        <h2 class="px-5">{{ home.aboutLifeStyleHeader }}</h2>
        <p class="px-5 fragment">
          {{ home.aboutLifeStyleContent }}

        </p>
      </div>
    </div>
    <!-- Review -->
    <div class="row p-4 p-md-5 text-center text-lg-start shadow-1-strong rounded">
      <div class="d-flex col-12 justify-content-center">
        <div v-if="home.review">
          <div class="card">
            <div class="card-body container m-3">
              <div class="row">
                <div class="col-lg-4 d-flex justify-content-center align-items-center mb-4 mb-lg-0">
                  <img :src="home.reviewImg"
                    class="rounded-circle shadow-1" alt="woman avatar" width="200" height="200" />
                </div>
                <div class="col-lg-8">
                  <p class="text-muted fw-light mb-4">
                    {{ home.review }}
                  </p>
                  <p class="fw-bold lead mb-2"><strong>{{ home.reviewName }}</strong></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  



  </div>
</template>

<script>
import { computed } from '@vue/reactivity';
import { pageContentService } from '../services/PageContentService.js';
import { AppState } from '../AppState.js';
import BannerCarousel from '../components/BannerCarousel.vue';
import UploadPicture from '../components/UploadPicture.vue';
import Pop from '../utils/Pop.js';
import { onMounted } from 'vue';

export default {
  setup() {
    // async function getHomePage() {
    //   try {
    //     await pageContentService.getHomePageContent()
    //   }
    //   catch (error) {
    //     Pop.error('[getHomePageContent]', error)
    //   }
    // }
    // onMounted(() => getHomePage())
    return {
      home: computed(() => AppState.homePage),

    };
  },
  components: { BannerCarousel, UploadPicture }
}
</script>

<style scoped lang="scss">

.mugshot {
  max-height: 70vh;
  width: auto;
}

.lets-chat-text {
  font-size: large;
}

.lets-chat-box {
  min-height: 20vh;
}

@media screen and (max-width: 1000px) {

  .lets-chat-text {
    font-size: medium;
  }
}
</style>



