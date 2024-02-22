<!-- Filter-komponent -->
<script setup>
  import { ref, watch } from 'vue'
  import { BButton } from 'bootstrap-vue-next'
  import CardRecept from '../components/CardRecept.vue'
  import meals from '../assets/meals.json'

  let allLevelRecipes = ref(null),
    allCategoryRecipes = ref(null),
    pushedButton = ref(false),
    allCategories = ref([]),
    levelOptions = ref([]),
    selectedLevels = ref([]),
    selectedCategories = ref([]),
    allSelectedOptions = ref([]),
    categoryOptions = ref([]),
    properties = ref(['level', 'category']),
    allRecipes = ref(null)

  function filterLevel(x) {
    for (let i = 0; i < meals.recipes.length; i++) {
      if (x === meals.recipes[i].level) {
        allLevelRecipes.value.push(meals.recipes[i])
      }
    }
    pushedButton.value = true
    console.log(allLevelRecipes.value)
  }

  function filterCategory(x) {
    for (let i = 0; i < meals.recipes.length; i++) {
      if (x === meals.recipes[i].category) {
        allLevelRecipes.value.push(meals.recipes[i])
      }
    }
    pushedButton.value = true
    console.log(allLevelRecipes.value)
  }

  // function filterCategory() {
  //   let x = allLevelRecipes.value.filter(function (y) {
  //     for (let i = 0; i < meals.recipes.length; i++) {
  //       if (y === meals.recipes[i].category) {
  //         allCategoryRecipes.value.push(meals.recipes[i])
  //       }
  //     }
  //     console.log(x)
  //   })
  // }

  // function onLevelRecipe(x) {
  //   allLevelRecipes.value = []
  //   for (let i = 0; i < meals.recipes.length; i++) {
  //     if (x === meals.recipes[i].level) {
  //       allLevelRecipes.value.push(meals.recipes[i])
  //     }
  //   }
  //   pushedButton.value = true
  // }

  function onCancel() {
    pushedButton.value = false
  }

  generateAllCategories()
  generateLevels()

  function generateAllCategories() {
    for (let i = 0; i < meals.recipes.length; i++) {
      let x = meals.recipes[i].category
      if (allCategories.value.includes(x) !== true) {
        allCategories.value.push(meals.recipes[i].category)
        categoryOptions.value.push(meals.recipes[i].category)
      }
    }
  }

  function generateLevels() {
    for (let i = 0; i < meals.recipes.length; i++) {
      let x = meals.recipes[i].level
      if (allCategories.value.includes(x) !== true) {
        allCategories.value.push(meals.recipes[i].level)
        levelOptions.value.push(meals.recipes[i].level)
      }
    }
  }

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
      allLevelRecipes.value = []
      for (let i = 0; i < allSelectedOptions.value.length; i++) {
        filterLevel(allSelectedOptions.value[i])
      }
    }
    // Filter på kategori
    if (
      selectedCategories.value.length !== 0 &&
      selectedLevels.value.length === 0
    ) {
      allLevelRecipes.value = []
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
      allLevelRecipes.value = []
      allLevelRecipes.value = filter
    }
  })

  // let filter = meals.recipes.filter((values) => {
  //       return properties.value.every((properties) => {
  //         return allSelectedOptions.value.includes(values[properties])
  //       })
  //     })

  // watch(allSelectedOptions, () => {
  //   let filter = meals.recipes.filter((values) => {
  //     return properties.value.every((properties) => {
  //       return allSelectedOptions.value.includes(values[properties])
  //     })
  //   })
  //   console.log(filter)
  // })

  // function generateAllCategories(category, array) {
  //   for (let i = 0; i < meals.recipes.length; i++) {
  //     let x = meals.recipes[i][category]
  //     if ([array].includes(x) !== true) {
  //       ;[array].push(x)
  //     }
  //   }
  // }
</script>

<template>
  <div>
    <b-form-group label="Välj svårighetsgrad">
      <b-form-checkbox-group
        v-model="selectedLevels"
        :options="levelOptions"
        buttons
        button-variant="secondary"
        name="buttons-2"
      ></b-form-checkbox-group>
    </b-form-group>
  </div>
  <div>
    <b-form-group label="Välj kategori">
      <b-form-checkbox-group
        v-model="selectedCategories"
        :options="categoryOptions"
        buttons
        button-variant="secondary"
        name="buttons-2"
      ></b-form-checkbox-group>
    </b-form-group>
  </div>
  <!-- =============================================================================== -->
  <!-- <div>
    <BButton @click="onLevelRecipe('Basic')" pill variant="outline-secondary"
      >Lätt</BButton
    >
    <BButton
      @click="onLevelRecipe('Intermedium')"
      pill
      variant="outline-secondary"
      >Mellan</BButton
    >
    <BButton @click="onLevelRecipe('Advanced')" pill variant="outline-secondary"
      >Avancerad</BButton
    >
    <BButton @click="onCancel" pill variant="outline-secondary">X</BButton>
  </div>
  <div>
    <span v-for="category in allCategories">
      <BButton @click="test(category)" pill variant="outline-secondary">{{
        category
      }}</BButton></span
    >
  </div> -->
  <div v-if="pushedButton === true">
    <h1>Resultat för {{ allSelectedOptions }}</h1>
    <h2>{{ allLevelRecipes.length }} resultat</h2>
    <CardRecept
      v-for="recipe in allLevelRecipes"
      :key="recipe.id"
      :title="recipe.title"
      :prepTime="recipe.prepTime"
      :category="recipe.category"
      :level="recipe.level"
      :image="recipe.image"
      :id="recipe.id"
    >
    </CardRecept>
  </div>
</template>

<style scoped>
  div {
    background-color: white;
  }
</style>
