<script>
export default {
  props: ['title', 'prepTime', 'category', 'level', 'image'],
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
    style="max-width: 20rem"
  >
    <BCardText>
      <p>time {{ prepTime }}</p>
      <p>Kategorier {{ category }}</p>
      <p>Icon</p>
      <p>Nivå {{ level }}</p>
    </BCardText>
    <!-- <img :src="`src/assets/${image}`" alt="photo recept" />
    <h2>{{ title }}</h2>
    <p>time {{ prepTime }}</p>
    <p>Kategorier {{ category }}</p>
    <p>Icon</p>
    <p>Nivå {{ level }}</p> -->
    <BButton pill href="#" variant="outline-secondary">❤️</BButton>
  </BCard>
</template>

<style scoped>
img {
  max-height: 200px;
  width: auto;
}
</style>
