<template>
  <div class="container-fluid">
    <div class="row mt-5">
      <div v-for="img in portfolioImgs" class="col-lg-4 p-3 mb-3">
        <img class="img-fluid" :src="(img.url)" :alt="img.name">
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/reactivity'
import { onMounted } from 'vue'
import { AppState } from '../AppState.js'
import { portfolioService } from '../services/PortfolioService.js'
import Pop from '../utils/Pop.js'

export default {
  setup() {
    async function getPortfolio() {
      try {
        await portfolioService.getPortfolio()

      }
      catch (error) {
        Pop.error('[getPortfolio]', error)
      }
    }
    onMounted(() => {
      getPortfolio()
    })
    return {
      portfolioImgs: computed(() => AppState.portfolioImgs)
    }
  }
}
</script>
