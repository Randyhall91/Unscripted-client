<template>
  <div class="container-fluid">

    <div class="row">
      <div class="col-lg-6 order-1 text-center d-flex align-items-center justify-content-center">
        <h1>Investment</h1>
      </div>
      <div class="col-lg-6 p-5 order-2">
        <img :src="pricing.headerImg" alt="">
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6 order-lg-1 order-2 px-5">
        <div class="mobile-spacing">
          <img :src="pricing.descriptionImg" alt="">
        </div>
      </div>
      <div class="col-lg-6 order-lg-2 order-1 px-3">
        <p class="fragment fs-4">
         {{ pricing.description }}
        </p>
      </div>
    </div>
    <div v-html="pricing.session">
    </div>
    <section class="p-4 p-md-5 text-center text-lg-start shadow-1-strong rounded">
      <div class="row d-flex justify-content-center">
        <div v-if="pricing.review" class="col-md-10">
          <div class="card">
            <div class="card-body m-3">
              <div class="row">
                <div class="col-lg-4 d-flex justify-content-center align-items-center mb-4 mb-lg-0">
                  <img :src="pricing.reviewImg"
                    class="rounded-circle shadow-1" alt="woman avatar" width="200" height="200" />
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
    </section>

    
  </div>
</template>


<script>
import { onMounted } from "vue";
import { pageContentService } from "../services/PageContentService";
import Pop from "../utils/Pop";
import { computed } from '@vue/reactivity';
import { AppState } from "../AppState";
export default {
  setup() {
    async function getPricingPage(){
      try {
        await pageContentService.getPricingPageContent()
      } catch (error) {
        Pop.error('[getPricingpage]', error)
      }
    }
    onMounted(()=>getPricingPage())
    return {
      pricing: computed(()=> AppState.pricingPage)
    }
  }
}
</script>


<style lang="scss" scoped>
h1 {
  font-size: 4rem
}

h2 {
  font-size: 2.5rem;
}

.full-page-height {
  height: 110vh;
}

.investment-text {
  position: absolute;
  top: 40%;
  left: 43%;
}

.landscape {

  background-position: left;
  min-height: 80vh;
  width: 100vw;

}

@media screen and (max-width: 1000px) {
  .mobile-spacing {
    height: 3rem;
  }
}
</style>