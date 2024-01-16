<script setup></script>

<template>
  <header>
    <ul>
      <!-- <img src="tmap-logo.svg" alt="" /> -->
      <i class="fa-solid fa-map-location-dot fa-2xl"></i>
      <h1>TMap</h1>
    </ul>
    <ul>
      <i class="fa-solid fa-house fa-lg"></i>
      <i class="fa-sharp fa-solid fa-circle-user fa-2xl"></i>
    </ul>
  </header>
</template>

<style scoped lang="scss">
header {
  display: flex;
  width: 100%;
  height: 8vh;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0 5%;
  background-color: var(--white);
  border-bottom: 4px solid var(--main-color);

  ul {
    display: flex;
    gap: 3rem;
    align-items: center;
    i {
      color: var(--dark);
      filter: none;
    }
    .fa-map-location-dot {
      color: var(--main-color);
    }
    h1 {
      font-size: 1.8rem;
      font-weight: 600;
      color: var(--black);
    }
  }
}
</style>
