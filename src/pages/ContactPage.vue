<template>
  <div class="container">
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
    <div class="row p-4 p-md-5 text-center text-lg-start shadow-1-strong rounded">
      <div class="d-flex col-12 justify-content-center">
        <div v-if="contact.review">
          <div class="card">
            <div class="card-body container m-3">
              <div class="row">
                <div class="col-lg-4 d-flex justify-content-center align-items-center mb-4 mb-lg-0">
                  <img :src="contact.reviewImg"
                    class="rounded-circle shadow-1" alt="woman avatar" width="200" height="200" />
                </div>
                <div class="col-lg-8">
                  <p class="text-muted fw-light mb-4">
                    {{ contact.review }}
                  </p>
                  <p class="fw-bold lead mb-2"><strong>{{ contact.reviewName }}</strong></p>
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
import { computed } from '@vue/reactivity';
import { onMounted } from "vue";
import { AppState } from "../AppState";
import ContactForm from '../components/ContactForm.vue';
import { pageContentService } from "../services/PageContentService";
import Pop from "../utils/Pop";
export default {
  setup(){
    async function getContactPage(){
      try {
        await pageContentService.getContactPage()
      } catch (error) {
        Pop.error('[getContactPage]', error)
      }
    }
    onMounted(()=> getContactPage())

    return{
      contact: computed(()=> AppState.contactPage)
    }

  },
  components: { ContactForm }
}
</script>


<style lang="scss" scoped>
</style>