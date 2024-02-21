<script>
import meals from '../assets/meals.json'

export default {
  created() {
    // move all logic to a function and create a watch and in created i call it for update when comeback from PlatRecept

    this.loadMealData()

    console.log(this.showReceptView) //just to debugg
    console.log('back?') //just to debugg
  },
  data() {
    return {
      selectedReceptId: '',
      selectedMeal: {},
      ingredients: null,
      instructions: null,
      nutrients: null,
      showReceptView: true, // to be able to hide div when nested element comes
    }
  },
  methods: {
    handleClick() {
      // this.$router.push({
      //   name: 'PlayReceptView',
      //   params: {
      //     receptId: this.selectedReceptId,
      //     step: this.selectedMeal.instructions[0].step,
      //   },
      // })
      this.showReceptView = false
      console.log('Button Clicked')
    },
    // to solve issue is t´not updating the information when i come back from PLayReceptView create instead a function
    loadMealData() {
      // Access the selected meal information from $route.params
      // We need to acces to this as a number if passed as astring do not work.
      const selectedMealId = Number(this.$route.params.receptId)
      this.selectedReceptId = selectedMealId

      // console.log('id:', selectedMealId)

      // search on the json file by the ID

      this.selectedMeal = meals.recipes.find(
        (meal) => meal.id === selectedMealId
      )
      // console.log(this.selectedMeal)

      this.ingredients = this.selectedMeal.ingredients
      this.instructions = this.selectedMeal.instructions
      this.nutrients = this.selectedMeal.nutrients
    },
    // handlePlayReceptBack() {
    //   // Not working
    //   this.showReceptView = true
    // },
  },
  watch: {
    // to solve issue is t´not updating the information when i come back from PLayReceptView
    $route(to, from) {
      //  Verify is the preivious and actual route are tthe same
      if (from.fullPath !== to.fullPath) {
        this.loadMealData()
        //this.showReceptView = true //need to review HERE !!!
      }
    },
  },
}
</script>

<template>
  <main class="container">
    <div v-if="showReceptView">
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
      <!-- <router-link :to="'/recepts/' + selectedReceptId + '/step1'">
        <BButton variant="outline-secondary" @click="handleClick"
          >Play Recept: 1</BButton
        >
      </router-link> -->

      <!-- without @click passing directvia route-link -->
      <router-link
        name="default"
        :to="'/recepts/' + selectedReceptId + '/step1'"
      >
        <BButton variant="outline-secondary" @click="handleClick"
          >Play Recept:2</BButton
        >
      </router-link>
    </div>

    <router-view
      name="default"
      :instructions="selectedMeal.instructions"
    ></router-view>
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
