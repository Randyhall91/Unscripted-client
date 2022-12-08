<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-3" v-for="post in posts">
        <BlogCard :p="post" :key="post" />
      </div>
    </div>
  </div>
</template>


<script>
import { blogService } from "../services/BlogService";
import Pop from "../utils/Pop";
import { onMounted } from "vue";
import { AppState } from "../AppState.js";
import { computed } from "@vue/reactivity";

export default {
  setup() {

    async function getBlogPosts() {
      try {
        await blogService.GetBlogPosts()
      } catch (error) {
        Pop.error('[getBlogPosts]', error)
      }
    }
    onMounted(() => {
      getBlogPosts()
    })
    return {
      posts: computed(() => AppState.posts)
    }
  }
}
</script>


<style lang="scss" scoped>

</style>