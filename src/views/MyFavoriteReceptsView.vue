<template>
  <div>
    <h1>Favorit Recipes</h1>
    <favorite-recipes @addToFavorites="addToFavorites"></favorite-recipes>
  </div>
</template>

<script>
import FavoriteRecipes from '../components/FavoriteRecepts.vue'; // Importera komponenten

export default {
  components: {
    FavoriteRecipes,
  },
  methods: {
    addToFavorites(recipeId) {
      // Hämta nuvarande favoritrecept från localStorage
      let favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];

      // Kontrollera om receptet redan finns i favoriter/mina sidor
      if (!favoriteRecipes.includes(recipeId)) {
        // Om receptet inte redan finns, lägg till det i favoriter
        favoriteRecipes.push(recipeId);

        // Spara uppdaterade favoritrecept i localStoragee
        localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
      } else {
        // Om receptet redan finns i favoriter, ge användaren en varning elr gör ingenting
        alert('Receptet finns redan i dina favoriter!');
      }
    },
  },
};
</script>
