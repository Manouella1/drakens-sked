<script setup>
import { ref } from "vue";
import ChatBubble from "./ChatBubble.vue";
</script>

<template>
  <div class="gloves">
    <img
      class="kitchengloves"
      src="../assets/bilder/kitchenglovespng.png"
      alt=""
    />
  </div>
  <ChatBubble></ChatBubble>
  <img class="drake" src="../assets/bilder/drake-clear-kitchen.png" alt="" />
</template>

<style scoped>
.gloves {
  /* display: flex;
  justify-content: center;
  align-items: center; */
  margin-bottom: 2em;
}
.kitchengloves {
  max-width: 20vw;
  margin-left: 2.5em;
}
.drake {
  border-image-repeat: no-repeat;
  max-width: 100vw;
}
</style>
