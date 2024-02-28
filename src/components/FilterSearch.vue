<!-- Filter-komponent -->
<script setup>
  import { ref, watch } from 'vue'
  import { useRouter } from 'vue-router'
  import CardRecept from '../components/CardRecept.vue'
  import meals from '../assets/data/meals.json'

  let allRecipes = ref(null), // Alla recept efter filtrering
    pushedButton = ref(false), // Om filtrering vald eller inte
    allPropertiesValue = ref([]), // Alla värden inom svårighetsgrad + kategori som filtrering ska ske på
    selectedLevels = ref([]), // Alla svårighetsgrader användaren valt
    selectedCategories = ref([]), // Alla kategorier användaren valt
    allSelectedOptions = ref([]), // Samtliga valda alternativ (svårighetsgrad + kategori)
    levelOptions = ref([]), // Alla svårighetsgrader som finns att välja på
    categoryOptions = ref([]), // Alla kategorier som finns att välja på
    properties = ref(['level', 'category']), // De nycklar i json-filen som filtreras på
    router = useRouter(), // Gör vue-router tillgänglig
    checkboxSize = ref(null), // Anger storlek på checkbox
    screenWidth = ref(null) // Mäter av skärmens storlek

  // Genererar alla svårighetsgrader och kategorier direkt
  generateLevels()
  generateCategories()

  // funktion som hämtar alla recept med vald svårighetsgrad och lägger dem i allRecipes
  function filterLevel(x) {
    for (let i = 0; i < meals.recipes.length; i++) {
      if (x === meals.recipes[i].level) {
        allRecipes.value.push(meals.recipes[i])
      }
    }
    pushedButton.value = true
  }

  // funktion som hämtar alla recept med vald kategori och lägger dem i allRecipes
  function filterCategory(x) {
    for (let i = 0; i < meals.recipes.length; i++) {
      if (x === meals.recipes[i].category) {
        allRecipes.value.push(meals.recipes[i])
      }
    }
    pushedButton.value = true
  }

  // funktion som hämtar alla svårighetsgrader som finns i json-filen
  function generateLevels() {
    for (let i = 0; i < meals.recipes.length; i++) {
      let x = meals.recipes[i].level
      if (allPropertiesValue.value.includes(x) !== true) {
        allPropertiesValue.value.push(meals.recipes[i].level)
        levelOptions.value.push(meals.recipes[i].level)
      }
    }
  }

  // funktion som hämtar alla kategorier som finns i json-filen
  function generateCategories() {
    for (let i = 0; i < meals.recipes.length; i++) {
      let x = meals.recipes[i].category
      if (allPropertiesValue.value.includes(x) !== true) {
        allPropertiesValue.value.push(meals.recipes[i].category)
        categoryOptions.value.push(meals.recipes[i].category)
      }
    }
  }

  // watchers som håller koll på när ny svårighetsgrad och kategori är vald.
  // valda svårighetsgrader och kategorier är i separata listor och sammanslås i allSelectedOptions
  watch(selectedLevels, () => {
    allSelectedOptions.value = selectedLevels.value.concat(
      selectedCategories.value
    )
  })
  watch(selectedCategories, () => {
    allSelectedOptions.value = selectedCategories.value.concat(
      selectedLevels.value
    )
  })

  // watcher för när allSelectedOptions ändras. Hanterar om båda arrayerna är tomma, om en är
  // innehåller värden eller om båda arrayerna innehåller värden
  watch(allSelectedOptions, () => {
    // Båda filterna är tomma
    if (
      selectedCategories.value.length === 0 &&
      selectedLevels.value.length === 0
    ) {
      pushedButton.value = false
    }
    // Filter på svårighetsgrad
    if (
      selectedCategories.value.length === 0 &&
      selectedLevels.value.length !== 0
    ) {
      allRecipes.value = []
      for (let i = 0; i < allSelectedOptions.value.length; i++) {
        filterLevel(allSelectedOptions.value[i])
      }
    }
    // Filter på kategori
    if (
      selectedCategories.value.length !== 0 &&
      selectedLevels.value.length === 0
    ) {
      allRecipes.value = []
      for (let i = 0; i < allSelectedOptions.value.length; i++) {
        filterCategory(allSelectedOptions.value[i])
      }
    }
    // Filter på både svårighetsgrad och kategori
    if (
      selectedCategories.value.length !== 0 &&
      selectedLevels.value.length !== 0
    ) {
      let filter = meals.recipes.filter((values) => {
        return properties.value.every((properties) => {
          return allSelectedOptions.value.includes(values[properties])
        })
      })
      allRecipes.value = []
      allRecipes.value = filter
    }
  })

  // funktion för att navigera till valt recept
  function selectRecept(mealId) {
    router.push({ name: 'Recept', params: { receptId: mealId } })
  }

  // Mäter skärmens storlek och ger checkboxSize en storlek baserat på det
  screenWidth.value = window.innerWidth
  if (screen.width > 770) {
    checkboxSize.value = 'lg'
  } else {
    checkboxSize.value = 'sm'
  }

  // addEventListener som lyssnar efter när skärmen ändrar storlek
  window.addEventListener('resize', () => {
    screenWidth.value = window.innerWidth
  })

  // watch som håller koll på när skrämens storlek ändrar sig
  watch(screenWidth, () => {
    if (screen.width > 770) {
      checkboxSize.value = 'lg'
    } else {
      checkboxSize.value = 'sm'
    }
  })
</script>

<template>
  <div id="filterBox">
    <div class="filter">
      <h2 class="title">Svårighetsgrader:</h2>
      <b-form-group>
        <b-form-checkbox-group
          class="filter-checkboxes"
          v-model="selectedLevels"
          :options="levelOptions"
          :size="checkboxSize"
          buttons
          button-variant="success"
          name="checkbox-buttons"
        />
      </b-form-group>
    </div>
    <div class="filter">
      <h2 class="title">Kategorier:</h2>
      <b-form-group>
        <b-form-checkbox-group
          class="filter-checkboxes"
          v-model="selectedCategories"
          :options="categoryOptions"
          :size="checkboxSize"
          buttons
          button-variant="success"
          name="checkbox-buttons"
        />
      </b-form-group>
    </div>
  </div>
  <div id="results" v-if="pushedButton === true">
    <h2>Resultat för</h2>
    <h1>
      <span v-for="(option, index) in allSelectedOptions" :key="index">
        {{ option }}
        <span v-if="index !== allSelectedOptions.length - 1"> + </span>
      </span>
    </h1>
    <h2>{{ allRecipes.length }} resultat</h2>
    <div class="flex">
      <CardRecept
        v-for="recipe in allRecipes"
        :key="recipe.id"
        :title="recipe.title"
        :prep-time="recipe.prepTime"
        :category="recipe.category"
        :level="recipe.level"
        :image="recipe.image"
        :id="recipe.id"
        :icon-color="recipe.iconColor"
        :icon-image="recipe.iconImage"
        @select-recept="selectRecept"
      />
    </div>
  </div>
</template>

<style scoped>
  @font-face {
    font-family: 'Luckiest Guy';
    font-style: normal;
    font-weight: normal;
    src: url('./assets/fonts/Luckiest_Guy/LuckiestGuy-Regular.ttf')
      format('truetype');
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    src: url('./assets/fonts/Inter/static/Inter-Regular.ttf') format('truetype');
  }

  h1 {
    font-family: 'Luckiest Guy', sans-serif;
    text-align: center;
  }

  h2 {
    font-family: 'Inter', sans-serif;
    font-size: 1.7em;
    margin: 0.5em;
    text-align: center;
  }

  #filterBox {
    align-items: center;
    background-color: rgba(255, 255, 255, 0.493);
    box-shadow: 0px 0px 5px rgb(133, 103, 75);
    display: flex;
    flex-direction: column;
    padding: 1em;
  }

  .filter {
    align-items: center;
    display: flex;
    margin: 0.5em;
    padding: 0.5em;
  }

  .title {
    font-family: 'Aladin', cursive;
    font-size: 1.5em;
    font-weight: bold;
  }

  #results {
    margin: 2em 0;
  }

  .flex {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
  }

  @media (max-width: 770px) {
    .title {
      font-size: 1em;
      font-weight: normal;
    }

    .filter {
      flex-direction: column;
      margin: 0;
    }
  }
</style>
