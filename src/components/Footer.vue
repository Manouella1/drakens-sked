<script>
  export default {
    data() {
      return {
        footerText: 'Drakens sked'
      }
    }
  }
</script>
<template>
  <footer class="fixed-bottom">
    <div class="text-center">
      <b> &copy; Site created by {{ footerText }}</b>
      || Om ni har frågor eller funderingar -
      <router-link class="link" to="/contact">
        <BButton id="button" variant="success"> Kontakta oss! </BButton>
      </router-link>
    </div>
  </footer>
</template>
<style>
  footer {
    /* align-items: center;
    background-color: #219c56;
    color: white;
    display: flex;
    min-height: 100px;
    justify-content: space-evenly;
    padding: 1em; */
    align-items: center;
    background-color: #219c56;
    color: white;
    display: flex;
    min-height: 30px;
    justify-content: space-evenly;
    padding: 1em;
    max-height: 10%;
    width: 100%;
    /* position: absolute; */
    font-size: 1rem;
  }

  #button {
    margin: 0.5em;
  }
</style>
