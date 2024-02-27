<script>
  export default {
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

    // just to check if works
    // created() {
    //   console.log('created', this.receptId, this.step)
    // },
    mounted() {
      console.log('mounted', this.receptId, this.step) // for testing
      this.setupPageInteraction()
    },
    methods: {
      goBack() {
        this.$router.go(-1) // uses the router to go back
        // this.$emit('handlePlayReceptBack', (this.showReceptView = true))
        this.$emit('handlePlayReceptBack') // Not working
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
    <h1>
      Gör så här: (Tap in to the text inside the step page to move the pages)
    </h1>

    <div class="container-book">
      <!-- div space to show the half of the book -->
      <div class="half"></div>

      <ul>
        <!-- Reference for develop later -->
        <!-- {{
      instructions[1].text
    }} -->
        <div class="half">
          <li v-for="instruction in instructions" :key="instruction.step">
            <div class="page right">
              <h2>step: {{ instruction.step }}</h2>
              <img :src="`src/assets/stepsBilder/${instruction.image}`" />
              <p>{{ instruction.text }}</p>
              <a :href="instruction.video" target="_blank">Watch Video</a>
              <!-- {{ instruction.video }} -->
            </div>
          </li>
        </div>
      </ul>
    </div>
    <!-- Button to turn the pages on mobile -->
    <!-- <button class="turn-page-button" @click="turnPage">Previous Page</button> -->

    <BButton variant="outline-primary" @click="goBack">Go back recept</BButton>
  </main>
</template>

<style scoped>
  img {
    max-height: 200px;
  }

  ul {
    list-style: none;
  }

  /* Style for the button to turn pages on mobile */
  /* .turn-page-button {
    display: none;
  } */

  /* Book layout idea taken from CodePen : https://codepen.io/ml394/pen/LBjqBE */

  .container-book {
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
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
    top: 17rem;
    left: 50%;
    /* size page */
    width: 320px;
    height: 480px;
    border: 1px solid black;
    padding: 24px;
    transition: transform 2s;
  }

  .page.left {
    transform: rotateY(179deg) translateX(370px);
    /* background-image: url('./assets/bilder/drake-hej.png'); */
    /* color: transparent; */
  }
  .page.right {
    transform: rotateY(0deg) translateX(0px);
  }

  /* Media query for screens smaller than 600px (adjust the value as needed) */
  @media (max-width: 600px) {
    .container-book {
      grid-template-columns: 1fr;
    }

    /* .turn-page-button {
      display: block;
      margin-top: 10px;
    } */

    .page {
      /* position on the dom */
      top: 25rem;

      left: 3.5rem;
      /* size page */
      width: 300px;
      height: 480px;
      border: 1px solid black;
      padding: 24px;
      transition: transform 2s;
    }
    .page.left {
      /* adjust space between page rightand page left */
      transform: rotateY(179deg) translateX(310px);
    }
    main {
      margin-bottom: 40rem;
    }
  }
</style>
