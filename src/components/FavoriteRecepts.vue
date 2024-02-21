<!-- src/components/FavoriteRecepts.vue -->
<template>
  <div>
    <!-- Visa en lista överr favoritrecept -->
    <ul>
      <!-- Loopa genom favoritrecepten -->
      <li v-for="recipe in favoriteRecipes" :key="recipe.Id">
        {{ recipe.title }}
        <!-- Skapa en knapp för att ta bort receptet från favoriter -->
        <button @click="removeFromFavorites(recipe.Id)"> Remove </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Array för att lagra favoritrecept
      favoriteRecipes: [],
    };
  },
  created() {
    // När komponenten skapas, ladda favoritrecept från lokal lagring
    this.loadFavoriteRecipes();
  },
  methods: {
    // Metod för att ladda favoritrecept från lokal lagring
    loadFavoriteRecipes() {
      // Hämta favoritrecept från lokal lagring om de finns
      const favorites = localStorage.getItem('favoriteRecipes');
      // Om favoritrecept finns => spara dem i data
      if (favorites) {
        this.favoriteRecipes = JSON.parse(favorites);
      }
    },
    // Metod för att ta bort ett recept från favoriter
    removeFromFavorites(recipeId) {
      // Filtrera ut receptet med angivet ID från favoritrecepten
      this.favoriteRecipes = this.favoriteRecipes.filter(recipe => recipe.Id !== recipeId);
      // Uppdatera lokal lagring med nya favoritrecept efter borttagning
      localStorage.setItem('favoriteRecipes', JSON.stringify(this.favoriteRecipes));
    },
  },
};
</script>

<style>
/* lägg till still här */
</style>
