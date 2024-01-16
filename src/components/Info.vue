<template>
  <article>
    <div>Textová forma</div>
    <h2><b>Vyučující</b></h2>
    <p>Mgr. Lukáš Vrba</p>
    <h2><b>Den</b></h2>
    <p>Út</p>
    <h2><b>Hodina</b></h2>
    <p>7.</p>
    <h2><b>Učebna</b></h2>
    <p>109</p>
  </article>
</template>

<script setup>
import { ref } from "vue"
// async function fetchTmap() {
//   try {
//     const response = await fetch(
//       "https://github.com/henshouse/tmap-backend/tree/main/tmap_backend/api/teachersList"
//     )
//     const tmap = await response.json()
//   } catch (error) {
//     console.error(error)
//   }
// }
// const tmap = ref("")

const fetchTmap = () => {
  fetch(
    "https://github.com/henshouse/tmap-backend/blob/main/tmap_backend/api/admin/teachersList"
  )
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      fetchedData(data)
    })
}

const fetchedData = (apiData) => {
  console.log(apiData)
}
</script>

<style scoped lang="scss">
article {
  div {
    padding-left: 10px;
    background-color: var(--white);
    height: 3em;
    display: flex;
    align-items: center;
    border-bottom: 3px solid var(--main-color);
  }

  h2,
  p {
    margin-left: 10px;
    margin-bottom: 5px;
    margin-top: 5px;
  }
}
</style>
