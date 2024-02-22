<!-- src/components/CardRecept.vue -->
<template>
  <!-- Receiving props from parent component -->
  <BCard
    :title="title"
    :img-src="`src/assets/${image}`"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem"
    @mouseover="enlargeImage"
    @mouseout="resetImage"
    @click="handleClick"
  >
    <BCardText>
      <div class="flex">
        <!-- time -->
        <p>{{ prepTime }}</p>
        <!-- Kategorier  -->
        <p>- {{ category }} -</p>
        <!-- we still need to add iton the json file -->
        <p>
          {{ iconColor }} <span>{{ iconImage }} </span>
        </p>
        <!-- Nivå  -->
        <p>{{ level }}</p>
      </div>
    </BCardText>

    <!-- Lägg till knapp för att lägga till i favoriter -->
<<<<<<< HEAD
    <BButton pill @click.stop="addToFavorites" variant="outline-secondary">❤️</BButton>
    <!-- Visar bekräftelsemeddelande när receptet läggs till i favoriter -->
    <span v-if="showConfirmation" class="confirmation">{{ confirmationMessage }}</span>
=======
    <BButton pill @click.stop="addToFavorites" variant="outline-secondary"
      >❤️</BButton
    >
    <span v-if="showConfirmation" class="confirmation">{{
      confirmationMessage
    }}</span>
>>>>>>> 183d78eef9cee313dc79b009fcf653ab8c554e57
  </BCard>
</template>

<script>
  export default {
    props: [
      'title',
      'prepTime',
      'category',
      'level',
      'image',
      'id',
      'iconColor',
      'iconImage'
    ],
    data() {
      return {
        showConfirmation: false,
        isFavorite: false, // Boolean för att spåra om receptet är en favorit
        confirmationMessage: '' // Meddelande för bekräftelse
      }
    },
    methods: {
      enlargeImage(event) {
        // Enlarge the image when hovered
        event.currentTarget.style.transform = 'scale(1.2)'
        event.currentTarget.style.cursor = 'pointer'
      },

      resetImage(event) {
        // Reset the image when mouseout
        event.currentTarget.style.transform = 'scale(1)'
        event.currentTarget.style.cursor = 'default'
      },
      handleClick() {
        // Emit the 'selectRecept' event with the meal ID
        this.$emit('selectRecept', this.id)
      },
      addToFavorites() {
        // Toggle isFavorite status
        this.isFavorite = !this.isFavorite

<<<<<<< HEAD
      // Uppdatera bekräftelsemeddelande beroende på isFavorite-status
      this.confirmationMessage = this.isFavorite ? ' Receptet har lagts till i dina favoriter!' : ' Receptet har tagits bort från dina favoriter!';
=======
        // Uppdatera bekräftelsemeddelande beroende på isFavorite-status
        this.confirmationMessage = this.isFavorite
          ? 'Receptet har lagts till i dina favoriter!'
          : 'Receptet har tagits bort från dina favoriter!'
>>>>>>> 183d78eef9cee313dc79b009fcf653ab8c554e57

        // Emit the 'toggleFavorite' event with the recipe ID and its status
        this.$emit('toggleFavorite', {
          id: this.id,
          isFavorite: this.isFavorite
        })

<<<<<<< HEAD
      localStorage.setItem("id", this.id)
      // ToDo set.item localstoreage
      // "isFavorite": this.isFavorite
      // Visa bekräftelsemeddelandet
      this.showConfirmation = true;
=======
        // Visa bekräftelsemeddelandet
        this.showConfirmation = true
>>>>>>> 183d78eef9cee313dc79b009fcf653ab8c554e57

        // Dölj bekräftelsemeddelandet efter 3 sekunder
        setTimeout(() => {
          this.showConfirmation = false
        }, 3000)
      }
    }
  }
</script>

<style scoped>
  .flex {
    display: flex;
    justify-content: space-between;
  }

  .confirmation {
    color: green;
    font-size: 14px;
  }
</style>
