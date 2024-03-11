<script>
  import MemoryCard from './MemoryCard.vue'
  export default {
    name: 'MemoryGame',
    components: {
      MemoryCard
    },
    data() {
      return {
        cards: [],
        flippedCards: [],
        totalTry: 0,
        mainCards: [
          { id: 1, value: '🥦', matched: false, flipped: false },
          { id: 2, value: '🥦', matched: false, flipped: false },
          { id: 3, value: '🥬', matched: false, flipped: false },
          { id: 4, value: '🥬', matched: false, flipped: false },
          { id: 5, value: '🌭', matched: false, flipped: false },
          { id: 6, value: '🌭', matched: false, flipped: false },
          { id: 7, value: '🥪', matched: false, flipped: false },
          { id: 8, value: '🥪', matched: false, flipped: false },
          { id: 9, value: '🧀', matched: false, flipped: false },
          { id: 10, value: '🧀', matched: false, flipped: false },
          { id: 11, value: '🥗', matched: false, flipped: false },
          { id: 12, value: '🥗', matched: false, flipped: false },
          { id: 13, value: '🍅', matched: false, flipped: false },
          { id: 14, value: '🍅', matched: false, flipped: false },
          { id: 15, value: '🥕', matched: false, flipped: false },
          { id: 16, value: '🥕', matched: false, flipped: false }
          // { id: 17, value: '🥚', matched: false, flipped: false },
          // { id: 18, value: '🥚', matched: false, flipped: false },
          // { id: 19, value: '🥒', matched: false, flipped: false },
          // { id: 20, value: '🥒', matched: false, flipped: false }

          // Lägga till fler rader om vi vill fylla sidan mer.
        ]
      }
    },

    methods: {
      shuffleCards() {
        this.cards = [...this.mainCards] // Starta om kort till mainCards
        for (let i = this.cards.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1))
          ;[this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]]
        }
      },

      flipCard(index) {
        if (this.flippedCards.length < 2 && !this.cards[index].flipped) {
          this.cards[index].flipped = true
          this.flippedCards.push(index)

          if (this.flippedCards.length === 2) {
            this.checkMatch()
          }
        }
      },
      checkMatch() {
        const [index1, index2] = this.flippedCards
        if (this.cards[index1].value === this.cards[index2].value) {
          setTimeout(() => {
            this.cards[index1].matched = true
            this.cards[index2].matched = true
          }, 500)
        } else {
          setTimeout(() => {
            this.cards[index1].flipped = false
            this.cards[index2].flipped = false
          }, 500)
        }
        this.totalTry++

        this.flippedCards = []
      },
      restartGame() {
        this.cards.forEach((card) => {
          card.flipped = false
          card.matched = false
        })

        this.flippedCards = []
        this.shuffleCards()
        this.totalTry = 0
      }
    },

    mounted() {
      this.shuffleCards()
    },
    computed: {
      isGameComplete() {
        return (
          this.mainCards.length ===
          this.mainCards.filter((card) => card.matched).length
        )
      }
    }
  }
</script>

<template>
  <div class="memory-game">
    <div class="try">Antal : {{ totalTry }}</div>
    <div v-if="isGameComplete" class="game-complete-message">Bra spelat</div>
    <div class="cards-grid">
      <MemoryCard
        v-for="(card, index) in cards"
        :key="index"
        :card="card"
        @click="flipCard(index)"
      />
    </div>
    <div class="buttonRow">
      <router-link to="/games">
        <button class="bn29" @click="goBack">Tillbaka till Spel</button>
      </router-link>
      <button @click="restartGame" class="bn29">Starta om</button>
    </div>
  </div>
</template>

<style scoped>
  .memory-game {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .cards-grid {
    display: grid;
    grid-template-columns: repeat(4, 0fr);
    gap: 10px;
    place-items: center;
  }

  .card {
    width: 100px;
    height: 100px;
    background-color: #219c56ee;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 2em;
  }

  .flipped {
    transform: rotateY(180deg);
  }

  .game-complete-message {
    text-align: center;
    margin-bottom: 20px;
    font-weight: bold;
    font-size: 1.5em;
    color: green;
  }

  /* .style-btn {
    border-radius: 5px;
    padding: 6px 10px;
    border: none;
    background-color: rgb(53, 151, 51);
    color: white;
    margin-top: 20px;
  } */

  .try {
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 5px;
    margin: 20px 0px;
  }
  /* Button styles */
  .buttonRow {
    text-align: center;
    margin-bottom: 2em;
  }

  .bn29 {
    border: none;
    padding: 0.6em 2em;
    margin-left: 2em;
    margin-top: 1em;
    margin-bottom: 1em;
    outline: none;
    color: white;
    font-style: 1.2em;
    font-family: 'Patrick Hand';
    letter-spacing: 2px;
    position: relative;
    z-index: 1;
    cursor: pointer;
    background: none;
    text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.45);
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
  @media screen and (max-width: 600px) {
    .card {
      width: 65px;
      height: 65px;
    }
  }

  .memory-game {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  @media screen and (min-width: 900px) {
    .card {
      width: 120px;
      height: 120px;
    }
    .memory-game {
      height: 100vh;
    }
  }
</style>
