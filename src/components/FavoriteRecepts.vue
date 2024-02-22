<!-- src/components/FavoriteRecepts.vue -->
<template>
  <div>
    <ul>
      <li v-for="recipe in favoriteRecipes" :key="recipe.id">
        {{ recipe.title }}
        <button @click="removeFromFavorites(recipe.id)"> Remove </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      favoriteRecipes: [],
    };
  },
  created() {
    this.loadFavoriteRecipes();
  },
  methods: {
    loadFavoriteRecipes() {
      const favorites = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
      this.favoriteRecipes = favorites;
    },
  },
};
</script>

<style>
/* lägg till stil här om det behövs */
</style>
