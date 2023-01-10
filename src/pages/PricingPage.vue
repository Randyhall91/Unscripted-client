<template>
  <div class="container-fluid">

    <div class="row mt-3">
      <div class="col-lg-12 mt-5 order-1 text-center d-flex align-items-center justify-content-center">
        <h1>{{ pricing.header }}</h1>
      </div>
      <div class="col-lg-12 p-5 order-2 d-flex justify-content-center">
        <img :src="pricing.headerImg" alt="">
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6 order-lg-1 order-2 justify-content-center d-flex">
        <div class="mobile-spacing">
          <img :src="pricing.descriptionImg" class="img-fluid" alt="">
        </div>
      </div>
      <div class="col-lg-6 order-lg-2 order-1 px-3">
        <p class="fragment fs-5">
         {{ pricing.description }}
        </p>
      </div>
    </div>
        <!-- TODO reinsert  v-html="pricing.session" -->
      
    <div class="row">
      <div class="col-12 text-center mt-5">
        <h1><strong>Lifestyle Family Session Packages</strong></h1>
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      <div class="col-lg-6 text-center mt-3">
        <h3><strong>---------Gotta Have it------------</strong></h3>
        <h5>This package is perfect for the family that has a wall to display their photos and needs to have coffee table art.</h5>
        <h3><strong>$955</strong></h3>
      </div>
    </div>
    <div class="row d-flex justify-content-center mt-2">

      <div class="col-lg-6">
        <ul>
        <li class="ps-2 fs-5"> Get to know each other phone call </li>
        <li class="ps-2 fs-5"> Help with family outfits </li>
        <li class="ps-2 fs-5"> Location scouting</li>
        <li class="ps-2 fs-5">45-60-minute photo session</li>
        <li class="ps-2 fs-5">40 edited digital images </li>
        <li class="ps-2 fs-5"> Hard cover family heritage album</li>
        <li class="ps-2 fs-5">48x48 4 photo canvas prints for wall art</li>
        <li class="ps-2 fs-5"> Online gallery within 2 weeks and other art delivery within 60 days</li>

        </ul>
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      <div class="col-lg-6 text-center mt-3">
        <h3><strong>------------Love it------------</strong></h3>
        <h5>This package is perfect for the family that wants to have a beautiful custom heritage album to treasure now and to gift their kids in the years to come. </h5>
         <h3><strong>$725</strong></h3>
      </div>
    </div>
    <div class="row d-flex justify-content-center mt-2">

      <div class="col-lg-6">
        <ul>
        <li class="ps-2 fs-5"> Get to know each other phone call </li>
        <li class="ps-2 fs-5"> Help with family outfits </li>
        <li class="ps-2 fs-5"> Location scouting</li>
        <li class="ps-2 fs-5">45-60-minute photo session</li>
        <li class="ps-2 fs-5">40 edited digital images </li>
        <li class="ps-2 fs-5"> Hard cover family heritage album</li>
        <li class="ps-2 fs-5"> Online gallery within 2 weeks and album delivery within 60 days</li>

        </ul>
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      <div class="col-lg-6 text-center mt-3">
        <h3><strong>--------------Like it---------------</strong></h3>
        <h5>This package is perfect for the family that wants to have a beautiful custom heritage album to treasure now and to gift their kids in the years to come. e is perfect for the family that wants to have a beautiful custom heritage album to treasure now and to gift their kids in the years to come. </h5>
        <h3><strong>$650</strong></h3>
      </div>
    </div>
    <div class="row d-flex justify-content-center mt-2">

      <div class="col-lg-6">
        <ul>
        <li class="ps-2 fs-5"> Get to know each other phone call </li>
        <li class="ps-2 fs-5"> Help with family outfits </li>
        <li class="ps-2 fs-5"> Location scouting</li>
        <li class="ps-2 fs-5">45-60-minute photo session</li>
        <li class="ps-2 fs-5">40 edited digital images </li>
        <li class="ps-2 fs-5"> Hard cover family heritage album</li>
        <li class="ps-2 fs-5"> Online gallery within 2 weeks </li>
      </ul>
    <div class="row d-flex justify-content-center">
      <div class="col-lg-6 text-center mt-3">
        <strong>--------------------------------------------------------------------------------------------</strong>
        <h3><strong>Contact me for further details on all packages and any questions</strong></h3>
      </div>
    </div>
      </div>
      </div>

    <div class="row p-4 p-md-5 text-center text-lg-start shadow-1-strong rounded">
      <div class="d-flex col-12 justify-content-center">
        <div v-if="pricing.review">
          <div class="card">
            <div class="card-body container m-3">
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
    </div>

    
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
  font-size: 3rem
}

h2 {
  font-size: 2.5rem;
}

</style>

