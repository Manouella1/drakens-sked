<script>
export default {
  data() {
    return {
      value: 0,
    }
  },
  methods: {
    increment() {
      this.value++
    },
  },
}
</script>

<template>
  <h1>HOME</h1>
  <BButton @click="increment" variant="primary">{{ value }}</BButton>

  <BButton variant="primary">Primary</BButton>
  <BButton variant="secondary">Secondary</BButton>
  <BButton variant="success">Success</BButton>
  <BButton variant="danger">Danger</BButton>
  <BButton variant="warning">Warning</BButton>
  <BButton variant="info">Info</BButton>
  <BButton variant="light">Light</BButton>
  <BButton variant="dark">Dark</BButton>
</template>

<style></style>
