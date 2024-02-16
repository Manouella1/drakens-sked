<script>
import meals from '../assets/meals.json'

// console.log(meals.recipes[1].title)
console.log(meals.recipes[0].image)

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
    <li v-for="meal in meals" :key="meal.id">
      <h2>{{ meal.title }}</h2>
      <img :src="`../assets/${meal.image}`" alt="photo recept" />
    </li>
  </ol>
  <img src="../assets/foto1.jpg" alt="photo recept" />

  <div>{{ meals[0].image }}</div>
  <img :src="meals[0].image" alt="photo recept" />
  <!-- <img :src="`../assets/${meals[0].image}`" alt="photo recept" /> -->
</template>

<style>
</style>
