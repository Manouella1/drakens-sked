<!-- src/components/CardRecept.vue -->
<template>
  <!-- Receiving props from parent component -->
  <BCard :title="title" :img-src="`src/assets/${image}`" img-alt="Image" img-top tag="article" style="max-width: 17rem"
    @mouseover="enlargeImage" @mouseout="resetImage" @click="handleClick">
    <BCardText>
      <div class="flex">
        <!-- time -->
        <p>{{ prepTime }}</p>
        <!-- Kategorier  -->
        <p>- {{ category }} -</p>
        <!-- we still need to add iton the json file -->
        <p>Icon</p>
        <!-- Nivå  -->
        <p>{{ level }}</p>
      </div>
    </BCardText>

    <!-- Lägg till knapp för att lägga till i favoriter -->
    <BButton pill @click.stop="addToFavorites" variant="outline-secondary">❤️</BButton>
    <span v-if="showConfirmation" class="confirmation"> Receptet har lagts till i dina favoriter!</span>
  </BCard>
</template>

<script>
export default {
  props: ['title', 'prepTime', 'category', 'level', 'image', 'id'],
  data() {
    return {
      showConfirmation: false,
      isFavorite: false // Boolean för att spåra om receptet är en favorit
    };
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
      this.isFavorite = !this.isFavorite;
      // Emit the 'addToFavorites' event with the recipe ID and its status
      this.$emit('addToFavorites', { id: this.id, isFavorite: this.isFavorite });
      this.showConfirmation = true; // Show confirmation message
      setTimeout(() => {
        this.showConfirmation = false; // Hide confirmation message after 3 seconds
      }, 3000);
    },
  },
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
