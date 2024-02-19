<script>
export default {
  props: ['title', 'prepTime', 'category', 'level', 'image'],
}
</script>

<template>
  <div>
    <img :src="`src/assets/${image}`" alt="photo recept" />
    <h2>{{ title }}</h2>
    <p>time {{ prepTime }}</p>
    <p>Kategorier {{ category }}</p>
    <p>Icon</p>
    <p>Nivå {{ level }}</p>
  </div>
</template>

<style scoped>
img {
  max-height: 200px;
  width: auto;
}
</style>
