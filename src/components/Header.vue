<script setup></script>

<template>
  <header>
    <i class="fa-solid fa-house fa-lg"></i>
    <ul>
      <h1>TMap</h1>
      <i class="fa-sharp fa-solid fa-circle-user fa-2xl"></i>
    </ul>
  </header>
</template>

<style scoped lang="scss">
header {
  display: flex;
  width: 90%;
  height: 8vh;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0 5%;
  background-color: #00416c;

  i {
    color: whitesmoke;
  }
  ul {
    display: flex;
    gap: 3rem;
    align-items: center;
    h1 {
      font-size: 1.8rem;
      font-weight: 500;
      color: whitesmoke;
    }
  }
}

header,
ul,
i {
  filter: drop-shadow(1px 1px 3px #000);
}
</style>
