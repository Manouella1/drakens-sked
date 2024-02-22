<!-- src/components/FavoriteRecepts.vue -->
<template>
  <!-- Listar favoritrecept & visar en knapp för att ta bort varje recept -->
  <div>
    <ul>
      <!-- Loopar igenom favoritrecept o visar dem som listelement -->
      <li v-for="recipe in favoriteRecipes" :key="recipe.id">
        <!-- Visar receptets titel -->
        {{ recipe.title }}
        <!-- Knapp för att ta bort receptet från favoriter -->
        <button @click="removeFromFavorites(recipe.id)"> Remove </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      favoriteRecipes: [], // Array för att lagra favoritrecept
    };
  },
  created() {
    // Funktion som körs när komponenten sskapas för att ladda favoritrecept från localStorage
    console.log("Hey.")
    this.loadFavoriteRecipes();
  },
  methods: {
    // Funktion för att hämta favoritrecept från localstoragee
    loadFavoriteRecipes() {
      // Hämtar favoritrecept från localStorage och konverterar från JSON-format
      const favorites = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
      // Tilldelar favoritrecepten till data-variabeln för att visas i listan
      this.favoriteRecipes = favorites;
    },
    // Funktion för att ta bort ett recept från favoriter
    removeFromFavorites(recipeId) {
      // Filtrerar bort receptet med det angivna ID:t från favoritrecepten
      this.favoriteRecipes = this.favoriteRecipes.filter(recipe => recipe.id !== recipeId);
      // Uppdaterar localStorage med de uppdaterade favoritrecepten efter borttagning
      localStorage.setItem('favoriteRecipes', JSON.stringify(this.favoriteRecipes));
    },
  },
};
</script>

<style scoped>
/* lägg till stil här om det behövs */
</style>
