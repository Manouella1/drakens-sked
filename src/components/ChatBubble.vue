<!-- Pratbubbla till draken på förstasidan (intro) -->
<script setup>
  import { ref, watch } from 'vue'
  const input = ref(false),
    name = ref(null)
  const isChecked = ref(false) // Checkbox ljud knappen
  const isSpeaking = ref(true)
  // if-sats som kollar om det finns ett värde lagrat i localStorage och sparar det i name.value
  if (localStorage.getItem('name') !== null) {
    input.value = true
    name.value = localStorage.getItem('name')
  }
  function sendName() {
    if (name.value === null) {
      name.value = 'kompis'
    }
    input.value = true
  }
  // när input-värdet ändras så lagras name.value i localStorage
  watch(input, () => {
    localStorage.setItem('name', name.value)
  })
  //********************************************************************** */
  //************** */ ALLA FUNKTIONER NEDANFÖR ÄR FÖR TALANDET *****************
  //******************************************************************** */
  // if-sats som kollar om det finns ett värde lagrat i localStorage och sparar det i name.value
  function toggleSpeech() {
    isSpeaking.value = !isSpeaking.value // Växlar talstatus
    if (isSpeaking.value) {
      // Startar tal baserat på namnvärdet
      speakText()
    } else {
      speechSynthesis.cancel() // Stoppar allt tal
    }
  }
  function speakText() {
    const text =
      name.value === null
        ? `Hej välkommen till mitt kök! Här kan vi laga mat tillsammans som riktiga
      kockar och ha kul på vägen. Men vi börjar med ditt namn. Vad heter du?`
        : `Välkommen ${name.value}! Är du redo för en spännande dag i köket? Nu kör vi!?`
    speak(text)
  }
  function speak(text) {
    if (isSpeaking.value) {
      // Kontrollerar om tal är aktiverat innan det startar
      console.log('speaking text')
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = 'sv-SE'
      speechSynthesis.speak(utterance)
    }
  }
  // Startar tal automatiskt baserat på namnvärdet vid inladdning
  if (name.value === null || name.value) {
    speakText()
  }
</script>
<template>
  <div class="bubble bubble-bottom-left">
    <!-- if-sats som hanterar om namn finns sparat (variabeln "input" ändras till true när namn finns sparat) -->
    <div v-if="input === false">
      Hej, välkommen till mitt kök! Här kan vi laga mat tillsammans som riktiga
      kockar och ha kul på vägen. Men vi börjar med ditt namn. Vad heter du?
      <b-form-input
        class="inputs"
        v-model="name"
        placeholder="Skriv in ditt namn"
      />
      <BButton class="inputs" @click="sendName" variant="success"
        >Skicka</BButton
      >
    </div>
    <div v-else>
      Välkommen {{ name }}! Är du redo för en spännande dag i köket? Nu kör vi!
      <div>
        <BButton
          class="inputs"
          @click="$router.push('recepts')"
          variant="success"
          >Gå till recepten!</BButton
        >
      </div>
    </div>
    <div class="button-wrapper">
      <!-- Denna checkbox styr ljudet och vilken svg ikon som visas när ljudet är på och av -->
      <input
        type="checkbox"
        id="toggle-icon"
        class="toggle-btn"
        v-model="isChecked"
        @click="toggleSpeech"
      />
      <label for="toggle-icon" class="icon">
        <!-- Första ikonen visas när isChecked är false -->
        <svg v-if="!isChecked" class="icon-up" viewBox="0 0 24 24">
          <path
            d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z"
          />
        </svg>
        <!-- Andra ikonen visas när isChecked är true -->
        <svg v-else class="icon-down" viewBox="0 0 24 24">
          <path
            d="M12,4L9.91,6.09L12,8.18M4.27,3L3,4.27L7.73,9H3V15H7L12,20V13.27L16.25,17.53C15.58,18.04 14.83,18.46 14,18.7V20.77C15.38,20.45 16.63,19.82 17.68,18.96L19.73,21L21,19.73L12,10.73M19,12C19,12.94 18.8,13.82 18.46,14.64L19.97,16.15C20.62,14.91 21,13.5 21,12C21,7.72 18,4.14 14,3.23V5.29C16.89,6.15 19,8.83 19,12M16.5,12C16.5,10.23 15.5,8.71 14,7.97V10.18L16.45,12.63C16.5,12.43 16.5,12.21 16.5,12Z"
          />
        </svg>
      </label>
    </div>
  </div>
</template>
<style scoped>
  .inputs {
    margin: 0.5em auto 0;
  }
  .bubble {
    position: relative;
    font-family: sans-serif;
    font-size: 18px;
    line-height: 24px;
    margin: 1em auto;
    max-width: 700px;
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
  /*********************************************/
  /* !!!!!!!!!      SOUND BUTTON      !!!!!!! */
  /*******************************************/
  .button-wrapper {
    position: relative;
    width: 50px;
    height: 50px;
  }
  .toggle-btn {
    opacity: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    cursor: pointer;
    z-index: 2;
  }
  .icon {
    position: absolute;
    width: 100%;
    height: 100%;
    transition: transform 0.5s ease;
    z-index: 1;
  }
  .icon-down {
    z-index: 0;
  }
  input[type='checkbox']:checked ~ label .icon-up {
    transform: translateY(100%);
  }
  input[type='checkbox']:not(:checked) ~ label .icon-down {
    z-index: 1;
  }
</style>
