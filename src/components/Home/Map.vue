<script setup>
import Room from "./Room.vue"
</script>

<template>
  <section>
    <img src="E:\Projects\TMap\tmap-frontend\src\assets\výkres.svg" alt="" />
    <div id="map">
      <Room :colstart="57" :colend="61" :rowstart="-8" :rowend="-4" />
      <Room :colstart="57" :colend="61" :rowstart="-19" :rowend="-11" />
      <Room :colstart="57" :colend="61" :rowstart="-24" :rowend="-19" />
      <Room :colstart="57" :colend="61" :rowstart="-26" :rowend="-24" />
      <Room :colstart="57" :colend="61" :rowstart="-31" :rowend="-26" />
      <Room :colstart="57" :colend="61" :rowstart="-35" :rowend="-31" />
      <Room :colstart="57" :colend="61" :rowstart="-39" :rowend="-35" />

      <Room :colstart="44" :colend="46" :rowstart="-39" :rowend="-37" />
      <Room :colstart="44" :colend="46" :rowstart="-37" :rowend="-33" />
      <Room :colstart="44" :colend="46" :rowstart="-33" :rowend="-32" />
      <Room :colstart="44" :colend="46" :rowstart="-32" :rowend="-31" />
      <Room :colstart="44" :colend="46" :rowstart="-31" :rowend="-28" />
      <Room :colstart="44" :colend="46" :rowstart="-27" :rowend="-26" />
    </div>
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

  #map {
    width: 90%;
    height: 90%;

    display: grid;
    grid-template-columns: repeat(60, 1fr);
    grid-template-rows: repeat(50, 1fr);
    grid-gap: 3px;

    background-color: rgba(211, 255, 243, 0.4);
  }

  img {
    height: 100px;
    width: 100px;
  }
}
</style>
