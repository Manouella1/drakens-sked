<script>
import NavBarMenu from "./components/NavBar.vue";
import ScrollToTopButton from "./components/ScrollToTopButton.vue"; // kan tas bort

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
  <router-view />
</template>

<style scoped>
</style>
