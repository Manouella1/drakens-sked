<script setup>
  import { ref } from 'vue'

  const name = ref(null) // användarens namn

  // hämtar användarens namn
  name.value = localStorage.getItem('name')
  if (name.value === null) {
    name.value = 'kompis'
  }
</script>

<template>
  <div>
    <h1>
      Vad ska vi laga för smarrigt idag,
      <span style="color: #219c56">{{ name }}</span
      >?
    </h1>
    <img class="drake" src="../assets/bilder/drake-vinkar-halv.png" alt="" />
  </div>
</template>

<style scoped>
  div {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: auto 1em;
  }

  h1 {
    text-align: center;
  }

  img {
    max-width: 30%;
  }

  @media (max-width: 500px) {
    h1 {
      font-size: 1.2em;
    }
  }
</style>
