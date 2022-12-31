<template>
  <nav class="navbar navbar-expand-lg barlow bg-body-bg d-flex align-content-center elevation-2">
    <div class="d-flex align-items-center ms-3">
      <router-link class="navbar-brand" :to="{ name: 'Home' }">
        <img v-if="home.logo" :src="home.logo" alt="">
      </router-link>
    </div>
    <div class="navbar-links position-absolute top-2 start-50 translate-middle-x" id="navbarText">
      <ul class="navbar-nav text-center">
        <li>
          <router-link :to="{ name: 'Home' }"
            class="text-dark border-bottom border-dark selectable text-uppercase me-3 fs-2">
            Home
          </router-link>
        </li>

        <li>
          <router-link :to="{ name: 'Pricing' }"
            class="text-dark border-bottom border-dark selectable text-uppercase me-3 fs-2">
            Pricing
          </router-link>
        </li>

        <li>
          <router-link :to="{ name: 'Blog' }"
            class="text-dark border-bottom border-dark selectable text-uppercase me-3 fs-2">
            Blog
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Portfolio' }"
            class="text-dark border-bottom border-dark selectable text-uppercase fs-2">
            Portfolio
          </router-link>
        </li>

      </ul>

    </div>
    <div></div>
    <button class="navbar-toggler mobile-right" type="button" data-bs-toggle="modal" data-bs-target="#navbarModal"
      aria-controls="navbarModal" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <router-link :to="{ name: 'Contact' }">
      <button class="border bg-dark me-5 px-4 py-1 mobile-none lets-chat fs-1">Lets Chat</button>
    </router-link>

  </nav>
  <NavbarMobileModal />
</template>

<script>
import { AppState } from '../AppState'
import NavbarMobileModal from './NavbarMobileModal.vue';
export default {
  setup() {
    return {
      logo: computed(()=> AppState.homePage.logo)
    }
  },
  components: { NavbarMobileModal }
}
</script>

<style scoped>
h1 {
  font-size: 4rem;
}

.lets-chat {
  position: absolute;
  right: 1rem;
  bottom: -2rem;
}

a:hover {
  text-decoration: none;
}

.nav-link {
  text-transform: uppercase;
}

.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.navbar-center {

  position: relative;
  top: .5rem;
  text-align: center;
  left: 20%;
  /* margin-top: -50px; */
  /* margin-left: -100px; */
}


@media screen and (max-width: 1000px) {
  nav {
    height: 64px;
  }

  .mobile-right {
    position: absolute;
    right: 1rem;
  }

  .navbar-links {
    display: none;
  }

  .mobile-none {
    display: none;
  }

}
</style>
