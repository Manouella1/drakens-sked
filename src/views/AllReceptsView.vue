<!-- src/views/AllReceptsView -->
<script>
import CardsRecepts from '../components/CardsRecepts.vue'
import FilterSearch from '../components/FilterSearch.vue'
import meals from '../assets/meals.json'

console.log(meals.recipes)
// console.log(meals.recipes[0].image)

export default {
  components: {
    CardsRecepts,
    FilterSearch,
  },
  // created() {
  //   this.meals = meals.recipes
  // },
  // data() {
  //   return {
  //     meals: [],
  //   }
  // },
}
</script>

<template>
  <main class="container">
    <!-- Created to try get info direct in ReceptsView but we decide to implement to create a component to can re use it and clean code -->
    <!-- <h1>ALL RECEPTS</h1>
  <ol>
    <li v-for="meal in meals" :key="meal.id">
      <h2>{{ meal.title }}</h2>
      <img :src="`src/assets/${meal.image}`" alt="photo recept" />
    </li>
  </ol> -->

    <!-- WE use here the component we create for the recepies -->
    <FilterSearch />
    <CardsRecepts />
  </main>
</template>

<style scoped>
img {
  max-height: 200px;
  width: auto;
}
</style>
