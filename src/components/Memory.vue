<!-- Vigan Logic här -->

<script>
  export default {
    name: 'MemoryGame',
    data() {
      return {
        boxData: [
          { id: 1, value: '🐶', show: false },
          { id: 2, value: '🐱', show: false },
          { id: 3, value: '🐵', show: false },
          { id: 4, value: '🐰', show: false },
          { id: 5, value: '🦄', show: false },
          { id: 6, value: '🦂', show: false },
          { id: 7, value: '⚽️', show: false },
          { id: 8, value: '🏀', show: false },
          { id: 9, value: '🏐', show: false },
          { id: 10, value: '🐰', show: false },
          { id: 11, value: '🐵', show: false },
          { id: 12, value: '🏈', show: false },
          { id: 13, value: '🏀', show: false },
          { id: 14, value: '⚽️', show: false },
          { id: 15, value: '🐶', show: false },
          { id: 16, value: '🦄', show: false },
          { id: 15, value: '🦂', show: false },
          { id: 15, value: '🏐', show: false },
          { id: 15, value: '🐱', show: false },
          { id: 15, value: '🏈', show: false }
        ],
        currVal: null,
        result: ''
      }
    },
    methods: {
      showBox(_id, _value) {
        this.currVal = _value
        console.log('Values:', this.currVal, _value)

        this.boxData[_id].show = true
        if (this.currVal === null) {
          this.currVal = _value
        } else if (_value === this.currVal) {
          this.result = 'Great!'
          this.currVal = null
        } else {
          this.result = 'Försök igen!'
          this.boxData.map((box) => (box.show = false))
          this.currVal = null
        }
      }
    }
  }
</script>

<template>
  <h1>Memory</h1>
  <div class="gameArea">
    <!-- kanske döper denna till memory istället -->
    <h4>Senast valda kort: {{ currVal }}</h4>
    <div class="boxHolder" />
    <div class="box" v-for="(box, index) in boxData" :key="index">
      <button
        :class="box.show ? 'show' : ''"
        @click="showBox(index, box.value)"
      >
        <p v-if="!box.show">Memory Kort</p>
        <span>{{ box.value }}</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
  * {
    transition: all 0.5s;
  }

  .gameArea {
    width: 100%;
    float: left;
  }
  .boxHolder {
    display: block;
    width: 800px;
    margin: 0 auto;
  }
  .box {
    width: 200px;
    float: left;
  }
  button p {
    margin-top: 45px;
    margin-bottom: 0;
  }
  button.show p {
    margin: 0;
  }
  .box button {
    width: 100%;
    height: 100px;
    border: 2px solid #ddd;
    border-radius: 0;
  }
  .box button span {
    font-size: 50px;
    opacity: 0;
  }
</style>

<!-- <script setup>
  // Här presenterar vi våra spel
</script>

<template>
  <div />
  <div class="bubble bubble-bottom-left">
    <h1 id="Text">Vilket spel ska vi spela?</h1>
    <div>
      <button class="bubble-gum">Memory</button>
      <button class="bubble-gum">Quiz</button>
    </div>
  </div>
  <img src="../assets/bilder/drake-visar.png" alt="" />
</template>

<style scoped lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Dongle');

  #Text {
    color: #219c56;
  }

  div {
    margin-bottom: 30px;
  }

  /* Knapp styles*/
  .bubble-gum {
    margin-right: 2rem;
    // margin-left: 40px;
    margin-top: 20px;
    padding: 2.2rem;
    background: linear-gradient(to bottom right, hotpink, deeppink);
    font-family: dongle;
    font-size: 5rem;
    color: white;
    text-shadow: 0 0 8px indigo;
    transition: transform 1s, border-radius 1s;
    border: none;
    border-radius: 20px;
  }
  .bubble-gum:hover {
    cursor: pointer;
    border: 2px solid indigo;
    box-shadow: 0 0 8px aqua;
    background: linear-gradient(to right, hotpink, deeppink);
    transform: scale(1.4, 1.4);
    border-radius: 50%;
  }

  /* Pratbubblan */
  .bubble {
    margin-top: 10px;
    position: relative;
    font-family: sans-serif;
    font-size: 18px;
    line-height: 24px;
    margin: auto;
    max-width: 100vw;
    background: #fff;
    border-radius: 40px;
    padding: 50px;
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
</style> -->
