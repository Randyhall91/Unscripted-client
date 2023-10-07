<template>
  <div class="container-fluid">

    <div class="row mt-3">
      <div class="col-lg-6 mt-5 order-1 text-center d-flex align-items-center justify-content-center">
        <h1>{{ pricing.header }}</h1>
      </div>
      <div class="col-lg-6 pt-5 order-2 d-flex justify-content-center  overflow-hidden">
        <img :src="pricing.headerImg" alt="">
      </div>
    </div>
    <div class="row align-items-center">
      <div class="col-lg-4 order-lg-1 order-2 justify-content-center d-flex">
        <!-- <div class=""> -->
        <img :src="pricing.descriptionImg" class="img-fluid" alt="">
        <!-- </div> -->
      </div>
      <div class="col-lg-8 order-lg-2 order-1 align-middle px-3">
        <p class="fragment fs-5 text-center">
          {{ pricing.description }}
        </p>
      </div>
    </div>
    <div class="text-center" v-html="pricing.session"></div>


    <div class="row p-4 p-md-5 text-center text-lg-start shadow-1-strong rounded">
      <div class="d-flex col-12 justify-content-center">
        <div v-if="pricing.review">
          <div class="card">
            <div class="card-body container m-3">
              <div class="row">
                <div class="col-lg-4 d-flex justify-content-center align-items-center mb-4 mb-lg-0">
                  <img :src="pricing.reviewImg" class="rounded-circle shadow-1" alt="woman avatar" width="200"
                    height="200" />
                </div>
                <div class="col-lg-8">
                  <p class="text-muted fw-light mb-4">
                    {{ pricing.review }}
                  </p>
                  <p class="fw-bold lead mb-2"><strong>{{ pricing.reviewName }}</strong></p>
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
import { onMounted } from "vue"
import { pageContentService } from "../services/PageContentService"
import Pop from "../utils/Pop"
import { computed } from '@vue/reactivity'
import { AppState } from "../AppState"
export default {
  setup() {
    async function getPricingPage() {
      try {
        await pageContentService.getPricingPageContent()
      } catch(error) {
        Pop.error('[getPricingpage]', error)
      }
    }
    onMounted(() => getPricingPage())
    return {
      pricing: computed(() => AppState.pricingPage)
    }
  }
}
</script>


<style lang="scss" scoped>
h1 {
  font-size: 3rem
}

h2 {
  font-size: 2.5rem;
}
</style>

