<script></script>

<template>
  <div class="container">
    <div class="titleText">
      <h1>Drakens Spel</h1>
      <p>WOW! Nu har du hittat in till drakens spel hörna!</p>
    </div>
    <div id="confettis">
      <div class="confetti" />
      <div class="confetti" />
      <div class="confetti" />
      <div class="confetti" />
      <div class="confetti" />
      <div class="confetti" />
      <div class="confetti" />
      <div class="confetti" />
      <div class="confetti" />
    </div>
    <div class="space" />
    <div class="bubble bubble-bottom-left">
      <h1 id="Text">Vilket spel ska vi spela?</h1>
      <div>
        <router-link name="default" :to="'/games/memory'">
          <a href="/"><button class="bn29">Memory</button></a>
        </router-link>
        <router-link to="/games/intro-quiz">
          <a href="/"><button class="bn29">Quiz</button></a>
        </router-link>
      </div>
    </div>
    <img src="../assets/bilder/drake-visar.png" alt="" />
  </div>
</template>

<style scoped lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Dongle');

  .button {
    margin: 20px;
  }

  .titleText {
    font-weight: bold;
    text-align: center;
    padding: 100px;
    font-size: 30px;
    text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.875);
  }

  h1 {
    font-size: 40px;
  }
  p {
    font-family: 'Luckiest Guy';
  }

  #Text {
    color: #ee4f7a;
    padding: 0.5em;
  }

  .container {
    align-items: center;
    display: flex;
    flex-direction: column;
    min-height: 77vh;
    background-image: url('src/assets/bilder/party.png');
    background-size: cover;
    background-position: center;
    border: 40px solid #ee4f7a;
    border-radius: 30px;
    margin-bottom: 1.5em;
  }

  .space {
    flex-grow: 1;
  }

  img {
    width: 90%;
    max-width: 500px;
  }

  /* Knapp styles*/
  .bubble-gum {
    margin-right: 2rem;
    // margin-left: 40px;
    margin-top: 20px;
    padding: 2.2rem;
    background: linear-gradient(to bottom right, hotpink, deeppink);
    font-family: 'Patrick Hand';
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
    text-align: center;
    color: #000;
    padding: 20px;
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

  /***************** KNAPP *********** */
  .bn29 {
    border: none;
    padding: 0.8em 2.5em;
    outline: none;
    color: white;
    font-style: 1.2em;
    position: relative;
    z-index: 1;
    cursor: pointer;
    background: none;
    text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.45);
    margin: 20px;
  }

  .bn29:before,
  .bn29:after {
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 10em;
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    width: 105%;
    height: 105%;
    content: '';
    z-index: -2;
    background-size: 400% 400%;
    background: linear-gradient(
      60deg,
      #f79533,
      #f37055,
      #ef4e7b,
      #a166ab,
      #5073b8,
      #1098ad,
      #07b39b,
      #6fba82
    );
  }

  .bn29:before {
    -webkit-filter: blur(7px);
    filter: blur(7px);
    -webkit-transition: all 0.25s ease;
    transition: all 0.25s ease;
    -webkit-animation: pulse 10s infinite ease;
    animation: pulse 10s infinite ease;
  }

  .bn29:after {
    -webkit-filter: blur(0.3px);
    filter: blur(0.3px);
  }

  .bn29:hover:before {
    width: 115%;
    height: 115%;
  }

  /************** Confetti *********** */

  // div element för varje confetti
  #confettis {
    overflow: hidden;
    position: absolute;
    width: 800px;
    height: 900px;
  }

  // animation för confettin
  .confetti {
    left: 50%;
    width: 16px;
    height: 16px;
    position: absolute;
    transform-origin: left top;
    animation: confetti 5s ease-in-out -2s infinite;
  }

  // animation för confettin
  .confetti {
    left: 50%;
    width: 16px;
    height: 16px;
    position: absolute;
    transform-origin: left top;
    animation: confetti 5s ease-in-out -2s infinite;
  }

  @keyframes confetti {
    0% {
      transform: rotateZ(15deg) rotateY(0deg) translate(0, 0);
    }

    25% {
      transform: rotateZ(5deg) rotateY(360deg) translate(-5vw, 20vh);
    }

    50% {
      transform: rotateZ(15deg) rotateY(720deg) translate(5vw, 60vh);
    }

    75% {
      transform: rotateZ(5deg) rotateY(1080deg) translate(-10vw, 80vh);
    }

    100% {
      transform: rotateZ(15deg) rotateY(1440deg) translate(10vw, 110vh);
    }
  }

  // delay till confettin
  .confetti:nth-child(1) {
    left: 10%;
    animation-delay: 0;
    background-color: #fc0120;
  }

  .confetti:nth-child(2) {
    left: 20%;
    animation-delay: -5s;
    background-color: #8257e6;
  }

  .confetti:nth-child(3) {
    left: 30%;
    animation-delay: -3s;
    background-color: #ffbf4d;
  }

  .confetti:nth-child(4) {
    left: 40%;
    animation-delay: -2.5s;
    background-color: #fe5d7a;
  }

  .confetti:nth-child(5) {
    left: 50%;
    animation-delay: -4s;
    background-color: #45ec9c;
  }

  .confetti:nth-child(6) {
    left: 60%;
    animation-delay: -6s;
    background-color: #f6e327;
  }

  .confetti:nth-child(7) {
    left: 70%;
    animation-delay: -2.5s;
    background-color: #f769ce;
  }

  .confetti:nth-child(8) {
    left: 80%;
    animation-delay: -2s;
    background-color: #007de7;
  }

  .confetti:nth-child(9) {
    left: 90%;
    animation-delay: -3.5s;
    background-color: #41ac81;
  }

  .confetti:nth-child(10) {
    left: 100%;
    animation-delay: -3.5s;
    background-color: #f9c4ea;
  }

  @media (max-width: 700px) {
    #Text {
      padding: 0;
    }

    .container {
      width: 700px;
      border: 20px solid rgb(206, 37, 119);
    }

    .space {
      flex-grow: 1;
    }

    img {
      width: 90%;
      max-width: 500px;
    }

    // div element för varje confetti
    #confettis {
      width: 50%;
      /* Använd en procentuell bredd för att anpassa sig till mindre skärmar */
      height: 300px;
      /* Uppdatera även höjden efter behov */
    }
  }

  @media (max-width: 600px) {
    #Text {
      padding: 0;
    }

    .container {
      width: 500px;
    }

    #confettis {
      width: 50%;
      /* Använd en procentuell bredd för att anpassa sig till mindre skärmar */
      height: 300px;
      /* Uppdatera även höjden efter behov */
    }
  }

  @media (max-width: 500px) {
    h1 {
      font-size: 30px;
    }

    #Text {
      padding: 0;
    }

    .container {
      width: 90%;
      /* Använd en procentuell bredd för att anpassa sig till mindre skärmar */
    }

    #confettis {
      width: 50%;
      /* Använd en procentuell bredd för att anpassa sig till mindre skärmar */
      height: 300px;
      /* Uppdatera även höjden efter behov */
    }

    .titleText {
      font-weight: bold;
      text-align: center;
      padding: 30px;
      font-size: 20px;
      text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.875);
    }
  }
</style>
