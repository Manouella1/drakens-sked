<script setup>
  import ChatBubble from './ChatBubble.vue'
</script>

<template>
  <div class="container">
    <div class="gloves">
      <img
        class="kitchengloves"
        src="../assets/bilder/kitchenglovespng.png"
        alt=""
      />
    </div>
    <ChatBubble />
    <img class="drake" src="../assets/bilder/drake-clear-kitchen.png" alt="" />
  </div>
</template>

<style scoped>
  .container {
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  .gloves {
    /* display: flex;
  justify-content: center;
  align-items: center; */
    margin-bottom: 2em;
  }
  .kitchengloves {
    display: none;
    max-width: 100px;
    margin-left: 2.5em;
  }
  .drake {
    border-image-repeat: no-repeat;
    margin-bottom: 0;
    max-width: 500px;
    width: 90%;
  }
</style>
