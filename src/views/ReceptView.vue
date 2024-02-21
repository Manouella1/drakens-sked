<script>
import meals from '../assets/meals.json'

export default {
  created() {
    // Access the selected meal information from $route.params
    // We need to acces to this as a number if passed as astring do not work.
    const selectedMealId = Number(this.$route.params.receptId)
    this.selectedReceptId = selectedMealId
    // console.log('id:', selectedMealId)

    // search on the json file by the ID

    this.selectedMeal = meals.recipes.find((meal) => meal.id === selectedMealId)
    // console.log(this.selectedMeal)

    this.ingredients = this.selectedMeal.ingredients
    this.instructions = this.selectedMeal.instructions
    this.nutrients = this.selectedMeal.nutrients
  },
  data() {
    return {
      selectedReceptId: '',
      selectedMeal: {},
      ingredients: null,
      instructions: null,
      nutrients: null,
    }
  },
  methods: {
    handleClick() {
      // this.$router.push({
      //   name: 'Recept',
      //   params: { receptId: this.selectedMeal.id, step: 'step1' },
      // })
      this.$router.push({
        name: 'PlayReceptView',
        params: {
          receptId: this.selectedMeal.id,
          step: this.selectedMeal.instructions[0].step,
        },
      })

      // this.$router.push({ name: 'Recept', params: { :step } })

      console.log('Button Clicked')
    },
  },
}
</script>

<template>
  <main class="container">
    <h1>RECEPT</h1>

    <div class="flex">
      some icon?
      <p>{{ selectedMeal.level }}</p>
      <p>{{ selectedMeal.category }}</p>
      <p>
        PrepTime:{{ selectedMeal.prepTime }} CookTime:{{
          selectedMeal.cookTime
        }}
      </p>
      Nutrients:
      <ul>
        <li v-for="nutrient in nutrients">{{ nutrient }}</li>
      </ul>
      <p>Portioner:{{ selectedMeal.portions }}</p>
      <!-- Nutrients:{{ selectedMeal.nutrients }}  -->
    </div>
    <p>recept ID: {{ $route.params.receptId }}</p>
    <img :src="`src/assets/${selectedMeal.image}`" />
    <h2>{{ selectedMeal.title }}</h2>
    <p>{{ selectedMeal.description }}</p>

    <h3>Ingredienser:</h3>
    <ul>
      <li v-for="ingredient in ingredients">{{ ingredient }}</li>
    </ul>

    <h3>Gör så här:</h3>

    <ol>
      <li v-for="instruction in instructions">{{ instruction }}</li>
    </ol>

    <!-- First Try using @click and router-link -->
    <router-link :to="'/recepts/' + selectedMeal.id + '/step1'">
      <BButton variant="outline-secondary" @click="handleClick"
        >Play Recept: 1</BButton
      >
    </router-link>

    <!-- without @click passing directvia route-link -->
    <router-link :to="'/recepts/' + selectedMeal.id + '/step1'">
      <BButton variant="outline-secondary">Play Recept:2</BButton>
    </router-link>
  </main>
</template>

<style scoped>
img {
  max-height: 200px;
}
.flex {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
