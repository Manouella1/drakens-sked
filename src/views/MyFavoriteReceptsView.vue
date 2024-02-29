<!-- /src/views/MyFavoriteReceptsView.vue  -->

<template>
  <div class="container">
    <h1>Favorit Recept</h1>
    <!-- <div v-for="recipe in favoriteRecipes" :key="recipe.id">
      Skicka props till CardRecept för att visa receptinformation
      <CardRecept :title="recipe.title" :prepTime="recipe.prepTime" :category="recipe.category" :level="recipe.level"
      :image="recipe.image" :id="recipe.id" :isFavorite="true" :iconColor="recipe.iconColor"
      :iconImage="recipe.iconImage" @removeFromFavorites="removeFromFavorites(recipe.id)" />
    </div> -->

    <!-- Loopa igenom favoritrecept och visa varje recept med CardRecept-komponenten -->
    <div class="flex">
      <CardRecept v-for="recipe in favoriteRecipes" :key="recipe.id" :title="recipe.title" :prep-time="recipe.prepTime"
        :category="recipe.category" :level="recipe.level" :image="recipe.image" :id="recipe.id"
        :icon-color="recipe.iconColor" :icon-image="recipe.iconImage" @select-recept="selectRecept" />
    </div>
    <!-- Visa bekräftelsemeddelande när ett recept tas bort från favoriter -->
    <span v-if="showConfirmation" class="confirmation">{{ confirmationMessage }}</span>
    <p>Mmmm här så sparas det ner smarriga recept~</p>
    <img src="../assets/bilder/drake-mumss.png" alt="Bild på draken kär av recept" />
  </div>
</template>

<script>
import CardRecept from '../components/CardRecept.vue'

export default {
  components: {
    CardRecept
  },
  data() {
    return {
      favoriteRecipes: [], // En array som håller favoritrecept
    }
  },
  created() {
    this.loadFavoriteRecipes() // Ladda favoritrecept när komponenten skapas
  },
  methods: {
    // länkar till recepten
    selectRecept(mealId) {
      // Emit an event with the selected meal ID
      // this.$emit('selectRecept', meal)
      console.log('Selected Meal ID:', mealId)
      // Navigate to ReceptView with the selected mealId
      this.$router.push({ name: 'Recept', params: { receptId: mealId } })
    },
    loadFavoriteRecipes() {
      // Läs favoritrecept från localStorage och uppdatera favoriteRecipes
      const favorites = JSON.parse(localStorage.getItem('favoriteRecipes')) || []
      this.favoriteRecipes = favorites
    },
    removeFromFavorites(recipeId) {
      // Remove the recipe from the favoriteRecipes array
      this.favoriteRecipes = this.favoriteRecipes.filter(recipe => recipe.id !== recipeId);

      // Update localStorage in the background
      localStorage.setItem('favoriteRecipes', JSON.stringify(this.favoriteRecipes));
    }
  }
}
</script>

<style scoped>
p {
  font-weight: bold;
  text-align: center;
}

img {
  display: block;
  margin: 0 auto;
  max-width: 200px;
}

.confirmation {
  color: green;
  font-size: 14px;
}

/* detta gör inget för min ta bort knapp är nu borta */
.remove-button {
  background-color: rgb(207, 68, 68);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.remove-button:hover {
  background-color: rgb(134, 60, 60);
}

@media (min-width: 600px) {
  .flex {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
  }
}
</style>
