<!-- src/components/FavoriteRecepts.vue -->

<script>
  export default {
    data() {
      return {
        favoriteRecipes: [] // Array för att lagra favoritrecept
      }
    },
    created() {
      // Funktion som körs när komponenten skapas för att ladda favoritrecept från localStorage
      this.loadFavoriteRecipes()
    },
    methods: {
      // Funktion effect för hover över favorit card (samma som alla recept)
      enlargeImage(event) {
        // Enlarge the image when hovered
        event.currentTarget.style.transform = 'scale(1.04)'
        event.currentTarget.style.cursor = 'pointer'
      },
      resetImage(event) {
        // Reset the image when mouseout
        event.currentTarget.style.transform = 'scale(1)'
        event.currentTarget.style.cursor = 'default'
      },
      // Funktion för att hämta favoritrecept från localstorage
      loadFavoriteRecipes() {
        // Hämtar favoritrecept från localStorage och konverterar från JSON-format
        const favorites =
          JSON.parse(localStorage.getItem('favoriteRecipes')) || []
        // Tilldelar favoritrecepten till data-variabeln för att visas i listan
        this.favoriteRecipes = favorites
      },
      // Funktion för att ta bort ett recept från favoriter
      removeFromFavorites(recipeId) {
        // Filtrerar bort receptet med det angivna ID:t från favoritrecepten
        this.favoriteRecipes = this.favoriteRecipes.filter(
          (recipe) => recipe.id !== recipeId
        )
        // Uppdaterar localStorage med de uppdaterade favoritrecepten efter borttagning
        localStorage.setItem(
          'favoriteRecipes',
          JSON.stringify(this.favoriteRecipes)
        )
      }
    }
  }
</script>

<template>
  <!-- Listar favoritrecept & visar en knapp för att ta bort varje recept -->
  <div>
    <!-- Loopar igenom favoritrecept och skapar ett kort för varje recept -->
    <div v-for="recipe in favoriteRecipes" :key="recipe.id">
      <BCard
        class="favorite-card"
        @mouseover="enlargeImage"
        @mouseout="resetImage"
      >
        <div class="card-content">
          <!-- Visar receptets titel -->
          <h3>{{ recipe.title }}</h3>
          <!-- Visar receptets bild -->
          <img
            :src="`src/assets/${recipe.image}`"
            alt="Recipe Image"
            class="recipe-image"
          />
          <!-- Knapp för att ta bort receptet från favoriter -->
          <button @click="removeFromFavorites(recipe.id)" class="remove-button">
            Ta bort recept
          </button>
        </div>
      </BCard>
    </div>
  </div>
</template>

<style scoped>
  .favorite-card {
    max-width: 400px;
    /* Justera bredden på kortet efter behov */
    margin-bottom: 1rem;
    /* Lägg till lite avstånd mellan korten */
  }

  .card-content {
    padding: 1rem;
    /* Lägg till lite padding för att separera innehållet från kanten av kortet */
  }

  .recipe-image {
    max-width: 100%;
    /* Sätt maxbredden på bilden till 100% av dess container för att förhindra att den blir för stor */
    height: auto;
    /* Automatisk höjd för att behålla bildens proportioner */
    margin-bottom: 1rem;
    /* Lägg till lite mellanrum mellan bilden och övrigt innehåll */
  }

  .remove-button {
    background-color: rgb(207, 68, 68);
    /* Ändra bakgrundsfärgen på knappen för att markera borttagning */
    color: white;
    /* Ändra textfärgen för bättre kontrast */
    border: none;
    /* Ta bort kanten runt knappen */
    padding: 0.5rem 1rem;
    cursor: pointer;
    /* Ändra pekaren till en hand när man svävar över knappen */
    border-radius: 4px;
    transition: background-color 0.3s;
    /* Nån övergångseffekt*/
  }

  .remove-button:hover {
    background-color: rgb(134, 60, 60);
  }
</style>
