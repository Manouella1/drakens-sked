<!-- <script>
export default {
  name: "Footer",
  data: () => ({
      links: [
        'Home',
        'About Us',
        'Team',
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
      footerText: "Copyright DrakensSked"
    }
  },
}
</script>

<template>
  <footer>
    <p> {{ footerText }}</p>
  </footer>
</template>

<style scoped>
  footer {
    background-color: green;
    padding: 10px;
    text-align: center;
    margin-top: 10em;
  }
</style>
