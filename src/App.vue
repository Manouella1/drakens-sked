<script>
  import NavBarMenu from './components/NavBar.vue'
  import ScrollToTopButton from './components/ScrollToTopButton.vue' // kan tas bort
  import Footer from './components/Footer.vue'
  export default {
    components: {
      NavBarMenu,
      ScrollToTopButton, //kan tas bort när man inte vill ha knapp på alla sidor
      Footer
    }
  }
</script>
<template>
  <div class="appContainer">
    <NavBarMenu />
    <ScrollToTopButton />

    <!-- Here print the content of the pages on the DOM -the routes -->
    <router-view />

    <!-- Footer is after the router view as this one print the content of the pages -->
  </div>
  <Footer />
</template>

<style scoped>
  .appContainer {
    display: flex;
    flex-direction: column;
    min-height: 89vh;
  }
</style>
