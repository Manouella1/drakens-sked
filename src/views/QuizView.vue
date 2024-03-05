<script setup>
  // Quiz om Kolhydrater, fett, protein, fibrer.

  import { ref, computed } from 'vue'
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
  // import chocolate from '../assets/quizBilder/chocolate.png'
  // import cookie from '../assets/quizBilder/cookie.png'
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

  // En array med objekt som innehåller frågorna
  const questions = ref([
    {
      question: 'Välj det som innehåller främst kolhydrater?',
      answer: 0, //index till rätt svar i answers-arrayn
      options: [
        {
          text: 'Bröd',
          image: bread // image source for correct answer
        },
        {
          text: 'Chilli',
          image: chilli // image source for incorrect option
        },
        {
          text: 'Ägg & Bacon',
          image: egg // image source for incorrect option
        },
        {
          text: 'Korv',
          image: korv // image source for incorrect option
        }
      ],
      selected: null // Här samlas svaren  som användaren har valt
    },

    {
      question: 'Vad är fett?',
      answer: 1,
      options: [
        {
          text: 'Broccoli',
          image: broccoli // image source for correct answer
        },
        {
          text: 'Smör',
          image: butter // image source for incorrect option
        },
        {
          text: 'Kiwi.',
          image: kiwi // image source for incorrect option
        },
        {
          text: 'Gurka',
          image: gurka // image source for incorrect option
        }
      ],
      selected: null // Här samlas svaren  som användaren har valt
    },

    {
      question: 'Vad är fibrer?',
      answer: 2,
      options: [
        {
          text: 'Glass',
          image: icecream // image source for correct answer
        },
        {
          text: 'Blomma',
          image: blomma // image source for incorrect option
        },
        {
          text: 'Havregryn fullkorn',
          image: havregryn // image source for incorrect option
        },
        {
          text: 'Sockervadd',
          image: cottonCandy // image source for incorrect option
        }
      ],
      selected: null // Här samlas svaren  som användaren har valt
    },

    {
      question: 'Vad är protein?',
      answer: 3,
      options: [
        {
          text: 'Godis',
          image: candy // image source for correct answer
        },
        {
          text: 'Tårta',
          image: cake // image source for incorrect option
        },
        {
          text: 'Äpple',
          image: apple // image source for incorrect option
        },
        {
          text: 'Kött',
          image: meat // image source for incorrect option
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

  // Bild animationer när sidan laddas
  ;(function () {
    window.onload = () => {
      const obj = document.querySelector('#gallery')
      const time = 10000
      function animStart() {
        if (obj.classList.contains('active') == false) {
          obj.classList.add('active')
          setTimeout(() => {
            animEnd()
          }, time)
        }
      }
      function animEnd() {
        obj.classList.remove('active')
        obj.offsetWidth
      }
      document.addEventListener('scroll', function () {
        // scroll or scrollend
        animStart()
      })
      window.addEventListener('resize', animStart)
      animStart()
    }
  })()
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
          class="`option ${ getCurrentQuestion.selected == index ? index == getCurrentQuestion.answer ? 'correct' : 'wrong' : '' } ${ getCurrentQuestion.selected != null && index != getCurrentQuestion.selected ? 'disabled' : '' }`"
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

    <button @click="NextQuestion" :disabled="!getCurrentQuestion.selected">
      {{
        // Om vi är på sista frågan = slut annars kollar vi om getCurrentQuestion är null och om det är null = 'välj ett svar', annars kan man klicka på nästa fråga.
        getCurrentQuestion.index == questions.length - 1
          ? 'Avsluta Quiz'
          : getCurrentQuestion.selected == null
          ? 'Välj ett svar'
          : 'Nästa fråga'
      }}
    </button>
  </section>

  <section v-else>
    <div class="bubble bubble-bottom-left">
      <h3>Du har svarat på alla frågor!</h3>
      <p>Du fick {{ score }}/{{ questions.length }} poäng.</p>
    </div>
  </section>

  <img class="draken" :src="currentImage" alt="Draken" />
</template>

<style lang="scss" scoped>
  /* Importerar in en google font 'Patrick Hand' */
  @import url('https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap');

  .draken {
    width: 70%;
  }

  /* Chat bubble */
  .bubble {
    position: relative;
    font-family: sans-serif;
    font-size: 18px;
    line-height: 24px;
    margin: 1em auto;
    max-width: 700px;
    background: #fff;
    border-radius: 40px;
    padding: 24px;
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
    width: 400px;
    font-family: 'Patrick Hand';
  }
  .post-it {
    display: table;
    margin: 5em auto 0;
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

  .note {
    -webkit-box-shadow: #ddd 0px 1px 2px;
    position: relative;
    background-color: #f4f39e;
    border-color: #dee184;
    text-align: center;
    margin: 1.5em auto;
    padding: 1.5em 1em;
    -webkit-box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
    -moz-box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
    -webkit-transform: rotate(2deg);
    -moz-transform: rotate(2deg);
    -o-transform: rotate(2deg);
    -ms-transform: rotate(2deg);
    transform: rotate(2deg);
    width: 250px;
    font-family: 'The Girl Next Door', cursive; /*originally with brain flower font*/
    font-size: 1em;
  }
  .note:after {
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
    margin: auto;
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
  [type='radio']:checked + .radioImg {
    outline: 6px solid blue;
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
    max-width: 100vw;
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

  @media (min-width: 800px) {
    #gallery {
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    }
  }
</style>
