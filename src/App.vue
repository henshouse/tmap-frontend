<script setup>
import { RouterLink, RouterView } from "vue-router"
import { useRouter } from "vue-router"

const router = useRouter()
router.push("/login")
</script>

<template>
  <router-view></router-view>
</template>

<style lang="scss">
* {
  font-family: "Titillium Web", sans-serif;
}

#app {
  height: 100vh;
}

body {
  background-color: var(--secondary-color);
}
</style>
