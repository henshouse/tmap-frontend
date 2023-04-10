<script setup>
import GroundFloor from "./GroundFloor.vue"
</script>

<template>
  <section>
    <GroundFloor />
  </section>
</template>

<style scoped lang="scss">
section {
  width: 80%;
  height: 80%;

  display: flex;
  justify-content: center;
  place-items: center;

  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 15px;
}
</style>
