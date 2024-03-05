<script setup>
  // Post it lapp
</script>
<template>
  <div id="postit">
    <p>Skriv din text</p>
  </div>
</template>
<style scoped lang="scss">
  /*Handskriven stil om man vill ha*/
  @import url('https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap');

  p {
    font-family: 'Patrick Hand';
  }

  #postit {
    display: block;
    width: 350px;
    height: 350px;
    background-image: url('../assets/bilder/postit350.png');
  }
</style>
