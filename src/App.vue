<template>
  <header>
    <Navbar />
  </header>
  <main>
    <router-view />
  </main>
  <footer class="mt-auto mb-5">
    <div class="d-flex justify-content-center container">
      <div v-if="home" class="row g-0 mt-5 d-flex justify-content-center">
          <div class="col-lg-6">
            <h2 class="text-center lobster">{{ home.letsChatHeader }}</h2>
          </div>
          <div class="col-12 mt-3">
            <p class="fragment text-center">
              {{ home.letsChatContent }}
            </p>

          </div>
          <div class="text-center">
            <router-link :to="{ name: 'Contact' }">
              <!-- TODO Onhover button -->
              <button class="btn btn-dark border mobile-none lets-chat fs-1">Secure Your Spot Now</button>
            </router-link>
          </div>
       </div>
  </div>
  </footer>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'
import FooterComp from "./components/FooterComp.vue"
import { onMounted } from 'vue';
import Pop from "./utils/Pop";
import { pageContentService } from "./services/PageContentService";
export default {
  setup() {
    async function getHomePage() {
      try {
        await pageContentService.getHomePageContent()
      }
      catch (error) {
        Pop.error('[getHomePageContent]', error)
      }
    }
    onMounted(() => getHomePage())
    return {
      appState: computed(() => AppState),
      home: computed(()=> AppState.homePage)
    }
  },
  components: { Navbar, FooterComp }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

@font-face {
  font-family: "Aboreto";
  src: local('Aboreto'), url(./fonts/Aboreto/Aboreto-Regular.ttf);
}

@font-face {
  font-family: "Tangerine";
  src: local('Tangerine'), url(./fonts/Tangerine/Tangerine-Regular.ttf);
}

@font-face {
  font-family: "Fragment";
  src: local('Fragment'), url(./fonts/fragment/FragmentMono-Regular.ttf);
}

@font-face {
  font-family: "Lobster";
  src: local('Lobster'), url(./fonts/LobsterTwo/LobsterTwo-Regular.ttf);
}

@font-face {
  font-family: "Barlow";
  src: local('Barlow'), url(./fonts/Barlow_Condensed/BarlowCondensed-ThinItalic.ttf);
}


.tangerine {
  font-family: "Tangerine";
}

.barlow {
  font-family: "Barlow";
}

.lobster {
  font-family: "Lobster";
}

.fragment {
  font-family: "Fragment";
}

:root {
  --main-height: calc(100vh - 32px - 64px);
}
body {
  font-family: "Aboreto";
  
}



// footer {
//   position:absolute;
//   bottom: 0;
// }
</style>
