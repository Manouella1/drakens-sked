<!-- Pratbubbla till draken på förstasidan (intro) -->
<script setup>
import { ref, watch } from 'vue'
const input = ref(false),
  name = ref(null)

function sendName() {
  input.value = true
}

watch(input, () => {
  console.log(`Namn har ändrats till ${name.value}`)
})
</script>

<template>
  <div class="bubble bubble-bottom-left">
    <!-- if-sats som hanterar om namn finns sparat (variabeln "input" ändras till true när namn finns sparat) -->
    <div v-if="input === false">
      Hej, välkommen till mitt kök! Här kan vi laga mat tillsammans som riktiga
      kockar och ha kul på vägen. Men vi börjar med ditt namn. Vad heter du?
      <input v-model="name" type="text" />
      <input @click="sendName" type="button" value="Skicka" />
    </div>
    <div v-else>
      Välkommen {{ name }}! Är du redo för en spännande dag i köket? Nu kör vi!
    </div>
  </div>
</template>

<style>
.bubble {
  position: relative;
  font-family: sans-serif;
  font-size: 18px;
  line-height: 24px;
  margin: auto;
  max-width: 90vw;
  background: #fff;
  border-radius: 40px;
  padding: 24px;
  text-align: center;
  color: #000;
}

.bubble-bottom-left:before {
  content: '';
  width: 0px;
  height: 0px;
  position: absolute;
  right: 30px;
  bottom: -24px;

  /*the border expands from left to right designing a triangle */
  border-left: 24px solid #fff;
  /*the border expands from right to left designing a transparent triangle */
  /*setting the angle of the pin */
  border-right: 25px solid transparent;
  /*the border expands from the top to the bottom designing a   triangle */
  border-top: 12px solid #fff;
  /*the border expands from the bottom to the top designing a transparent triangle */
  /*setting the width of the pin */
  border-bottom: 20px solid transparent;
}
</style>
