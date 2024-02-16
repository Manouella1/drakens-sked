<script>
import meals from '../assets/meals.json'

export default {
  data() {
    return {
      meals: null,
    }
  },
}
</script>

<template>
  <h1>ALL RECEPTS</h1>
  <ol>
    <li v-for="meal in meals">{{ meal.title }}</li>
  </ol>
</template>

<style></style>
