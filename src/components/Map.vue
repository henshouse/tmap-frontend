<script setup>
import { reactive, ref } from "vue"
import { RouterView, useRouter } from "vue-router"

const router = useRouter()
router.push("/home/map/ground-floor")

function gf() {
  router.push("/home/map/ground-floor")
}
function ff() {
  router.push("/home/map/first-floor")
}
function sf() {
  router.push("/home/map/second-floor")
}
function tf() {
  router.push("/home/map/third-floor")
}
function fof() {
  router.push("/home/map/fourth-floor")
}

const model = reactive({
  teacher: "",
  day: "",
  lesson: "",
})
const highlight = ref("rgb(214, 214, 214)")
</script>

<template>
  <section>
    <RouterView />
    <nav>
      <button @click="fof">4</button>
      <button @click="tf">3</button>
      <button @click="sf">2</button>
      <button @click="ff">1</button>
      <button @click="gf">P</button>
    </nav>
  </section>
</template>

<style scoped lang="scss">
section {
  width: 88%;
  height: 100%;

  display: grid;
  grid-template: repeat(8, 1fr) / repeat(8, 1fr);
  nav {
    width: 3vw;
    height: 100%;

    grid-area: 4 / 8 / 6 / 9;
    justify-self: flex-end;

    display: flex;
    flex-direction: column;
    gap: 1px;

    background-color: var(--secondary-dark);

    button {
      width: 100%;
      height: 20%;
      font-size: 16px;
      background-color: var(--white);

      &:hover {
        background-color: var(--secondary-dark);
        transition-duration: 200ms;
      }
    }
  }

  #map {
    width: 70%;
    grid-area: 1 / 2 / 9 / 8;
    justify-self: center;
    align-self: center;

    svg {
      width: 100%;
      height: 100%;
    }
    #g21 {
      path {
        fill: rgb(214, 214, 214);
        stroke-linecap: round;
        stroke-linejoin: round;
      }
    }

    #path41 {
      fill: v-bind(highlight);
    }

    path:hover {
      fill: rgb(182, 182, 182);
      transition-duration: 250ms;
    }

    path:active {
      fill: rgb(145, 145, 145);
    }
  }
}
</style>
