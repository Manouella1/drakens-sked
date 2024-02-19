<script>
import meals from '../assets/meals.json'
import CardRecept from '../components/CardRecept.vue'

export default {
  components: {
    CardRecept,
  },
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
  <div>
    <h1>ALL RECEPTS:</h1>
    <CardRecept
      v-for="meal in meals"
      :key="meal.id"
      :title="meal.title"
      :prepTime="meal.prepTime"
      :category="meal.category"
      :level="meal.level"
      :image="meal.image"
    >
    </CardRecept>
  </div>
</template>

<style></style>
