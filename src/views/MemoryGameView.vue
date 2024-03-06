<script>
 import MemoryGame from '../components/Memory.vue'

export default {
  components: {
    MemoryGame
  }
}
</script>

<template>
<div class="container">
<h1>Memory Spel</h1>
<p>Spela Memory där du ska hitta 2 likadana kort för att få en matchning.<br>Hitta 2 likadana kort och försök slå ditt rekord med färre klick.</p>
</div>
<div class="container2">
<MemoryGame />
</div>
</template>

<style scoped>
  h1 {
    text-align: center;
    font-size: 50px;
  }
  p {
    color: white;
    text-align: center;
  }
  .container {
  display: inline-block;
  margin-top: 30px;
  font-size: 22px;
  background-color: #219c56ee;
  color: white;
  border-radius: 50px;
  padding: 20px;
  max-width: 700px;
}
.container2 {
  margin-bottom: 0px;
}
@media (max-width: 600px) {
    .container {
      font-size: 1em;
      font-weight: normal;
    }

    .filter {
      flex-direction: column;
      margin: 0;
    }
  }
  @media (min-width: 375px) {
    .container {
      font-size: 1em;
      font-weight: normal;
    }
  }
</style>
