<script>
  import NavBarMenu from './components/NavBar.vue'
  import ScrollToTopButton from './components/ScrollToTopButton.vue' // kan tas bort
  import Footer from './components/Footer.vue'
  import ContactForm from '../src/views/ContactView.vue'
  export default {
    components: {
      NavBarMenu,
      ScrollToTopButton, //kan tas bort när man inte vill ha knapp på alla sidor
      Footer,
      ContactForm
    }
  }
</script>
<template>
  <div class="appContainer">
    <NavBarMenu />
    <ScrollToTopButton />

    <!-- kan tas bort -->
    <!-- <v-footer>
    <Footer />
  </v-footer> -->
    <!-- Denna utkommenterade tillhör footern med länkar som inte fungerar -->

    <!-- Here print the content of the pages on the DOM -the routes -->
    <router-view class="test" />

    <!-- Footer is after the router view as this one print the content of the pages -->
    <!-- but if we moved after is not showing!! ?? CHECK THIS! -->
    <Footer />
  </div>
</template>

<style scoped>
  .test {
    flex-grow: 1;
  }
  .appContainer {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
</style>
