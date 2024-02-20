<script>
import meals from '../assets/meals.json'

export default {
  created() {
    // Access the selected meal information from $route.params
    // We need to acces to this as a number if passed as astring do not work.
    const selectedMealId = Number(this.$route.params.receptId)
    this.selectedReceptId = selectedMealId
    console.log('id:', selectedMealId)

    // search on the json file by the ID

    this.selectedMeal = meals.recipes.find((meal) => meal.id === selectedMealId)
    console.log(this.selectedMeal)
  },
  data() {
    return {
      selectedReceptId: '',
      selectedMeal: {},
    }
  },
}
</script>

<template>
  <h1>RECEPT</h1>
  <p>recept ID: {{ $route.params.receptId }}</p>
  <img :src="`src/assets/${selectedMeal.image}`" />
  <h2>{{ selectedMeal.title }}</h2>
  <p>{{ selectedMeal.description }}</p>

  <h3>Ingredienser:</h3>
  <p>{{ selectedMeal.ingredients }}</p>

  <h3>Gör så här:</h3>

  <p>{{ selectedMeal.instructions }}</p>
</template>

<style scoped>
img {
  max-height: 200px;
}
</style>
