<!-- /src/views/MyFavoriteReceptsView.vue  -->
<template>
  <!-- En vy som visar användarens favoritrecept -->
  <div class="container">
    <!-- Rubrik för favoritreceptsidan -->
    <h1>Favorit Recipes</h1>
    <!-- Användning av favoritreceptskomponenten -->
    <favorite-recipes></favorite-recipes>
    <p>Mmmm här så sparas det ner smarriga recept~</p>
    <img src="../assets/bilder/drake-mumss.png" alt="Bild på draken kär av recept">
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

<style scoped>
p {
  font-weight: bold;
}

img {
  display: block;
  /* Gör bilden till en block-element för att kunna använda margin: auto; */
  margin: 0 auto;
  /* Centrera bilden horisontellt */
  max-width: 200px;
}

@media (min-width: 576px) {

  .container-sm,
  .container {
    max-width: 540px;
  }
}
</style>
