<!-- /src/views/MyFavoriteReceptsView.vue  -->

<template>
  <div class="container">
    <h1>Favorit Recept</h1>
    <!-- Loopa igenom favoritrecept och visa varje recept med CardRecept-komponenten -->
    <div v-for="recipe in favoriteRecipes" :key="recipe.id">
      <!-- Skicka props till CardRecept för att visa receptinformation -->
      <CardRecept :title="recipe.title" :prepTime="recipe.prepTime" :category="recipe.category" :level="recipe.level"
        :image="recipe.image" :id="recipe.id" :isFavorite="true" :iconColor="recipe.iconColor"
        :iconImage="recipe.iconImage" @removeFromFavorites="removeFromFavorites(recipe.id)" />
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
      showConfirmation: false, // Variabel för att visa bekräftelsemeddelande
      confirmationMessage: '' // Meddelandet som ska visas
    }
  },
  created() {
    this.loadFavoriteRecipes() // Ladda favoritrecept när komponenten skapas
  },
  methods: {
    loadFavoriteRecipes() {
      // Läs favoritrecept från localStorage och uppdatera favoriteRecipes
      const favorites = JSON.parse(localStorage.getItem('favoriteRecipes')) || []
      this.favoriteRecipes = favorites
    },
    removeFromFavorites(recipeId) {
      // Filtrera bort receptet med det angivna ID:t från favoritrecepten
      this.favoriteRecipes = this.favoriteRecipes.filter(
        (recipe) => recipe.id !== recipeId
      )
      // Uppdatera localStorage med de uppdaterade favoritrecepten efter borttagning
      localStorage.setItem(
        'favoriteRecipes',
        JSON.stringify(this.favoriteRecipes)
      )

      // Uppdatera bekräftelsemeddelandet
      this.confirmationMessage = 'Receptet har tagits bort från dina favoriter!'
      // Visa bekräftelsemeddelandet
      this.showConfirmation = true

      // Dölj bekräftelsemeddelandet efter 3 sekunder
      setTimeout(() => {
        this.showConfirmation = false
      }, 3000)
    }
  }
}
</script>

<style scoped>
p {
  font-weight: bold;
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
</style>
