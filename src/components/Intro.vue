<script setup>
import { ref } from 'vue'
import ChatBubble from './ChatBubble.vue'
</script>

<template>
  <img
    class="kitchengloves"
    src="../assets/bilder/kitchenglovespng.png"
    alt=""
  />
  <ChatBubble></ChatBubble>
  <img class="drake" src="../assets/bilder/drake-clear-kitchen.png" alt="" />
</template>

<style>
.kitchengloves {
  max-width: 40vw;
}
.drake {
  border-image-repeat: no-repeat;
  max-width: 100vw;
}
body {
  margin: 0;
  padding: 0;
  background-color: red;
  border: solid, red;
}
</style>
