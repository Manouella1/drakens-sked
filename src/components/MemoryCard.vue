<script>
  export default {
    name: 'MemoryCard',
    props: {
      card: {
        type: Object,
        required: true
      }
    },
    methods: {
      handleClick() {
        this.$emit('click')
      }
    }
  }
</script>

<template>
  <div
    class="card"
    :class="{ flipped: card.flipped, matched: card.matched }"
    @click="handleClick"
  >
    <div class="card-inner">
      <div class="card-front" />
      <div class="card-back">{{ card.value }}</div>
      <div v-if="card.matched" class="match-text">Match</div>
    </div>
  </div>
</template>

<style scoped>
  .card {
    width: 100px;
    height: 100px;
    perspective: 1000px;
    position: relative;
  }

  .card-inner {
    width: 100%;
    height: 100%;
    transition: transform 0.5s;
    transform-style: preserve-3d;
    position: relative;
  }

  .card-front,
  .card-back {
    width: 100%;
    height: 100%;
    position: absolute;
    backface-visibility: hidden;
  }

<<<<<<< HEAD
.card-front {
  background-image: url("src/assets/bilder/head.png");
  /* Lägg till bakgrundsbild här */
  background-size: cover;
  background-position: center;
  /* background-color: rgb(20, 223, 71); */
}

.card-back {
  transform: rotateY(180deg);
  background-color: rgb(248, 168, 244);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
}
=======
  .card-front {
    background-color: lightblue;
  }

  .card-back {
    transform: rotateY(180deg);
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2em;
  }
>>>>>>> 03fadd0c53654c37467fed4852443bf8562de759

  .flipped .card-inner {
    transform: rotateY(180deg);
  }

<<<<<<< HEAD
/* .match-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1em;
  color: green;
  font-weight: bold;
  display: block;
} Säkrar så att "Matching text" visas */
=======
  /* .matched .card-inner {
  visibility: hidden;
} */

  .match-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1em;
    color: green;
    font-weight: bold;
    display: block; /* Säkrar så att "Matching text" visas */
  }
>>>>>>> 03fadd0c53654c37467fed4852443bf8562de759
</style>
