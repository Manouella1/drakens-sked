<script>
  import EggTimer from '../components/EggTimer.vue'
  import WelcomeUser from '../components/WelcomeUser.vue'

  import meals from '../assets/data/meals.json'

  export default {
    components: {
      EggTimer,
      WelcomeUser
    },

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
      // to solve issue is not updating the information when I come back from PlayReceptView
      $route(to, from) {
        // Verify if the previous and actual route are the same
        if (from.fullPath !== to.fullPath) {
          this.loadMealData()

          // Check if the current route corresponds to Recept/id
          if (to.name === 'Recept' && to.params.receptId) {
            this.handlePlayReceptBack()
            console.log('inside back browser')
          }
          // Check if the current route corresponds to steps
          if (to.name === 'PlayReceptView') {
            this.handleClick()
            console.log('inside fwd browser')
          }

          // if on step always is v-if is always false
        }
      }
    },
    mounted() {
      // Check if the current route corresponds to PlayReceptView
      if (this.$route.name === 'PlayReceptView') {
        this.handleClick()
        // console.log('inside page load or reload')
      }
    }
  }
</script>

<template>
  <main class="container">
    <div v-if="showReceptView">
      <WelcomeUser class="container-drake" />
      <article class="container-notepad">
        <div class="img-container">
          <img
            class="cover-image"
            :src="`src/assets/receptsBilder/${selectedMeal.image}`"
          />
        </div>
        <div class="recept-info">
          <div class="flex">
            <div class="flex">
              <p>
                <span>{{ selectedMeal.iconColor }}</span>
                <span>{{ selectedMeal.iconImage }}</span
                >{{ selectedMeal.level }}
              </p>
              <p class="spaceText">{{ selectedMeal.category }}</p>
            </div>
            <div>
              <p>
                PrepTime: {{ selectedMeal.prepTime
                }}<span class="spaceText"
                  >CookTime: {{ selectedMeal.cookTime }}</span
                >
              </p>
            </div>
            <div>
              Nutrients:
              <ul class="listNutrient">
                <li v-for="nutrient in nutrients" :key="nutrient.id">
                  {{ nutrient }}
                </li>
              </ul>
            </div>
            <p>Portioner: {{ selectedMeal.portions }}</p>
          </div>
        </div>
        <div class="content-text">
          <h1 class="receptTitle">{{ selectedMeal.title }}</h1>
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
        </div>
        <div class="buttons">
          <!-- without @click passing direct via route-link -->
          <router-link
            name="default"
            :to="'/recepts/' + selectedReceptId + '/steps'"
          >
            <BButton variant="outline-secondary" @click="handleClick"
              >Spela recept ▶️</BButton
            >
          </router-link>

          <router-link name="default" :to="'/recepts/'">
            <BButton variant="outline-primary" @click="handleClick"
              >Visa alla recept
            </BButton>
          </router-link>
        </div>
      </article>

      <EggTimer />
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
  .container-drake {
    max-width: 80%;
    margin: auto;
  }
  .flex {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .spaceText {
    padding-left: 3rem;
  }

  .receptTitle {
    text-align: center;
    font-size: 2.5rem;
  }
  .recept-info {
    display: inline;
    max-width: 70%;
    border-radius: 20px;
    padding: 1rem;
    margin: auto;
    border: 4px solid white;
    font-size: 1.2rem;
  }

  /* Originally from www.webinterfacelab.com/snippets/notepad */

  .cover-image {
    min-height: 13rem;
    width: 100%;
    object-fit: cover;
  }

  .img-container {
    width: 100%;
    height: 12.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    overflow: hidden;
  }

  .container-notepad,
  .container-notepad:before,
  .container-notepad:after {
    background-color: #fff;
    background-image: -webkit-linear-gradient(#f6abca 1px, transparent 1px),
      -webkit-linear-gradient(#f6abca 1px, transparent 1px),
      -webkit-linear-gradient(#e8e8e8 1px, transparent 1px);
    background-image: -moz-linear-gradient(#f6abca 1px, transparent 1px),
      -moz-linear-gradient(#f6abca 1px, transparent 1px),
      -moz-linear-gradient(#e8e8e8 1px, transparent 1px);
    background-image: -o-linear-gradient(#f6abca 1px, transparent 1px),
      -o-linear-gradient(#f6abca 1px, transparent 1px),
      -o-linear-gradient(#e8e8e8 1px, transparent 1px);
    background-image: linear-gradient(#f6abca 1px, transparent 1px),
      linear-gradient(#f6abca 1px, transparent 1px),
      linear-gradient(#e8e8e8 1px, transparent 1px);
    background-size: 1px 1px, 1px 1px, 23px 23px;
    background-repeat: repeat-y, repeat-y, repeat;
    background-position: 22px 0, 24px 0, 0 50px;
    border-radius: 2px;
    -webkit-box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15),
      0 0 4px rgba(0, 0, 0, 0.5);
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15), 0 0 4px rgba(0, 0, 0, 0.5);
  }

  .container-notepad {
    position: relative;
    /* margin: 0 auto 3.75rem auto; */
    margin: auto;
    padding: 2rem 9%;
    max-width: 100%;
    line-height: 1.8rem;
    font-size: 1.3rem;
    color: #333;
  }

  .container-notepad p,
  .container-notepad blockquote {
    margin-bottom: 1.56rem;
  }

  .container-notepad :last-child {
    margin-bottom: 0;
  }

  .container-notepad:before,
  .container-notepad:after {
    content: '';
    position: absolute;
    z-index: -1;
    top: 100%;
    left: 0.3rem;
    right: 0.3rem;
    margin-top: -0.12rem;
    max-height: 0.25rem;
    background-size: 1px 1px, 1px 1px, 0 0;
  }

  .container-notepad:before {
    z-index: -2;
    left: 0.375rem;
    right: 0.375rem;
    height: 0.375rem;
    background-color: #eee;
  }

  .notepad-heading:before,
  .notepad-heading:after {
    content: '';
    position: absolute;
    bottom: 2px;
    left: 1px;
    right: 1px;
    height: 0;
    border-top: 1px dashed #617c90;
    border-color: rgba(255, 255, 255, 0.35);
  }

  .buttons {
    display: flex;
    justify-content: space-evenly;
    margin-top: 1.5rem;
  }

  @media only screen and (min-width: 768px) {
    .img-container {
      height: 22rem;
    }
    .container-notepad {
      max-width: 80%;
      line-height: 1.8rem;
    }
    .recept-info {
      max-width: 80%;
      border-radius: 20px;
      padding: 1rem;
      margin: auto;
      border: 4px solid white;
      font-size: 1.2rem;
    }
  }
</style>
