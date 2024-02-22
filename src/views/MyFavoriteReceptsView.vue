<!-- /src/views/MyFavoriteReceptsView.vue  -->
<template>
  <!-- En vy som visar användarens favoritrecept -->
  <div>
    <!-- Rubrik för favoritreceptsidan -->
    <h1>Favorit Recipes</h1>
    <!-- Användning av favoritreceptskomponenten -->
    <favorite-recipes></favorite-recipes>
  </div>
</template>

<script>
// Importera komponenten för favoritrecept
import FavoriteRecipes from '../components/FavoriteRecepts.vue';

export default {
  components: {
    FavoriteRecipes, // Registrera komponenten
  },
};
</script>
