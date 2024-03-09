<script>
  import MemoryGame from '../components/Memory.vue'

  export default {
    components: {
      MemoryGame
    },
    methods: {
      goBack() {
        this.$router.push({ name: 'Games' }) // Navigera tillbaka till Games-view
      }
    }
  }
</script>

<template>
  <!-- <button @:click="goBack" class="goBack"></button> -->
  <h1>Memory Spel</h1>
  <div class="post-it sticky taped">
    <p>
      Spela Memory där du ska hitta 2 likadana kort för att få en matchning.<br />Hitta
      2 likadana kort och försök slå ditt rekord med färre klick.
    </p>
  </div>

  <div class="container2">
    <MemoryGame />
  </div>
</template>

<style scoped>
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

  h1 {
    text-align: center;
    font-size: 50px;
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
  p {
    text-align: center;
    margin: 0;
    font-family: 'Patrick Hand';
    font-size: 25px;
  }

  .container2 {
    margin-bottom: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 1em;
  }
</style>
