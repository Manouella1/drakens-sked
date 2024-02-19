<script>
export default {
  props: ['title', 'prepTime', 'category', 'level', 'image', 'id'],
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
  },
}
</script>

<template>
  <!-- Receiving props from parent component -->
  <BCard
    :title="title"
    :img-src="`src/assets/${image}`"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 17rem"
    @mouseover="enlargeImage"
    @mouseout="resetImage"
  >
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

    <!-- we can use it to add to favorite lista -->
    <BButton pill href="#" variant="outline-secondary">❤️</BButton>
  </BCard>

  <!-- without Boostrap -->

  <!--<div>
       <img :src="`src/assets/${image}`" alt="photo recept" />
    <h2>{{ title }}</h2>
    <p>time {{ prepTime }}</p>
    <p>Kategorier {{ category }}</p>
    <p>Icon</p>
    <p>Nivå {{ level }}</p>
  </div> -->
</template>

<style scoped>
.flex {
  display: flex;
  justify-content: space-between;
}
</style>
