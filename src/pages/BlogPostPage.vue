<template>
  <div v-if="post" class="container">
    <div class="row mt-5">
      <div class="col-12 d-flex justify-content-center">
        <img :src="post.headerImg.url" :alt="post.headerImg.name">
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <h1>
          {{ post.title }}
        </h1>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <p>
          {{ post.body }}
        </p>
      </div>
      <div class="col-6">
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

</style>