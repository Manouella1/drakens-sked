<script setup>
  // Intro till Quiz
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import drakeImage from '../assets/bilder/drake.png'
  import drakeThumbsUpImage from '../assets/bilder/drake-thumbs-up.png'

  // Info texten
  const showInfo = ref(true)
  const showSecondText = ref(false)
  const currentImage = ref(drakeImage)
  //Navigering
  const router = useRouter()

  function ButtonClick() {
    currentImage.value = drakeThumbsUpImage
    showInfo.value = false
    showSecondText.value = true

    console.log(
      'Visas något?',
      currentImage.value,
      showInfo.value,
      showSecondText.value
    )
    // Visa den nya texten och bilden i 2 sekunder innan navigering
    setTimeout(() => {
      // Efter 2 sekunder navigeras man till quizzet
      router.push('/games/quiz')
    }, 2000)
  }
</script>
<template>
  <div class="container">
    <h1>Quiz</h1>
    <h2 id="h2">Introduktion till näringsämnen</h2>
    <div class="bubble bubble-bottom-left" v-if="showInfo">
      <!-- Info om frågorna som kommer -->
      <h3>Proteiner - Byggklossar 💪🏼</h3>
      <p>
        Tänk dig att protein är som LEGO-bitarna i din kropp. De hjälper till
        att bygga och reparera saker, som dina muskler efter att du sprungit
        runt och lekt. Mat som kyckling, fisk, bönor och mjölk är fulla av
        protein!
      </p>

      <h3>Kolhydrater - Bränsle ⚡️</h3>
      <p>
        Kolhydrater är din kropps superenergi! De är som bränsle för din bil,
        men istället för bilen, ger de energi till dig så att du kan leka, tänka
        och göra allt du vill. Pasta, bröd, frukt och ris har gott om
        kolhydrater. De omvandlas till glukos, som är ett annat ord för socker i
        kroppen
      </p>

      <h3>Fetter - Långtidsenergi ⚡️⚡️</h3>
      <p>
        Fett är också energi, men det är som en backup när du behöver extra
        kraft. Det är som en skattkista av energi som din kropp använder när den
        behöver mer bränsle. Men kom ihåg, precis som med skatter, är det bäst
        att bara använda lite. Nötter, oljor och avokado har hälsosamma fetter.
      </p>

      <h3>Fibrer - Kroppens Städhjälp 🌱</h3>
      <p>
        Tänk dig att fibrer är som din kropps egna städhjälp. De hjälper till
        att hålla din mage glad och frisk genom att rensa ut allt skräp som
        samlas därinne. Det är lite som att använda en sopkvast för att hålla
        ditt rum rent, men för din mage. Fibrer gör att du känner dig mätt
        längre och håller dina magresor mjuka och regelbundna.
      </p>

      <p>
        Du kan hitta dessa superhjältefibrer i saker som helkornsbröd,
        havregryn, frön, frukter som äpplen och bananer, och även i grönsaker
        som morötter och broccoli.
      </p>

      <p>
        Så, tänk på fibrer som din kropps bästa vän för att hålla saker rena och
        röra sig smidigt. Glöm inte att dricka mycket vatten när du äter mycket
        fibrer! Det hjälper till att hålla allt i gång precis som det ska.
      </p>

      <h3 id="Text">Känner du dig redo?</h3>
      <div>
        <!-- <router-link to="/games/quiz"> -->
        <button class="bn29" @click="ButtonClick">Ja, nu kör vi!</button>
        <!-- </router-link> -->
      </div>
    </div>

    <div class="bubble bubble-bottom-left" v-if="showSecondText">
      <div class="space" />
      <p>Det här kommer gå galant! 🤩</p>
    </div>

    <img :src="currentImage" alt="Draken" />
  </div>
</template>

<style scoped>
  .container {
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  .space {
    flex-grow: 1;
  }
  #h2 {
    font-size: 2em;
  }
  h1,
  h2 {
    --k: 0;
    place-self: center;
    background: linear-gradient(
      100deg,
      #f79533,
      #f37055,
      #ef4e7b,
      #a166ab,
      #5073b8,
      #1098ad,
      #07b39b,
      #6fba82
    );
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    font: 900 clamp(0.875em, 7.25vw, 5em) 'Luckiest Guy';
    filter: url(#f);
    text-align: center;
    text-transform: uppercase;
    /* needs support for animating custom properties */
    /* Firefox not quite there yet, but it's coming */
    animation: k 4s linear infinite;
  }

  @keyframes k {
    to {
      --k: 1;
    }
  }

  @keyframes k {
    to {
      --k: 1;
    }
  }
  img {
    width: 90%;
    max-width: 500px;
  }

  /* Pratbubblan */
  .bubble {
    margin-top: 10px;

    position: relative;
    font-family: 'Patrick Hand';
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
  h3 {
    font-size: 2.2em;
  }
  .bn29 {
    border: none;
    padding: 0.8em 2.5em;
    outline: none;
    color: white;
    font-style: 1.2em;
    position: relative;
    z-index: 1;
    cursor: pointer;
    border-radius: 20px;
    background: none;
    text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.45);
    margin-top: 2.6em; /* DESKTOP VIEW */
    margin: auto;
    margin-top: 1em;
    font-size: 1.7em;
    font-family: 'Patrick Hand';
    letter-spacing: 2px;
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
</style>
