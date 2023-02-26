<template>
    <div id="filter">
        <span>{{ name }}</span>
        <button @click="removeFilter">
            <i class="fa-solid fa-xmark"></i>
        </button>
    </div>
</template>

<style scoped lang="scss">
#filter {
    width: fit-content;
    padding: 0 5px;
    height: 2rem;
    display: flex;
    align-items: center;
    gap: 8px;
    background-color: whitesmoke;
    border-radius: 6px;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;

    button {
        border-radius: 6px;
        background-color: whitesmoke;
    }

    i {
        color: #00416c;
    }
}
</style>

<script scoped>
export default {
    props: {
        name: String,
    },

    data() {
        return {

        };
    },

    methods: {
        removeFilter() {
            this.$emit("remove", this.name)
        }
    }
};
</script>