<template>
  <div class="modal fade" id="navbarModal" tabindex="-1" aria-labelledby="navbarModal" aria-hidden="true">
    <div class="modal-dialog modal-fullscreen">
      <div class="modal-content">
        <div class="modal-body bg-body-bg text-center">
          <div class="border-bottom border-dark mb-3 pb-4">
            <i class="mdi mdi-close fs-1" data-bs-dismiss="modal"></i>
          </div>
          <div class="navbar-links" id="navbarText">
            <ul class="navbar-nav text-center">
              <li class="mb-5 border-bottom border-dark pb-2">
                <router-link :to="{ name: 'Home' }">
                  <p class="fs-1 text-dark selectable text-uppercase" data-bs-dismiss="modal">
                    Home
                  </p>
                </router-link>
              </li>
              <li class="mb-5 border-bottom border-dark pb-2">
                <router-link :to="{ name: 'Blog' }" class="fs-1 text-dark selectable text-uppercase"
                  data-bs-dismiss="modal">
                  Blog
                </router-link>
              </li>
              <li class="mb-5 border-bottom border-dark pb-2">
                <router-link :to="{ name: 'Pricing' }" class="fs-1 text-dark selectable text-uppercase"
                  data-bs-dismiss="modal">
                  <p class="fs-1 text-dark selectable text-uppercase" data-bs-dismiss="modal">
                    Pricing
                  </p>
                </router-link>
              </li>
              <li class="mb-5 border-bottom border-dark pb-2">
                <router-link :to="{ name: 'Portfolio' }" class="fs-1 text-dark selectable text-uppercase"
                  data-bs-dismiss="modal">
                  <p class="fs-1 text-dark selectable text-uppercase" data-bs-dismiss="modal">
                    Portfolio
                  </p>
                </router-link>
              </li>

            </ul>
            <router-link :to="{ name: 'Contact' }">
              <button class="border bg-dark me-5 px-4 py-1 fs-1" data-bs-dismiss="modal">Lets Chat</button>
            </router-link>

          </div>
        </div>

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

</style>