<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <!-- Video player goes here or we move it down below the form -->
      </div>
    </div>
    <div class="row d-flex justify-content-center mt-5">
      <div class="col-lg-6">
        <ContactForm />
      </div>

    </div>
    <div class="row d-flex justify-content-center mt-5">
      <div class="col-lg-6 text-center">
        <p class="barlow fs-1">
          We live so briefly in time before returning to eternity... We should document every chance we can for the sake
          of those who remain...
        </p>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-12 p-0">
      </div>
    </div>
    <!-- <div class="row">
      <div class="col-3"></div>
      TODO Insert 4 Blog tiles here
    </div> -->
  </div>
</template>


<script>
import { ref } from 'vue';
import ContactForm from '../components/ContactForm.vue';
import { formService } from '../services/FormService.js'
export default {
  components: { ContactForm }
}
</script>


<style lang="scss" scoped>
.landscape {
  max-height: 40vh;
  width: 100%;
  object-fit: cover;
}
</style>