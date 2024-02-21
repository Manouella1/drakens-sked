<script>
export default {
  props: {
    instructions: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      receptId: '1', // Hardcoded value for testing
      step: 'step1', // Hardcoded value for testing
    }
  },
  beforeRouteUpdate(to, from, next) {
    this.receptId = to.params.receptId
    this.step = to.params.step
    console.log('beforeRouteUpdate', this.receptId, this.step)
    next()
  },

  // just to check if works
  // created() {
  //   console.log('created', this.receptId, this.step)
  // },
  mounted() {
    console.log('mounted', this.receptId, this.step)
  },
  methods: {
    goBack() {
      this.$router.go(-1) // uses the router to go back
      //this.$emit('play-recept-back') // Not working
    },
  },
}
</script>

<template>
  <h1>Gör så här: PLAY INFO STEP BY STEP</h1>
  {{ receptId }}
  {{ step }}

  <ul>
    <li v-for="instruction in instructions" :key="instruction.step">
      {{ instruction.text }}
    </li>
  </ul>

  <BButton variant="outline-secondary" @click="goBack">Go back recept</BButton>
</template>

<style>
/* Your styles go here */
</style>
