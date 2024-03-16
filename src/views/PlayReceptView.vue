<script>
  import EggTimer from '../components/EggTimer.vue'
  export default {
    components: {
      EggTimer
    },
    props: {
      instructions: {
        type: Array,
        required: true
      }
    },
    emits: ['handlePlayReceptBack'],
    data() {
      return {
        receptId: '1', // Hardcoded value for testing
        step: 'step1' // Hardcoded value for testing
      }
    },
    beforeRouteLeave(to, from, next) {
      this.receptId = to.params.receptId
      this.step = to.params.step
      console.log('beforeRouteUpdate', this.receptId, this.step)
      next()
    },

    mounted() {
      // console.log('mounted', this.receptId, this.step) // for testing
      this.setupPageInteraction()
    },
    methods: {
      goBack() {
        this.$router.go(-1) // uses the router to go back

        this.$emit('handlePlayReceptBack')
      },
      setupPageInteraction() {
        let $index = 0
        let pages = document.getElementsByClassName('page')
        let zIndex = pages.length

        for (let i = 0; i < pages.length; i++) {
          pages[i].style['z-index'] = zIndex
          zIndex -= 1
          pages[i].addEventListener('click', function () {
            $index++
            this.setAttribute('style', 'z-index:' + $index.toString())
            if (this.classList.contains('right')) {
              this.classList.remove('right')
              this.classList.add('left')
            } else {
              this.classList.remove('left')
              this.classList.add('right')
            }
          })
        }
      }
    }
  }
</script>

<template>
  <main class="container">
    <header>
      <h1>
        Gör så här:
        <span class="sub-text"
          >-- Tryck på bilder inne på stegsidan för att navigera mellan
          sidorna--</span
        >
      </h1>
    </header>
    <div class="container-book">
      <!-- div space to show the half of the book -->
      <div class="half" />

      <ul>
        <div class="half">
          <li v-for="instruction in instructions" :key="instruction.step">
            <div class="page right">
              <h2>Steg: {{ instruction.step }}</h2>
              <img
                class="img-recept"
                :src="`src/assets/stepsBilder/${instruction.image}`"
              />
              <p>{{ instruction.text }}</p>

              <a
                v-if="instruction.video"
                :href="instruction.video"
                target="_blank"
                >Watch Video</a
              >
            </div>
          </li>
        </div>
      </ul>
    </div>

    <BButton variant="success" @click="goBack">Gå tillbaka till recept</BButton>
  </main>
  <div class="EggTimer">
    <EggTimer class="EggTimer" />
  </div>
</template>

<style scoped>
  .EggTimer {
    margin-top: 29em;
    margin-bottom: 1em;
  }

  .half img {
    max-height: 200px;
  }

  ul {
    list-style: none;
  }

  .sub-text {
    font-size: 1rem;
  }
  header {
    margin-bottom: 2rem;
  }

  /* Book layout idea taken from CodePen : https://codepen.io/ml394/pen/LBjqBE */

  .container-book {
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    font-size: 1.5rem;
  }
  .half:nth-child(1) {
    justify-self: right;
  }
  .half:nth-child(2) {
    justify-self: left;
  }

  .page {
    background: white;
    cursor: pointer;
    margin: auto;
    position: absolute;
    /* position on the dom */
    top: 30%;
    left: 48.5%;
    /* size page */
    width: 20rem;
    height: 30rem;
    border: 1px solid black;
    padding: 2.6rem;
    transition: transform 2s;
    font-size: 1rem;
  }

  .page.left h2,
  .page.left p {
    color: transparent;
  }
  .page.left {
    transform: rotateY(179deg) translateX(340px);
    background-image: url(../assets/drake-animationV2.gif);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
  }
  .page.left .img-recept,
  .page.left a {
    display: none;
  }
  .page.right {
    transform: rotateY(0deg) translateX(0px);
  }

  .page.left::before {
    content: '\2190'; /* arrow */
    position: absolute;
    top: 50%;
    left: 1rem; /* position arrow*/
    font-size: 40px; /* Size arrow */
    transform: translateY(-50%);
    z-index: 10;
  }

  /* Media query for screens smaller than 600px (adjust the value as needed) */
  @media (max-width: 600px) {
    .EggTimer {
      margin: auto;
      margin-bottom: 1em;
    }
    .container-book {
      grid-template-columns: 1fr;
    }

    .page {
      /* position on the dom */
      top: 19rem;
      left: 3.5rem;
      /* size page */
      width: 18.75rem;
      height: 30rem;
      padding: 1.2rem;
      font-size: 1.2rem;
    }
    .page.left {
      /* adjust space between page rightand page left */
      transform: rotateY(179deg) translateX(310px);
    }
    main {
      margin-bottom: 40rem;
    }
    .page.left {
      background-image: none;
    }
  }

  @media (min-width: 1200px) {
    .EggTimer {
      margin-top: 30em;
      margin-bottom: 1em;
    }
    .page {
      /* position on the dom */
      top: 24%;
      left: 46%;
      /* size page */
      width: 20rem;
      height: 30rem;
    }
  }
  @media (min-width: 2000px) {
    .page {
      /* position on the dom */
      top: 15rem;
      left: 55%;
      /* size page */
      width: 28.75rem;
      height: 36rem;
      font-size: 1.2rem;
    }
    header h1 {
      font-size: 2.5rem;
    }
    .sub-text {
      font-size: 1.2rem;
    }
    .page.left {
      /* adjust space between page rightand page left */
      transform: rotateY(179deg) translateX(500px);
    }
    .EggTimer {
      margin-top: 37em;
      margin-bottom: 1em;
    }
  }

  /* Får du detta nu
  @media (min-width: 601px) {
  } */
</style>
