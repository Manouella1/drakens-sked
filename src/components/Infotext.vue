<script setup>
  import {ref} from 'vue'

  const name = ref(null), // användarens namn
    phrasesStart = ref([
      'Undrar du över något är det bara att fråga ',
      'Visste du att Jag ska hjälpa dig på bästa sätt ',
      'Du ska veta att du kan fråga om vad du vill ',
    ]), // Början på fraser
    phrasesEnd = ref([
      '',
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
  </div>
</template>
