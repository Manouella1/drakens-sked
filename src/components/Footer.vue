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
  <footer>
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
    align-items: center;
    background-color: #219c56;
    color: white;
    display: flex;
    min-height: 11vh;
    justify-content: space-evenly;
    padding: 1em;
    width: 100%;
    font-size: 1rem;
  }

  #button {
    margin: 0.5em;
  }
</style>
