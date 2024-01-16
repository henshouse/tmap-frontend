<template>
  <aside>
    <v-form width="w-100" class="d-flex flex-column justify-center">
      <v-autocomplete label="Vyučující" :items="items" item-title="name">
        <template v-slot:item="{ props, item }">
          <v-list-item
            v-bind="props"
            :subtitle="item.raw.subtitle"></v-list-item>
        </template>
      </v-autocomplete>
      <v-select
        label="Hodina"
        :items="['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']"></v-select>
    </v-form>
  </aside>
</template>

<script setup>
import { ref } from "vue"

const items = ref([
  {
    name: "Mgr. Lukáš Vrba",
    subtitle: "Vb, 204",
  },
])
</script>

<style scoped lang="scss">
aside {
  height: 100%;
  width: 12%;
  background-color: var(--secondary-color);
  border-right: 4px solid var(--secondary-dark);

  .v-input__control {
    background-color: var(--white);
  }
}
</style>
