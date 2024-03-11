<script setup>
  // Quiz om Kolhydrater, fett, protein, fibrer.

  import { ref, computed } from 'vue'

  // Drakens raktioner
  import Disappointed from '../assets/bilder/drake-besviken.png'
  import ThumbsUp from '../assets/bilder/drake-thumbs-up.png'
  import Draken from '../assets/bilder/drake.png'

  //****** Quiz Bilder ********
  import apple from '../assets/quizBilder/apple.png'
  import bread from '../assets/quizBilder/bread.png'
  import broccoli from '../assets/quizBilder/broccoli.png'
  import butter from '../assets/quizBilder/butter.png'
  import cake from '../assets/quizBilder/cake.png'
  import candy from '../assets/quizBilder/candy.png'
  import chilli from '../assets/quizBilder/chilli.png'
  import cottonCandy from '../assets/quizBilder/cotton-candy.png'
  import egg from '../assets/quizBilder/egg.png'
  import gurka from '../assets/quizBilder/gurka.png'
  import icecream from '../assets/quizBilder/icecream.png'
  import kiwi from '../assets/quizBilder/kiwi.png'
  import korv from '../assets/quizBilder/korv.png'
  import meat from '../assets/quizBilder/meat.png'
  import havregryn from '../assets/quizBilder/havregryn.png'
  import blomma from '../assets/quizBilder/blomma.png'

  const currentImage = ref(Draken)

  // En array med objekt som innehåller frågorna, Options (svars-alternativ) arrayen innehåller objekt med text och bild.
  const questions = ref([
    {
      question: 'Välj det som innehåller främst kolhydrater?',
      answer: 0, //index till rätt svar i options-arrayn
      options: [
        {
          text: 'Bröd',
          image: bread
        },
        {
          text: 'Chilli',
          image: chilli
        },
        {
          text: 'Ägg & Bacon',
          image: egg
        },
        {
          text: 'Korv',
          image: korv
        }
      ],
      selected: null // Här samlas svaren  som användaren har valt
    },

    {
      question: 'Välj det som innehåller främst fett?',
      answer: 1,
      options: [
        {
          text: 'Broccoli',
          image: broccoli
        },
        {
          text: 'Smör',
          image: butter
        },
        {
          text: 'Kiwi.',
          image: kiwi
        },
        {
          text: 'Gurka',
          image: gurka
        }
      ],
      selected: null // Här samlas svaren  som användaren har valt
    },

    {
      question: 'Välj det som innehåller främst fibrer?',
      answer: 2,
      options: [
        {
          text: 'Glass',
          image: icecream
        },
        {
          text: 'Blomma',
          image: blomma
        },
        {
          text: 'Havregryn fullkorn',
          image: havregryn
        },
        {
          text: 'Sockervadd',
          image: cottonCandy
        }
      ],
      selected: null // Här samlas svaren  som användaren har valt
    },

    {
      question: 'Välj det som innehåller främst protein?',
      answer: 3,
      options: [
        {
          text: 'Godis',
          image: candy
        },
        {
          text: 'Tårta',
          image: cake
        },
        {
          text: 'Äpple',
          image: apple
        },
        {
          text: 'Kött',
          image: meat
        }
      ],
      selected: null // Här samlas svaren  som användaren har valt
    }
  ])

  const quizCompleted = ref(false)
  const currentQuestion = ref(0)

  // Poängräknare
  const score = computed(() => {
    let value = 0
    questions.value.map((q) => {
      if (q.selected == q.answer) {
        value++ // Om man har valt svaret så ökar poängen
      }
    })
    return value
  })

  // vilken fråga vi är på från questions arrayen^^
  const getCurrentQuestion = computed(() => {
    let question = questions.value[currentQuestion.value]
    question.index = currentQuestion.value
    return question
  })
  // --------- Uppdatering av bild----------------
  // hämtar den aktuella frågan från questions arrayen baserat på indexet currentQuestion.value. questions är en reaktiv referens som innehåller en lista över frågor, och currentQuestion är en reaktiv referens som håller indexet för den nuvarande frågan. Användningen av .value är nödvändig för att komma åt det underliggande värdet
  const updateImageForAnswer = () => {
    // Om den nuvarande frågan är vald, alltså inte null
    const current = questions.value[currentQuestion.value]
    if (current.selected !== null) {
      // Kollar om valda svaret är korrekt, svaret ska vara heltal och inte sträng.
      const isCorrect = parseInt(current.selected, 10) === current.answer
      // Då visas antingen ThumbsUp bilden eller Disappointed bilden
      currentImage.value = isCorrect ? ThumbsUp : Disappointed
      // text i pratbubblan
    }
  }

  const SetAnswer = (e) => {
    // Använder inte getCurrentQuestion för att vi vill ändra questions variabeln
    questions.value[currentQuestion.value].selected = e.target.value // target är inputen som vi ändrar på
    e.target.value = null // Nollställer när man går in på sidan igen
    updateImageForAnswer()
  }

  const NextQuestion = () => {
    // Om man är på sista frågan ska man inte kunna gå vidare till nästa fråga
    if (currentQuestion.value < questions.value.length - 1) {
      currentQuestion.value++
      // Återställ bilden till den neutrala "Draken" mellan frågor
      currentImage.value = Draken
    } else {
      quizCompleted.value = true
      currentImage.value = Draken
    }
  }

  // Bild animationer när sidan laddas, skrollas, eller resizar skärmen för att ge känsla av att "köket skakar"
  function ShakeKitchen() {
    window.onclick = function () {
      // Din befintliga logik för att hantera scroll, resize, och den initiala animationen
      const obj = document.querySelector('#gallery')
      const time = 10000

      function animStart() {
        if (!obj.classList.contains('active')) {
          obj.classList.add('active')
          setTimeout(() => {
            animEnd()
          }, time)
        }
      }

      function animEnd() {
        obj.classList.remove('active')
        // Denna rad tvingar en reflow. alltså att sidan laddas om (endast flr styling purpose, inte bäst för prestanda om det är tunga grejer som ska laddas)
        void obj.offsetWidth
      }

      window.onscroll = animStart
      window.onclick = animStart
      window.ontouchend = animStart

      // Lägg till lyssnare för 'resize'
      window.addEventListener('resize', animStart)

      // Kalla på animStart för att köra animationen initialt vid laddning
      animStart()
    }
  }

  ShakeKitchen()
</script>

<template>
  <h1>Quiz</h1>

  <section class="quiz" v-if="!quizCompleted">
    <div class="quiz-info">
      <div class="post-it sticky taped">
        <h3 class="">{{ getCurrentQuestion.question }}</h3>
        <!-- Vår computed score funktion som håller koll på poäng man fått av antal möjliga -->
        <p id="message" class="score">
          Poäng {{ score }}/{{ questions.length }}
        </p>
      </div>
    </div>

    <div class="options">
      <!-- Loopar igenom valen i vår nuvarande fråga. Binder klassen till template strings som säger att om indexet av valet man gjort är rätt eller fel. Annars får vi ingenting. De val som inte är valda ska vara disabled. -->
      <!-- <div class="photos"> -->
      <div id="gallery">
        <label
          v-for="(option, index) in getCurrentQuestion.options"
          :key="index"
          :class="`option ${
            getCurrentQuestion.selected == index
              ? index == getCurrentQuestion.answer
                ? 'correct'
                : 'wrong'
              : ''
          } ${
            getCurrentQuestion.selected != null &&
            index != getCurrentQuestion.selected
              ? 'disabled'
              : ''
          }`"
        >
          <!-- :value = index får vi från vår v-for loop -->

          <!-- VALEN INOM LABEL-->
          <!-- <div class="polaroid"> -->
          <figure>
            <input
              type="radio"
              :name="getCurrentQuestion.index"
              :value="index"
              v-model="getCurrentQuestion.selected"
              :disabled="getCurrentQuestion.selected"
              @change="SetAnswer"
            />
            <!----- Bilder från alternativen------>

            <img class="radioImg" :src="option.image" alt="Option image" />

            <figcaption>{{ option.text }}</figcaption>
          </figure>
        </label>
      </div>
    </div>

    <!-- disabled attribut för om vi inte har en fråga vald så kan vi inte gå vidare -->
    <div class="button-container">
      <button
        class="bn29"
        @click="NextQuestion"
        :disabled="!getCurrentQuestion.selected"
      >
        {{
          // Om vi är på sista frågan = slut annars kollar vi om getCurrentQuestion är null och om det är null = 'välj ett svar', annars kan man klicka på nästa fråga.
          getCurrentQuestion.index == questions.length - 1
            ? 'Avsluta Quiz'
            : getCurrentQuestion.selected == null
            ? 'Välj ett svar'
            : 'Nästa fråga'
        }}
      </button>
    </div>
  </section>

  <section v-else>
    <div class="bubble bubble-bottom-left">
      <h3>Du har svarat på alla frågor!</h3>
      <p id="message">Du fick {{ score }}/{{ questions.length }} poäng.</p>
      <router-link to="/games/intro-quiz">
        <button class="bn29" id="bnEnd">Kör igen!</button></router-link
      >
      <router-link to="/games">
        <button class="bn29" id="bnEnd">Spel menyn</button></router-link
      >
    </div>
  </section>

  <img class="draken" :src="currentImage" alt="Draken" />
</template>

<style lang="scss" scoped>
  /* Importerar in en google font 'Patrick Hand' */
  @import url('https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap');
  h3 {
    font-family: 'Patrick Hand';
  }

  .button-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .draken {
    width: 20%;
    position: fixed;
    bottom: 25px;
    right: 25px;
    animation: swing 2s ease infinite alternate;
    --angle: -9deg;
    z-index: 2;
  }

  /* Chat bubble */
  .bubble {
    position: relative;
    font-family: sans-serif;
    font-size: 18px;
    line-height: 24px;
    margin: 1em auto;

    max-width: 700px;
    max-height: 300px;
    background: #fff;
    border-radius: 40px;
    padding: 24px;
    text-align: center;
    color: #000;
    margin-top: 5em;
    margin-bottom: 3em;
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

  /* Post it H3 med frågan & score */
  .sticky {
    -webkit-box-shadow: #ddd 0px 1px 2px;
    position: relative;
    background-color: #f4f39e;
    border-color: #dee184;
    color: #47576b;
    text-align: center;
    margin: 2.5em 0px;
    padding: 1.5em 1em;
    -webkit-box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
    -moz-box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
    width: 360px;
    font-family: 'Patrick Hand';
  }
  .post-it {
    display: table;
    margin: 6.3em auto 1em;
  }
  .taped {
    /* display: table-cell;*/
    text-align: center;
    vertical-align: middle;
  }
  .sticky.taped:after {
    display: block;
    content: '';
    position: absolute;
    width: 110px;
    height: 30px;
    top: -21px;
    left: 30%;
    border: 1px solid #fff;
    background: rgba(254, 254, 254, 0.6);
    -webkit-box-shadow: 0px 0 3px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0px 0 3px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 0 3px rgba(0, 0, 0, 0.1);
  }

  /***** Note Content *****/

  .question {
    text-align: center;
    padding-top: 70px;
    padding-left: 30px;
    padding-right: 30px;
    margin-bottom: 10px;
    font-family: 'Patrick Hand';
    font-size: 40px;
  }

  #message {
    text-align: center;
    color: #c40808;
    font-family: 'Patrick Hand';
    font-size: 30px;
    margin-top: 1em;
  }

  h1 {
    position: absolute;
    margin-top: 20px;

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
  #bnEnd {
    margin-bottom: 13px;
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
    margin-bottom: 20em;
    margin-right: 1em;
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

  /****** Styles för radioknapparna *******/

  /* HIDE RADIO */
  [type='radio'] {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* IMAGE STYLES */
  [type='radio'] + .radioImg {
    cursor: pointer;

    background-color: white;
    padding: 0.5rem;
  }

  /* CHECKED STYLES */
  /* [type='radio']:checked + .radioImg {
    //   outline: 6px solid blue;
    // }*/

  .correct {
    background-color: green;
    outline: 10px solid green;
    border-radius: 8px;
  }

  .wrong {
    background-color: red;
    outline: 8px solid red;
    border-radius: 8px;
  }

  /*label {
        max-width: 20%;
      } */

  .radioImg {
    cursor: pointer;
    background-color: white;
    padding: 6px;
  }

  /***** * Polaroid style * *******/

  p {
    line-height: 1;
  }
  a {
    color: crimson;
    text-decoration: none;
  }
  .radioImg {
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    pointer-events: none;
  }
  #gallery {
    position: relative;
    left: calc(-1 * var(--adjust-size));
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 20px;
    max-width: 83vw; /* DESKTOP VIEW */
    padding: 20px;
    -webkit-perspective: 0;
    perspective: 0;
  }
  #gallery figure:nth-child(7n) {
    --duration: 1s;
    --pin-color: crimson;
  }
  #gallery figure:nth-child(7n + 1) {
    --duration: 1.8s;
    --pin-color: hotpink;
  }
  #gallery figure:nth-child(7n + 2) {
    --duration: 1.3s;
    --pin-color: magenta;
  }
  #gallery figure:nth-child(7n + 3) {
    --duration: 1.5s;
    --pin-color: orangered;
  }
  #gallery figure:nth-child(7n + 4) {
    --duration: 1.1s;
    --pin-color: darkorchid;
  }
  #gallery figure:nth-child(7n + 5) {
    --duration: 1.6s;
    --pin-color: deeppink;
  }
  #gallery figure:nth-child(7n + 6) {
    --duration: 1.2s;
    --pin-color: mediumvioletred;
  }
  #gallery figure:nth-child(3n) {
    --angle: 3deg;
  }
  #gallery figure:nth-child(3n + 1) {
    --angle: -3.3deg;
  }
  #gallery figure:nth-child(3n + 2) {
    --angle: 2.4deg;
  }
  #gallery figure:nth-child(odd) {
    --direction: alternate;
  }
  #gallery figure:nth-child(even) {
    --direction: alternate-reverse;
  }
  #gallery figure {
    --angle: 3deg;
    --count: 5;
    --duration: 1s;
    --delay: calc(-0.5 * var(--duration));
    --direction: alternate;
    --pin-color: red;

    position: relative;
    display: inline-block;
    margin: var(--adjust-size);
    padding: 1.5em;
    padding-bottom: 2em;
    border-radius: 5px;
    box-shadow: 0 7px 8px rgba(0, 0, 0, 0.4);
    width: 100%;
    height: auto;
    text-align: center;
    background-color: ghostwhite;
    background-image: url('https://images.unsplash.com/photo-1629968417850-3505f5180761?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTMzMjQ3ODJ8&ixlib=rb-4.0.3&q=80&w=500');
    background-size: cover;
    background-position: center;
    background-blend-mode: multiply;

    transform-origin: center 0.22rem;
    will-change: transform;
    break-inside: avoid;
    overflow: hidden;
    outline: 1px solid transparent;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
  #gallery.active figure {
    animation-duration: var(--duration), 1.5s;
    animation-delay: var(--delay),
      calc(var(--delay) + var(--duration) * var(--count));
    animation-timing-function: ease-in-out;
    animation-iteration-count: var(--count), 1;
    animation-direction: var(--direction), normal;
    animation-fill-mode: both;
    animation-name: swing, swingEnd;
  }
  #gallery figure:after {
    position: absolute;
    top: 0.22rem;
    left: 50%;
    width: 0.7rem;
    height: 0.7rem;
    content: '';
    background: var(--pin-color);
    border-radius: 50%;
    box-shadow: -0.1rem -0.1rem 0.3rem 0.02rem rgba(0, 0, 0, 0.5) inset;
    filter: drop-shadow(0.3rem 0.15rem 0.2rem rgba(0, 0, 0, 0.5));
    transform: translateZ(0);
    z-index: 2;
  }
  figure .radioImg {
    aspect-ratio: 1 /1;
    width: 100%;
    object-fit: cover;
    display: block;
    border-radius: 5px;
    margin-bottom: 10px;
    z-index: 1;
  }

  figure {
    padding-left: 2em;
    padding-right: 2em;
    padding-bottom: 4em;
    cursor: pointer;
  }

  figure figcaption {
    font-family: 'Patrick Hand';
    font-size: 2rem;
    font-weight: 400;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    z-index: 1;
  }
  figure h2 {
    color: crimson;
    font-size: 22px;
  }
  figure p {
    font-size: 17px;
  }
  figure small {
    font-size: 12px;
  }
  figure > div {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @keyframes swing {
    0% {
      transform: rotate3d(0, 0, 1, calc(-1 * var(--angle)));
    }
    100% {
      transform: rotate3d(0, 0, 1, var(--angle));
    }
  }
  @keyframes swingEnd {
    to {
      transform: rotate3d(0, 0, 1, 0deg);
    }
  }
  #info {
    position: relative;
    text-align: center;
    z-index: 1;
  }
  #info a {
    font-size: 1.1rem;
  }

  /************************* */
  /************** * MOBIL ANPASSAT ******************
  ***************************************/
  @media (min-width: 486px) and (max-width: 873px) {
    .draken {
      width: 50%;
      margin-right: -6em;
    }
  }
  @media (min-width: 350px) and (max-width: 785px) {
    .draken {
      width: 40%;
      margin-right: -5.5em;
    }
    #gallery {
      grid-template-columns: repeat(auto-fit, minmax(115px, 1fr));
    }
    #gallery figure {
      padding: 0.5em;
    }
    h1 {
      margin-top: 3em;
      font-size: 2em;
    }
    figure figcaption {
      font-size: 1em;
    }
    .bn29 {
      margin-top: 0.2em;
      margin-bottom: 3em;
      padding: 0.2em 2em;
    }
  }

  @media (min-width: 785px) and (max-width: 1030px) {
    h1 {
      margin-top: 1.5em;
      margin-bottom: 1em;
    }
    .draken {
      width: 30%;
      margin-right: -5.2em;
    }
    figure figcaption {
      font-size: 1.3em;
    }
  }
  @media (min-width: 1030px) and (max-width: 1106px) {
    h1 {
      margin-top: 1.3em;
      margin-bottom: 1em;
    }
    .post-it {
      margin: 7em auto 1em;
    }
  }

  @media (min-width: 639px) and (max-width: 819px) {
    .draken {
      animation: swing 2s ease infinite alternate;
      --angle: -9deg;
      width: 30%;
      z-index: 20;
      bottom: 2.5em;
      margin-right: -5em;
    }
  }

  /*@media (min-width: 441px) and (max-width: 639px) {
    .draken {
      width: 40%;
      z-index: 20;
      bottom: 4em;
      margin-right: -5.5em;
    }
  }*/
</style>
