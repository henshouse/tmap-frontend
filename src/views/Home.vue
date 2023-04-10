<script setup>
import Header from "../components/Header.vue"
import Main from "../components/Main.vue"
</script>

<template>
  <div id="content">
    <Header />
    <Main />
  </div>
</template>

<style scoped>
* {
  font-family: "Titillium Web", sans-serif;
}

main {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
}
</style>
