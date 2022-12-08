<template>
  <header>
    <Navbar />
  </header>
  <main>
    <router-view />
  </main>
  <!-- <NavbarMobileModal /> -->
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'
// import NavbarMobileModal from './components/NavbarMobileModal.vue'

export default {
  setup() {
    return {
      appState: computed(() => AppState)
    }
  },
  components: { Navbar }
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

body {
  font-family: "Aboreto";
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


footer {
  display: grid;
  place-content: center;
  height: 32px;
}
</style>
