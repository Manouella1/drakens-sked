<!-- /src/views/MyFavoriteReceptsView.vue  -->
<template>
  <div>
    <h1>Favorit Recipes</h1>
    <favorite-recipes @toggleFavorite="toggleFavorite"></favorite-recipes>
  </div>
</template>

<script>
export default {
  methods: {
    toggleFavorite(recipeId) {
      let favorites = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
      if (!favorites.includes(recipeId)) {
        favorites.push(recipeId);
      } else {
        favorites = favorites.filter(id => id !== recipeId);
      }
      localStorage.setItem('favoriteRecipes', JSON.stringify(favorites));
    },
  },
};
</script>
