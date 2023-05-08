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

function getRoom() {
  if (
    model.teacher == "zcimlerova" &&
    model.day == "today" &&
    model.lesson == "1"
  ) {
    highlight.value = "blue"
    router.push("/home/map/third-floor")
  }
}
</script>

<template>
  <section id="map-container">
    <nav>
      <li>
        <label for="day">Den</label>
        <select @click="getRoom" id="day" v-model="model.day">
          <option value="">Nic</option>
          <option value="today">Dnes</option>
          <option value="">24.4.</option>
          <option value="">25.4.</option>
          <option value="">26.4.</option>
        </select>
      </li>
      <li>
        <label for="teacher">Učitel</label>
        <select @click="getRoom" id="teacher" v-model="model.teacher">
          <option value="">Nic</option>
          <option value="zcimlerova">Zuzana Cimlerová</option>
          <option value="">Matěj Cajthaml</option>
          <option value="">Petr Zíka</option>
          <option value="">Lukáš Vrba</option>
        </select>
      </li>
      <li>
        <label for="lesson">Hodina</label>
        <select @click="getRoom" id="lesson" v-model="model.lesson">
          <option value="">Nic</option>
          <option value="1">1.</option>
          <option value="2">2.</option>
          <option value="">3.</option>
          <option value="">4.</option>
          <option value="">5.</option>
          <option value="">6.</option>
          <option value="">7.</option>
          <option value="">8.</option>
          <option value="">9.</option>
        </select>
      </li>
    </nav>
    <ul>
      <RouterView />
      <aside>
        <button @click="fof">4</button>
        <button @click="tf">3</button>
        <button @click="sf">2</button>
        <button @click="ff">1</button>
        <button @click="gf">P</button>
      </aside>
    </ul>
  </section>
</template>

<style lang="scss">
#map-container {
  width: 60%;
  height: 80%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  background-color: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(2px);
  border-radius: 15px;
  overflow: hidden;

  nav {
    width: 100%;
    height: 12%;

    display: flex;
    justify-content: space-around;
    align-items: center;

    background-color: whitesmoke;
    filter: drop-shadow(-1px 0px 10px rgba(0, 0, 0, 0.1));

    li {
      list-style: none;
    }

    select {
      background-color: whitesmoke;
      margin-left: 5px;
      border: 1px solid rgb(196, 196, 196);
      border-radius: 6px;
      font-size: 1em;
      padding-left: 6px;
    }

    #day {
      width: 6vw;
    }

    #teacher {
      width: 12vw;
    }

    #lesson {
      width: 3vw;
    }
  }

  ul {
    width: 100%;
    height: 88%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    aside {
      width: 3vw;
      height: 40%;

      display: flex;
      flex-direction: column;
      gap: 1px;

      background-color: rgb(199, 199, 199);

      button {
        width: 100%;
        height: 20%;
        font-size: 16px;

        &:hover {
          background-color: rgb(216, 216, 216);
          transition-duration: 200ms;
        }
      }
    }
  }

  #map {
    width: 90%;
    height: 90%;

    svg {
      width: 100%;
      height: 100%;
    }

    path {
      fill: rgb(214, 214, 214);
      stroke-linecap: round;
      stroke-linejoin: round;
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
