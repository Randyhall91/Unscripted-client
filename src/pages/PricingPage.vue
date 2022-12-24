<template>
  <div class="container-fluid">

    <div class="row">
      <div class="col-lg-6 order-1 text-center d-flex align-items-center justify-content-center">
        <h1>Investment</h1>
      </div>
      <div class="col-lg-6 p-5 order-2">
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6 order-lg-1 order-2 px-5">
        <div class="mobile-spacing"></div>
      </div>
      <div class="col-lg-6 order-lg-2 order-1 px-3">
        <p class="fragment fs-4">
          Getting lifestyle photos taken is not just an investment in money and time but also an investment in memories
          for your
          family longer term. Think back on your childhood. Are there photos of you and your parents and siblings
          smiling and
          having fun together? Is that a decision your parents made for you and your future? Family photos are great as
          home décor
          and for parents to look back and remember their kids at different ages. But even more so this is for your
          children. Give
          them the gift of looking back at pictures of you and themselves happy. They will cherish those photos as
          adults and then
          even more after you are gone. Now I know you're thinking, but I can just take some picture of them playing and
          it just
          as good right? Let me tell you why I don't think that it is just as good. First off are you in those photos
          also? I
          think pictures of me as a kid are cool but picture of me and my parents are even better. I want to see them as
          they were
          when I was growing up. I also want to see them interacting with me. The best way for you to provide your
          children this
          gift is to have professional lifestyle photos taken every year or at the very least every few years. And for
          that you
          are in the right place…
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-12 text-center mt-5">
        <h2><strong>Family Photography Session</strong></h2>
        <h3>Keep in mind space is limited</h3>
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      <div class="col-6 text-center mt-3">
        <h3>Packages start at</h3>
        <h3>$625</h3>
      </div>
    </div>
    <div class="row d-flex justify-content-center mt-2">

      <div class="col-6">
        <h5 class="text-center">All Packages Include:</h5>
        <p class="ps-2 fs-4">-location scouting</p>
        <p class="ps-2 fs-4">-welcome guide</p>
        <p class="ps-2 fs-4">-digital fiels of photos</p>
        <p class="ps-2 fs-4">-phone call prior to session</p>
        <p class="ps-2 fs-4">-coffee date for photo delivery</p>
      </div>
    </div>
    <div class="row">
      <div class="col-12 text-center mt-5">
        <h2>Want to see all package options or have more questions. Send me a message</h2>
        <router-link :to="{ name: 'Contact' }">
          <button class="border bg-dark fs-1 mt-3">Lets Chat</button>
        </router-link>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-12 p-0 landscape">
      </div>
    </div>
  </div>
</template>


<script>
export default {
  setup() {
    return {}
  }
}
</script>


<style lang="scss" scoped>
h1 {
  font-size: 4rem
}

h2 {
  font-size: 2.5rem;
}

.full-page-height {
  height: 110vh;
}

.investment-text {
  position: absolute;
  top: 40%;
  left: 43%;
}

.landscape {

  background-position: left;
  min-height: 80vh;
  width: 100vw;

}

@media screen and (max-width: 1000px) {
  .mobile-spacing {
    height: 3rem;
  }
}
</style>