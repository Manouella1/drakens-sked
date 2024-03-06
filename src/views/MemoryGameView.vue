<script>
 import MemoryGame from '../components/Memory.vue'

export default {
  components: {
    MemoryGame
  },
 methods: {
   goBack (){
    this.$router.push({ name: 'Games' }) // Navigera tillbaka till Games-view
   },
  }
}
</script>

<template>
<button @:click="goBack" class="goBack">Tillbaka till Spel</button>
<div class="container">
<h1>Memory Spel</h1>
<p>Spela Memory där du ska hitta 2 likadana kort för att få en matchning.<br />Hitta 2 likadana kort och försök slå ditt rekord med färre klick.</p>
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
    margin: 0;
  }
  .container {
  display: inline-block;
  margin-top: 30px;
  font-size: 22px;
  background-color: #219c56ee;
  color: white;
  border-radius: 50px;
  padding: 20px;
  max-width: vh;
}
.container2 {
  margin-bottom: 0px;
}
.goBack {
  width: 150px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 20px;
  color: rgb(252, 252, 252);
  background-color: rgb(25, 177, 25);
  margin-left: 30px;
}
</style>
