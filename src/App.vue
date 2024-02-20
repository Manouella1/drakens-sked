<script>
import NavBarMenu from './components/NavBar.vue'
import ScrollToTopButton from './components/ScrollToTopButton.vue' // kan tas bort
import Footer from './components/Footer.vue'
export default {
  components: {
    NavBarMenu,
    ScrollToTopButton, //kan tas bort när man inte vill ha knapp på alla sidor
    Footer,
  },
}
</script>
<template>
  <NavBarMenu />
  <ScrollToTopButton />
  <!-- kan tas bort -->
  <!-- <v-footer>
    <Footer />
  </v-footer> -->
  <!-- Denna utkommenterade tillhör footern med länkar som inte fungerar -->

  <!-- Here print the content of the pages on the DOM -the routes -->
  <router-view />

  <!-- Footer is after the router view as this one print the content of the pages -->
  <!-- but if we moved after is not showing!! ?? CHECK THIS! -->
  <Footer />
</template>

<style scoped></style>
