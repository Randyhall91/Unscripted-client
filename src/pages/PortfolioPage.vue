<template>
  
    <div v-if="portfolioImgs" class="bricks mt-5">
      <div v-for="img in portfolioImgs" class="p-1 mb-1">
        <img class="img-fluid" :key="img.id" :src="img.url" :alt="img.name">
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
<style scoped lang="scss">
.bricks {
  columns: 4;
}
@media screen and (max-width:992px) {
  .bricks {
    columns: 2;
  }
}
</style>