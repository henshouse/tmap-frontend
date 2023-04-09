<script setup>
import { computed } from "vue"

const props = defineProps({
  colstart: Number,
  colend: Number,
  rowstart: Number,
  rowend: Number,
})

const styled = computed(() => {
  return {
    "grid-column-start": props.colstart,
    "grid-column-end": props.colend,
    "grid-row-start": props.rowstart,
    "grid-row-end": props.rowend,
  }
})
</script>

<template>
  <div :style="styled"></div>
</template>

<style scoped></style>
