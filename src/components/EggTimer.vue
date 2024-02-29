<script setup>
  import { ref, watch, onUnmounted } from 'vue'
  import { vOnClickOutside } from '@vueuse/components'

  const minutes = ref(0)
  const timeLeft = ref(0)
  const isRunning = ref(false)
  let intervalId = null

  const modal = ref(false)
  function closeModal() {
    modal.value = false
  }

  const startTimer = () => {
    if (minutes.value > 0 && !isRunning.value) {
      timeLeft.value = minutes.value * 60 // Konvertera minuter till sekunder
      isRunning.value = true
      intervalId = setInterval(() => {
        if (timeLeft.value > 0) {
          timeLeft.value--
        } else {
          stopTimer()
          playSound() // Spela upp ljud
        }
      }, 1000)
    }
  }

  const pauseTimer = () => {
    clearInterval(intervalId)
    isRunning.value = false
  }

  const resumeTimer = () => {
    isRunning.value = true
    intervalId = setInterval(() => {
      if (timeLeft.value > 0) {
        timeLeft.value--
      } else {
        stopTimer()
        playSound() // Spela upp ljud
      }
    }, 1000)
  }

  const stopTimer = () => {
    clearInterval(intervalId)
    isRunning.value = false
  }
  const playSound = () => {
    const sound = new Audio('https://assets.codepen.io/4175254/timer-alarm.mp3') // Lägg till URL till din ringsignalsljudfil
    sound.play()
  }
  watch(timeLeft, (newValue) => {
    if (newValue <= 0 && isRunning.value.false) {
      stopTimer()
      playSound()
    }
  })
  const resetTimer = () => {
    clearInterval(intervalId)
    minutes.value = 0
    timeLeft.value = 0
    isRunning.value = false
  }
  onUnmounted(() => {
    clearInterval(intervalId)
  })
</script>
<template>
  <h1>hellooo</h1>
  <img
    @click="modal = true"
    src="../assets/bilder/klocka.png"
    alt=""
    class="klocka"
  />
  <div v-if="modal" v-on-click-outside="closeModal" class="klocka">
    <div v-if="!isRunning && !timeLeft">
      <input type="number" v-model="minutes" placeholder="Minuter" min="0" />
      <button @click="startTimer">Start</button>
    </div>
    <div v-else>
      <p>Tid kvar: {{ timeLeft }} sekunder</p>
      <button @click="isRunning ? pauseTimer() : resumeTimer()">
        {{ isRunning ? 'Stoppa' : 'Fortsätt' }}
      </button>

      <button @click="resetTimer">Återställ timer</button>
      <button class="button small" title="Close" @click="modal = false">
        𝖷
      </button>
    </div>
  </div>
</template>
<style>
  .klocka {
    width: 8rem;
    cursor: pointer;
  }
</style>
