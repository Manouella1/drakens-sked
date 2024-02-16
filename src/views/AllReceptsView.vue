<script>
import meals from '../assets/meals.json'

// console.log(meals.recipes[1].title)
console.log(meals)

export default {
  created() {
    this.meals = meals.recipes
  },
  data() {
    return {
      meals: [],
    }
  },
}
</script>

<template>
  <h1>ALL RECEPTS</h1>
  <ol>
    <li v-for="meal in meals">{{ meal.title }}</li>
  </ol>
</template>

<style></style>
