<script setup>
import { ref } from 'vue'
import { BButton } from 'bootstrap-vue-next'
import CardRecept from '../components/CardRecept.vue'
import meals from '../assets/meals.json'

let allLevelRecipes = ref(null),
  pushedButton = ref(false)

function levelRecipe(x) {
  allLevelRecipes.value = []
  for (let i = 0; i < meals.recipes.length; i++) {
    if (x === meals.recipes[i].level) {
      allLevelRecipes.value.push(meals.recipes[i])
    }
  }
  pushedButton.value = true
}

function onCancel() {
  pushedButton.value = false
}
</script>

<template>
  <div>
    <BButton @click="levelRecipe('Basic')" pill variant="outline-secondary"
      >Lätt</BButton
    >
    <BButton
      @click="levelRecipe('Intermedium')"
      pill
      variant="outline-secondary"
      >Mellan</BButton
    >
    <BButton @click="levelRecipe('Advanced')" pill variant="outline-secondary"
      >Avancerad</BButton
    >
    <BButton @click="onCancel" pill variant="outline-secondary">X</BButton>
  </div>
  <div v-if="pushedButton === true">
    <h1>Recept för: {{ allLevelRecipes[0].level }}</h1>
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
