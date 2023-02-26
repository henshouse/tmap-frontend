<template>
    <div id="modal">
        <ModalContent/>
    </div>
</template>

<style scoped lang="scss">
    @keyframes fadeIn {
        0% {opacity: 0;}
        100% {opacity: 1;}
    }

    @keyframes fadeOut {
        0% {opacity: 1;}
        100% {opacity: 0;}
    }

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
        animation: fadeIn 80ms;
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