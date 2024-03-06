<script setup>
  import { useRoute, useRouter } from 'vue-router'
  import meals from '../assets/data/meals.json'
  import { ref, watch } from 'vue'

  const route = useRoute()
  const router = useRouter()
  const recipe = ref(null) // Hela receptobjektet
  const step = ref(null) // Steg i route.params
  const currentStep = ref(null) // Nuvarande steg i receptet med instruktioner osv
  const Image = ref(null) // Bild från nuvarande steg
  const Video = ref(false) // Om video finns

  // Hämtar nuvarande recept från route.params och sparar i variabeln recipe
  GetId(Number(route.params.id))
  function GetId(id) {
    for (let j = 0; j < meals.recipes.length; j++) {
      if (meals.recipes[j].id === id) {
        recipe.value = meals.recipes[j]
      }
    }
  }

  // Hämtar nuvarande steg från route.params och sparar nuvarande steg i currentStep och
  // behandlar bild och om video finns
  step.value = Number(route.params.step)
  GetSteps(step.value)
  function GetSteps(step) {
    for (let j = 0; j < recipe.value.instructions.length; j++) {
      if (recipe.value.instructions[j].step === step) {
        currentStep.value = recipe.value.instructions[j]
        Image.value = recipe.value.instructions[j].image
        Video.value = false
        if (
          currentStep.value.video !== null &&
          currentStep.value.video !== undefined
        ) {
          Video.value = true
        }
      }
    }
  }

  // Funktion för att lämna PlayDemo och gå tillbaka till receptet
  function GoBack() {
    router.push(`/recepts/${recipe.value.id}`)
  }

  // Watch som håller koll på när step ändrar sig
  watch(
    () => step.value,
    () => {
      router.push(`/recepts/${recipe.value.id}/${step.value}`)
      GetSteps(step.value)
    }
  )
</script>
<template>
  <BButton variant="success" @click="GoBack">X</BButton>
  <BButton variant="success" @click="step--" :disabled="step <= 1">{{
    step
  }}</BButton>
  <section v-if="GetSteps">
    <p>{{ currentStep.text }}</p>
    <img :src="`src/assets/stepsBilder/${Image}`" alt="Steg" />
    <div v-if="Video">
      <a :href="currentStep.video">Watch Video</a>
    </div>
  </section>
  <BButton
    variant="success"
    @click="step++"
    :disabled="step >= recipe.instructions.length"
    >{{ step }}</BButton
  >
</template>
