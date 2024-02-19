<script>
import meals from '../assets/meals.json'
export default {
  created() {
    this.selectedReceptId = this.$route.params.mealId
    this.meals = meals.recipes
  },
  data() {
    return {
      mealID: null,
      selectedReceptId: '',
      meals: [],
    }
  },
  // watch: {
  //   selectedReceptId: this.meals.id,
  // },
}
</script>

<template>
  <h1>RECEPT</h1>

  <p>recept ID: {{ $route.params.receptId }}</p>
</template>
