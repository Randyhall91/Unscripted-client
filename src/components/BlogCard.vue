<template>
  <router-link :to="{ name: 'BlogPost', params: { id: p.id } }">
    <div class="card text-white card-bg">
      <img class="card-img card-height" @click="setActivePost" :src="p.headerImg.url" :alt="p.headerImg.name">
      <h4 class="card-title bg-text">{{ p.title }}</h4>
    </div>
  </router-link>
</template>


<script>
import { Post } from '../models/Post.js';

export default {
  props: {
    p: { type: Post, required: true }
  },
  setup() {
    return {

    }
  }
}

</script>


<style lang="scss" scoped>
.card-bg {
  position: relative;
}

.bg-text {
  background-color: rgb(0, 0, 0);
  /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4);
  /* Black w/opacity/see-through */
  color: white;
  font-weight: bold;
  border: 3px solid #f1f1f1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 80%;
  padding: 20px;
  text-align: center;
}
</style>