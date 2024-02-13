<script>
import NavBarMenu from './components/NavBar.vue'
export default {
  components: {
    NavBarMenu,
  },
}
</script>

<template>
  <h1>Drakens Sked</h1>
  <NavBarMenu />
  <router-view />
</template>

<style scoped></style>
