<script>
import meals from '../assets/meals.json'
import CardRecept from '../components/CardRecept.vue'

// console.log(meals.recipes[1].title)
console.log(meals.recipes[0].image)

export default {
  created() {
    this.meals = meals.recipes
  },
  data() {
    return {
      meals: [],
      title: null,
      category: null,
      level: null,
    }
  },
}
</script>

<template>
  <div>
    <h2>ALL RECEPTS:</h2>
    <CardRecept v-for="meal in meals" :key="meal.id"> </CardRecept>
  </div>
</template>

<style></style>
