<script setup>
import { ref } from 'vue'
import { BButton } from 'bootstrap-vue-next'
import meals from '../assets/meals.json'

let allLevelRecipes = ref(null)

function levelRecipe(x) {
  allLevelRecipes.value = []
  for (let i = 0; i < meals.recipes.length; i++) {
    if (x === meals.recipes[i].level) {
      allLevelRecipes.value.push(meals.recipes[i].id)
    }
  }
  console.log(`${allLevelRecipes.value}`)
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
  </div>
</template>

<style scoped>
div {
  background-color: white;
}
</style>
