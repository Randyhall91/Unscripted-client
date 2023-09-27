<template>
  <div v-if="post" class="container pt-3">
    <div class="row mt-5">
      <!-- <div class="col-12 d-flex justify-content-center headImg" :style="{ 'background-image': 'url(' + post.headerImg.url + ')', 'background-size': 'cover', 'background-repeat': 'no-repeat', 'background-position': 'bottom' }">
      </div> -->
      <img :src="post.headerImg.url" :alt="post.headerImg.name">
    </div>
    <div class="row">
      <div class="col-12">
        <h1>
          {{ post.title }}
        </h1>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6">
        <!-- <p>
          {{ post.body }}
        </p> -->
        <div v-html="post.body"></div>
      </div>
      <div class="col-lg-6">
        <div v-for="img in post.extraImgs">
          <img class="img-fluid mb-2" :src="img.medium.url" :alt="img.medium.name">
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { computed } from '@vue/reactivity';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { AppState } from '../AppState.js';
import { blogService } from '../services/BlogService.js';
import Pop from '../utils/Pop.js';
export default {
  setup() {
    const route = useRoute()
    async function setActivePost() {
      try {
        await blogService.getBlogPostbyId(route.params.id)
      }
      catch (error) {
        Pop.error('[setActivePost]', error)
      }
    }

    onMounted(() => {
      setActivePost()
    })
    
    return {
      post: computed(() => AppState.activePost),

    }
  }
}
</script>


<style lang="scss" scoped>
.headImg{
  min-height: 30vh;
}
</style>