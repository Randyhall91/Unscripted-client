<template>
  <div class="card border-dark">
    <div class="card-body">
      <h4 class="card-title">inquiry form</h4>
      <form @submit="handleSubmit" class="fragment">
        <p>
          <input class="form-check-input" v-model="editable.isFamily" type="checkbox" data-bs-toggle="collapse"
            data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
          Are you a Family?
        </p>
        <div class="collapse" id="collapseExample">


          <div class="mb-3">
            <label for="name" class="form-label">Family Name</label>
            <input type="text" v-model="editable.familyName" required class="form-control" name="name" id="name"
              aria-describedby="name" placeholder="Name">
          </div>
          <div class="mb-3">
            <label for="familyCount" class="form-label">How many members of your family are there?</label>
            <select class="form-select form-select-sm" required name="familyCount" id="familyCount">
              <option selected>Select one</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="kids" class="form-label">What ages are your kids</label>
            <input type="text" class="form-control" name="kids" id="kids" aria-describedby="numberOfKids"
              placeholder="Kids ages">
          </div>
          <div class="mb-3">
            <label for="familyDescription" class="form-label">What is the first word that comes to mind to
              describe
              your family?</label>
            <input type="text" class="form-control" name="familyDescription" id="familyDescription"
              aria-describedby="familyDescription" placeholder="Family Description">
          </div>
        </div>


        <p>
          <input class="form-check-input" type="checkbox" data-bs-toggle="collapse"
            data-bs-target="#collapseWidthExample" aria-expanded="true" aria-controls="collapseWidthExample">
          Are you a Couple?
        </p>

        <div class="collapse" id="collapseWidthExample">
          <div class="mb-3">
            <label for="howLong" class="form-label">How long have you been together?</label>
            <input type="text" class="form-control" name="howLong" id="howLong" aria-describedby="howLong"
              placeholder="How long have you been together?">
          </div>
          <div class="mb-3">
            <label for="firstWord" class="form-label">What is the first word that comes to mind to describe your
              relationship?</label>
            <input type="text" class="form-control" name="firstWord" id="firstWord" aria-describedby="firstWord"
              placeholder="First word">
          </div>
          <div class="mb-3">
            <label for="familyCount" class="form-label">What are you and your spouses love languages?</label>
            <div class="d-flex">

              <select class="form-select form-select-sm m-1" name="familyCount" id="familyCount">
                <option selected>Spouse 1</option>
                <option value="Words of Affirmation">Words of Affirmation</option>
                <option value="Quality Time">Quality Time</option>
                <option value="Receiving Gifts">Receiving Gifts</option>
                <option value="Acts of Service">Acts of Service</option>
                <option value="Physical Touch">Physical Touch</option>
              </select>
              <select class="form-select form-select-sm m-1" name="familyCount" id="familyCount">
                <option selected>Spouse 2</option>
                <option value="Words of Affirmation">Words of Affirmation</option>
                <option value="Quality Time">Quality Time</option>
                <option value="Receiving Gifts">Receiving Gifts</option>
                <option value="Acts of Service">Acts of Service</option>
                <option value="Physical Touch">Physical Touch</option>
              </select>
            </div>
          </div>
        </div>
        <div class="mb-3">
          <label for="excited" class="form-label">What makes you the most excited about getting lifestyle pictures
            taken?</label>
          <input type="text" class="form-control" name="excited" id="excited" aria-describedby="excited"
            placeholder="What makes you excited?">
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email Address</label>
          <input type="email" required class="form-control" name="email" id="email" aria-describedby="email"
            placeholder="example@gmail.com">
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const editable = ref({})
    return {
      editable,
      async handleSubmit() {
        try {
          await formService.submitForm(editable.value)
        }
        catch (error) {
          Pop.error('[handleSubmit]', error)
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>

</style>