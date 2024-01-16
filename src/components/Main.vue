<script setup>
import Nav from "./Nav.vue"
import Map from "./Map.vue"
</script>

<template>
  <main>
    <Nav />
    <Map />
  </main>
</template>

<style scoped lang="scss">
main {
  height: 92vh;
  display: flex;
  flex-direction: row;
}
</style>
