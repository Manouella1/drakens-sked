<script>
export default {
  mounted() {
    const receptId = this.$route.params.receptId
    const step = this.$route.params.step
    //use receptId and step for take information related with the instructions
    console.log('mounted', receptId, step)
  },
}
</script>
<template>
  <h1>Gör så här : PLAY INFO STEP BY STEP</h1>
  {{ receptId }}
  {{ step }}
</template>
<style></style>
