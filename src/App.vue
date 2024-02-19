<script>
import NavBarMenu from "./components/NavBar.vue";
import ScrollToTopButton from "./components/ScrollToTopButton.vue"; // kan tas bort
import Footer from "./components/Footer.vue";

export default {
  components: {
    NavBarMenu,
    ScrollToTopButton, //kan tas bort när man inte vill ha knapp på alla sidor
  },
};
</script>
<template>
  <NavBarMenu />
  <ScrollToTopButton /> <!-- kan tas bort -->
   <!-- <v-footer>
    <Footer />
  </v-footer> -->
  <!-- Denna utkommenterade tillhör footern med länkar som inte fungerar -->
  <Footer />
  <router-view />
</template>

<style scoped>
</style>
