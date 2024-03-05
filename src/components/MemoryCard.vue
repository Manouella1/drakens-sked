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

.flipped .card-inner {
  transform: rotateY(180deg);
}

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
</style>
