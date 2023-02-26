<template>
    <main>
        <Menu/>
    </main>
</template>

<style scoped lang="scss">
main {
    width: 80%;
    height: 92vh;
    display: flex;
    place-items: center;
}
</style>

<script>
import Menu from './main/Menu.vue'

export default {
    components: {
        Menu,
    },

    data() {
        return {

        };
    },
};
</script>