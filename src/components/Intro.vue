<script setup>
import { ref } from "vue";
</script>

<template>
  <img
    class="kitchengloves"
    src="../assets/bilder/kitchenglovespng.png"
    alt=""
  />
  <div class="bubble bubble-bottom-left" contenteditable>
    Type any text here and the bubble will grow to fit the text no matter how
    many lines.
  </div>
  <img class="drake" src="../assets/bilder/drake-clear-kitchen.png" alt="" />
</template>

<style>
.kitchengloves {
  height: 400px;
}
.drake {
  border-image-repeat: no-repeat;
}
body {
  margin: 0;
  padding: 0;
  background-color: red;
  border: solid, red;
}

/* Chatt bubblan */

.bubble {
  position: relative;
  font-family: sans-serif;
  font-size: 18px;
  line-height: 24px;
  width: 300px;
  background: #fff;
  border-radius: 40px;
  padding: 24px;
  text-align: center;
  color: #000;
}

.bubble-bottom-left:before {
  content: "";
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
