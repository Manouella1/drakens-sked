<script>
  export default {
    data() {
      return {
        footerText: 'Drakens sked',
        footer: null
      }
    },
    methods: {
    navigateToContact() {
    }
  }
}
</script>
<template>
  <footer>
    <div class="text-center" style="background-color: rgba(0, 128, 0, 0.906)">
      <span v-html="footer" />
      <a><b> &copy; Site created by{{ footerText }}</b></a>
      <span class="me-3, text-white"> || Om ni har frågor eller funderingar - </span>
      <button
        data-mdb-ripple-init
        type="button"
        class="btn btn-outline-light btn-rounded"
        @click="toggleCommentsSection"
      >
        <router-link class="link" to="/contact">Kontakta oss!</router-link>
      </button>
    </div>
  </footer>
</template>
<style>
  footer {
    margin-top: 10em;
    color: white;
  }
</style>
