<script>
  import meals from '../assets/data/meals.json'

  export default {
    created() {
      this.loadMealData()
    },
    data() {
      return {
        selectedReceptId: '',
        selectedMeal: {},
        ingredients: null,
        instructions: null,
        nutrients: null,
        showReceptView: true // to be able to hide div when nested element comes
      }
    },
    methods: {
      handleClick() {
        this.showReceptView = false
        // console.log('Button Clicked')
      },
      // to solve issue is  not updating the information when i come back from PLayReceptView create instead a function
      loadMealData() {
        // Access the selected meal information from $route.params
        // We need to acces to this as a number if passed as a string do not work.
        const selectedMealId = Number(this.$route.params.receptId)
        this.selectedReceptId = selectedMealId

        // search on the json file by the ID
        this.selectedMeal = meals.recipes.find(
          (meal) => meal.id === selectedMealId
        )

        this.ingredients = this.selectedMeal.ingredients
        this.instructions = this.selectedMeal.instructions
        this.nutrients = this.selectedMeal.nutrients

        console.log(this.selectedMeal.nutrients)
      },
      handlePlayReceptBack() {
        // Communicate with the other component via router-view
        this.showReceptView = true
        console.log('receptback', this.showReceptView)
      }
    },
    watch: {
      // to solve issue is t´not updating the information when i come back from PLayReceptView
      $route(to, from) {
        //  Verify is the preivious and actual route are the same
        if (from.fullPath !== to.fullPath) {
          this.loadMealData()
        }
      }
    }
  }
</script>

<template>
  <main class="container">
    <div v-if="showReceptView">
      <h1>RECEPT</h1>

      <div class="flex">
        <p>
          <span>{{ selectedMeal.iconColor }}</span>
          <span>{{ selectedMeal.iconImage }}</span
          >{{ selectedMeal.level }}
        </p>
        <p>{{ selectedMeal.category }}</p>
        <p>
          PrepTime:{{ selectedMeal.prepTime }} CookTime:{{
            selectedMeal.cookTime
          }}
        </p>
        Nutrients:
        <ul>
          <li v-for="nutrient in nutrients" :key="nutrient.id">
            {{ nutrient }}
          </li>
        </ul>
        <p>Portioner:{{ selectedMeal.portions }}</p>
      </div>
      <p>recept ID: {{ $route.params.receptId }}</p>
      <img :src="`src/assets/receptsBilder/${selectedMeal.image}`" />
      <h2>{{ selectedMeal.title }}</h2>
      <p>{{ selectedMeal.description }}</p>

      <h3>Ingredienser:</h3>
      <ul>
        <li v-for="ingredient in ingredients" :key="ingredient.id">
          {{ ingredient }}
        </li>
      </ul>

      <h3>Gör så här:</h3>

      <ol>
        <li v-for="instruction in instructions" :key="instruction.id">
          {{ instruction.text }}
        </li>
      </ol>

      <!-- without @click passing direct via route-link -->
      <router-link
        name="default"
        :to="'/recepts/' + selectedReceptId + '/steps'"
      >
        <BButton variant="outline-secondary" @click="handleClick"
          >Play Recept ▶️</BButton
        >
      </router-link>
    </div>

    <!-- Here we can send the information of the json and the event communicate between Recept and PlayRecept to activate the visibility of the v-if -->
    <router-view
      @handle-play-recept-back="handlePlayReceptBack()"
      name="default"
      :instructions="selectedMeal.instructions"
    />
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
