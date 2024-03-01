<script setup>
  import { ref } from 'vue'

  const name = ref(null), // användarens namn
    phrasesStart = ref([
      'Vad ska vi laga för smarrigt idag, ',
      '',
      'Visste du ',
      '',
      'Vad är du sugen på idag, ',
      'Hur mår du idag, ',
      'Hejsan hoppsan '
    ]), // Början på fraser
    phrasesEnd = ref([
      '?',
      ', visste du att drakar har bra luktsinne?',
      ', att drakar älskar att laga mat?',
      ', när jag är hungrig lyser min mage som eld',
      '?',
      '?',
      '!'
    ]), // Slutet på fraser
    randomPhraseStart = ref(null), // Slumpad startfras
    randomPhraseEnd = ref(null) // Slumpad slutfras

  // hämtar användarens namn
  name.value = localStorage.getItem('name')
  if (name.value === null) {
    name.value = 'kompis'
  }

  // Genererar slumpad fras
  let x = Math.floor(Math.random() * phrasesStart.value.length)
  randomPhraseStart.value = phrasesStart.value[x]
  randomPhraseEnd.value = phrasesEnd.value[x]
</script>

<template>
  <div>
    <h1>
      {{ randomPhraseStart }}
      <span style="color: #219c56">{{ name }}</span>
      {{ randomPhraseEnd }}
    </h1>
    <img
      class="drake"
      src="../assets/bilder/drake-vinkar-halv.png"
      alt="Bild på drake"
    />
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
