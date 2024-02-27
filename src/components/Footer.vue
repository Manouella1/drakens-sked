<!-- <script>
export default {
  name: "Footer",
  data: () => ({
      links: [
        'Home',
        'About Us',
        'Contact Us',
      ],
    }),
}
</script>
<template>
<div class="block latestPostBlock">
  <container>
    <footer class="bg-grey-lighten-1">
    <row justify="center" no-gutters>
      <btn
        v-for="link in links"
        :key="link"
        color="white"
        variant="text"
        class="mx-2"
        rounded="xl"
      >
        {{ link }}
      </btn>
      <col class="text-center mt-4" cols="12">
    </row>
  </footer>
  </container>
</div>
</template>
<style scoped></style> -->
<!-- Översta koden är en footer med lite stil och länkar om jag lyckas fixa -->
<script>
  export default {
    data() {
      return {
        footerText: 'Drakens sked',
        footer: null
      }
    },

    methods: {
      navigateToContact() {}
    }
  }
</script>

<template>
  <!-- Footer BOOSTRAP-->
  <footer>
    <!--  class="text-center text-white fixed-bottom"
    style="background-color: #242525d0"
  >
    //-- Grid container titel/komentar
    <div class="container pb-0">
      // Section: CTA titel/kommentar
      <section id="to-comments">
        <p class="d-flex justify-content-center align-items-center">
          <span class="me-3">Please if you have further questions...</span>
          <button
            data-mdb-ripple-init
            type="button"
            class="btn btn-outline-light btn-rounded"
            @click="toggleCommentsSection"
          >
            Contact Us!
          </button>
        </p>
      </section>
      // Section: CTA titel/kommentar
    </div>
    Grid container -->

    <div
      class="text-center p-3"
      style="background-color: rgba(0, 128, 0, 0.906)"
    >
      <span v-html="footer"></span>
      <a
        ><b> &copy; Site created by{{ footerText }}</b></a
      >
      <span class="me-3, text-white">
               ||       Om ni har frågor eller funderingar?! </span
      >

      <button
        data-mdb-ripple-init
        type="button"
        class="btn btn-outline-light btn-rounded"
        @click="toggleCommentsSection"
      >
        Kontakta oss!
      </button>
    </div>
  </footer>
</template>

<style scoped>
  footer {
    margin-top: 10em;
    color: white;
  }
  /* footer {
  margin-top: 15em;
} */
</style>
