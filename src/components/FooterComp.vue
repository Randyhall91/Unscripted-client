<template>
  <div class="container">
    <div v-if="home" class="row g-0 mt-5 d-flex justify-content-center">
        <div class="col-lg-6">
          <h2 class="text-center lobster">{{ home.letsChatHeader }}</h2>
        </div>
        <div class="col-12 mt-3">
          <p class="fragment text-center">
            {{ home.letsChatContent }}
          </p>

        </div>
      </div>
  </div>
</template>


<script>
export default{
  setup(){
    return {
      home: computed(() => AppState.homePage),

    };
  }
}

</script>
<style lang="scss">


</style>