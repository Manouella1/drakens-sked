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
  <section class="TimeContainer">
    <div class="ImageAndHeader">
      <h3>Behöver du en timer?</h3>
      <img
        @click="modal = true"
        src="../assets/bilder/klocka.png"
        alt=""
        class="klocka"
      />
    </div>
    <div v-if="modal" v-on-click-outside="closeModal" class="timer">
      <div class="v-if" v-if="!isRunning && !timeLeft">
        <input
          class="Minuter"
          type="number"
          v-model="minutes"
          placeholder="Minuter"
          min="0"
        />
        <button class="bn29" @click="startTimer">Start</button>
      </div>
      <div class="v-if" v-else>
        <p>Tid kvar: {{ timeLeft }} sekunder</p>
        <div class="Button-row">
          <button
            class="bn29"
            @click="isRunning ? pauseTimer() : resumeTimer()"
          >
            {{ isRunning ? 'Stoppa' : 'Fortsätt' }}
          </button>

          <button class="bn29" @click="resetTimer">Återställ</button>
        </div>
        <button
          id="close"
          variant="success"
          class="bn29"
          title="Close"
          @click="modal = false"
        >
          𝖷
        </button>
      </div>
    </div>
  </section>
</template>
<style scoped>
  .TimeContainer {
    margin-bottom: 1em;
  }
  h3 {
    font-family: 'Luckiest Guy', 'Patrick Hand';
    color: #ee4f7a;
  }
  #close {
    border-radius: 100%;
    margin-top: 1em;
  }
  .klocka {
    width: 8rem;
    cursor: pointer;
    text-align: center;
    display: inline;
  }
  .Minuter {
    max-width: 7em;
    border-radius: 10px;
  }
  .Button-row {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .timer {
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid #ee4f7a;
    background-color: #ffebf6;
    border-radius: 20px;
    padding: 1em;
    margin-top: 0.5em;
    max-width: 20em;
    margin: auto;
  }
  .v-if {
    width: 8rem;
    cursor: pointer;
    text-align: center;
    display: inline;
  }

  .ImageAndHeader {
    margin-bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .bn29 {
    border: none;
    padding: 2px 10px;
    margin: 8px;
    font-size: 19px;
    outline: none;
    color: white;
    font-style: 1.2em;
    position: relative;
    z-index: 1;
    cursor: pointer;
    background: none;
    text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.45);
  }

  .bn29:before,
  .bn29:after {
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 10em;
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    width: 105%;
    height: 105%;
    content: '';
    z-index: -2;
    background-size: 400% 400%;
    background: linear-gradient(
      60deg,
      #f79533,
      #f37055,
      #ef4e7b,
      #a166ab,
      #5073b8,
      #1098ad,
      #07b39b,
      #6fba82
    );
  }

  .bn29:before {
    -webkit-filter: blur(7px);
    filter: blur(7px);
    -webkit-transition: all 0.25s ease;
    transition: all 0.25s ease;
    -webkit-animation: pulse 10s infinite ease;
    animation: pulse 10s infinite ease;
  }

  .bn29:after {
    -webkit-filter: blur(0.3px);
    filter: blur(0.3px);
  }

  .bn29:hover:before {
    width: 115%;
    height: 115%;
  }
</style>
