<!-- /src/views/MyFavoriteReceptsView.vue  -->

<template>
  <div class="container">
    <h1>Favorit Recept</h1>

    <!-- Visa bekräftelsemeddelande när ett recept tas bort från favoriter -->
    <span v-if="showConfirmation" class="confirmation">{{ confirmationMessage }}</span>

    <!-- Loopa igenom favoritrecept och visa varje recept med CardRecept-komponenten -->
    <div class="flex">
      <!-- Loop för att visa varje favoritrecept -->
      <div v-for="recipe in favoriteRecipes" :key="recipe.id" class="recipe-card">
        <!-- CardRecept-komponenten för varje recept -->
        <CardRecept :title="recipe.title" :prepTime="recipe.prepTime" :category="recipe.category" :level="recipe.level"
          :image="recipe.image" :id="recipe.id" :iconColor="recipe.iconColor" :iconImage="recipe.iconImage"
          @select-recept="selectRecept" />

        <!-- Knapp för att ta bort receptet från favoriter -->
        <BButton @click="removeFromFavorites(recipe.id)" class="remove-button">Ta bort Recept</BButton>
      </div>
    </div>

    <p>Mmmm här så sparas det ner smarriga recept~</p>
    <img src="../assets/bilder/drake-mumss.png" alt="Bild på draken kär av recept" />
  </div>
</template>

<script>
import { BButton } from 'bootstrap-vue-next'
import CardRecept from '../components/CardRecept.vue'

export default {
  components: {
    CardRecept,
    BButton
  },
  data() {
    return {
      favoriteRecipes: [], // En array som håller favoritrecept
      showConfirmation: false, // Visa bekräftelsemeddelande
      confirmationMessage: '' // Meddelande för bekräftelse
    }
  },
  created() {
    this.loadFavoriteRecipes() // Ladda favoritrecept när komponenten skapas
  },
  methods: {
    // länkar till recepten
    selectRecept(mealId) {
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

      // Show confirmation message
      this.confirmationMessage = 'Receptet har tagits bort från dina favoriter!';
      this.showConfirmation = true;

      // Hide confirmation message after 3 seconds
      setTimeout(() => {
        this.showConfirmation = false;
      }, 3000);
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
  font-size: 20px;
  /* Större storlek för texten */
  font-weight: bold;
  /* Fet text */
  text-align: center;
  /* Centrerad text */
  display: block;
  /* Gör elementet till en blocknivå för att centrera det horisontellt */
  margin-top: 10px;
  /* Lite mellanrum från övriga innehållet */
}

button {
  background-color: rgb(239, 239, 239);
  color: rgb(98, 98, 98);
  border: 1px solid rgb(58, 58, 58);
  margin: 6px;
  padding: 0.3rem 1rem;
  cursor: pointer;
  border-radius: 7px;
  transition: background-color 0.3s;
  font-weight: bold;
  font-size: small;
}

button:hover {
  color: rgb(255, 255, 255);
  background-color: rgb(220, 64, 64);
}

.recipe-card {
  position: relative;
}

.remove-button {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
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
