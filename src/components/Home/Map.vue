<script setup>
import Room from "./Room.vue"
</script>

<template>
  <section>
    <div id="map">
      <Room />
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  width: 60%;
  height: 60%;

  display: flex;
  justify-content: center;
  place-items: center;

  background-color: rgba(255, 255, 255, 0.4);

  #map {
    width: 90%;
    height: 90%;

    display: grid;
    grid-template-columns: repeat(30, 1fr);
    grid-template-rows: repeat(20, 1fr);

    background-color: #d3fff3;
  }
}
</style>
