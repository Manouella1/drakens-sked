<script>
  import meals from '../assets/meals.json'
  import CardRecept from '../components/CardRecept.vue'

  export default {
    components: {
      CardRecept
    },
    created() {
      this.meals = meals.recipes
      // Assigning meals data to meals array
    },
    data() {
      return {
        meals: []
        // Initializing meals array
      }
    },
    methods: {
      selectRecept(mealId) {
        // Emit an event with the selected meal ID
        // this.$emit('selectRecept', meal)
        console.log('Selected Meal ID:', mealId)
        // Navigate to ReceptView with the selected mealId
        this.$router.push({ name: 'Recept', params: { receptId: mealId } })
      }
    }
  }
</script>

<template>
  <div>
    <h1>ALL RECEPTS:</h1>
    <!-- Rendering CardRecept component for each meal -->
    <div>
      <CardRecept
        v-for="meal in meals"
        :key="meal.id"
        :title="meal.title"
        :prepTime="meal.prepTime"
        :category="meal.category"
        :level="meal.level"
        :image="meal.image"
        :id="meal.id"
        :icon="meal.icon"
        @selectRecept="selectRecept"
      >
        <!-- THIS WAS INSIDE THE CARD RECEPT CAUSING ERROR IN TERMINAL: IS NOT DEFINED ON INSTANCE -->
        <!-- @addToFavorites="addToFavorites" -->
      </CardRecept>
    </div>
  </div>
</template>

<style scoped></style>
