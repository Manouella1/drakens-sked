<script>
import NavBarMenu from "./components/NavBar.vue";
export default {
  components: {
    NavBarMenu,
  },
};
</script>

<template>
  <NavBarMenu />
  <router-view />
</template>

<style scoped></style>
