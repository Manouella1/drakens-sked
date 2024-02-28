<script>
  import meals from '../assets/data/meals.json'

  export default {
    props: {
      selectedReceptId: {
        type: Number,
        required: true
      },
      $route: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        selectedMeal: {},
        ingredients: null,
        instructions: null,
        nutrients: null
      }
    },
    emits: ['handle-click'],
    created() {
      this.loadMealData()
    },
    methods: {
      handleClick() {
        this.$emit('handle-click')
      },
      loadMealData() {
        const selectedMealId = this.selectedReceptId
        this.selectedMeal = meals.recipes.find(
          (meal) => meal.id === selectedMealId
        )

        this.ingredients = this.selectedMeal.ingredients
        this.instructions = this.selectedMeal.instructions
        this.nutrients = this.selectedMeal.nutrients
      }
    },
    watch: {
      $route(to, from) {
        if (from.fullPath !== to.fullPath) {
          this.loadMealData()
        }
      }
    }
  }
</script>

<template>
  <div>
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

    <!-- without @click passing directly via route-link -->
    <router-link name="default" :to="'/recepts/' + selectedReceptId + '/steps'">
      <BButton variant="outline-secondary" @click="handleClick"
        >Play Recept ▶️</BButton
      >
    </router-link>

    <router-link name="default" :to="'/recepts/'">
      <BButton variant="outline-primary" @click="handleClick"
        >View All Recepts
      </BButton>
    </router-link>
  </div>
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
