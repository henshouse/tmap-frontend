<template>
    <div id="modal">
        <ModalContent/>
    </div>
</template>

<style scoped lang="scss">
    #modal {
        display: flex;
        place-items: center;
        justify-content: center;
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 2;
        background-color: rgba(0,0,0,0.4);
    }
</style>

<script scoped>
    import ModalContent from './modal-content/ModalContent.vue'

    export default {
    components: {
        ModalContent,
    },

    data() {
        return {
        };
    },
};
</script>