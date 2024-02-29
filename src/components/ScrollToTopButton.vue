<template>
  <button v-if="showButton" @click="scrollToTop" class="scroll-to-top-button">
    {{ buttonText }}
  </button>
</template>

<script>
/*Scroll funktion */
export default {
  data() {
    return {
      showButton: false,
      buttonText: "^"
    };
  },
  // Lägger till en lyssnare för att hantera scrollhändelser
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  // Tar bort scrollhändelse-lyssnare
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  // Funktionen som körs när användaren scrollar
  methods: {
    handleScroll() {
      this.showButton = window.scrollY > 100;
    },
    // Funktion för att scrolla upp till toppen
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"  // Gör scrollningen smooooth~
      });
    }
  }
};
</script>

<style scoped>
.scroll-to-top-button {
  position: fixed;
  bottom: 25px;
  right: 25px;
  z-index: 999;
  background-color: #1c994a82;
  color: #fff;
  border: 2px solid #ffffffa7;
  /* Adding border to the button */
  border-radius: 30px;
  padding: 12px 20px;
  cursor: pointer;
  font-weight: bold;
  /* Making the text bold */
}

/* Efter hover */
.scroll-to-top-button:hover {
  background-color: rgba(24, 160, 67, 0.976);
  padding: 15px 20px;
}

.scroll-to-top-button:hover::before {
  content: "Scrolla till toppen";
}
</style>
