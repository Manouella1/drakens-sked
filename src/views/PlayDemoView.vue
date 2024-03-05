<script setup>
  import { useRoute, useRouter } from 'vue-router'
  import meals from '../assets/data/meals.json'
  import { ref, watch } from 'vue'

  const route = useRoute()
  const router = useRouter()
  const recipe = ref(null)
  const step = ref(null)
  const currentStep = ref(null)
  const Image = ref(null)
  const Video = ref(false)

  GetId(Number(route.params.id))
  // Number(route.params.step))
  function GetId(id) {
    for (let j = 0; j < meals.recipes.length; j++) {
      if (meals.recipes[j].id === id) {
        recipe.value = meals.recipes[j]
        console.log(recipe.value)
      }
    }
  }

  step.value = Number(route.params.step)
  GetSteps(step.value)

  function GetSteps(step) {
    for (let j = 0; j < recipe.value.instructions.length; j++) {
      if (recipe.value.instructions[j].step === step) {
        console.log('steg: ' + recipe.value.instructions[j].step)
        console.log(recipe.value.instructions[j].text)
        currentStep.value = recipe.value.instructions[j]
        console.log('hallå?' + currentStep.value.text)
        Image.value = recipe.value.instructions[j].image
        console.log('image?', Image.value)
        Video.value = false
        if (
          currentStep.value.video !== null &&
          currentStep.value.video !== undefined
        ) {
          Video.value = true
          console.log(currentStep.value.video)
        }
      }
    }
  }
  function GoBack() {
    router.push(`/recepts/${recipe.value.id}`)
  }

  watch(
    () => step.value,
    () => {
      router.push(`/recepts/${recipe.value.id}/${step.value}`)
      GetSteps(step.value)
    }
  )
</script>
<template>
  hej
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
