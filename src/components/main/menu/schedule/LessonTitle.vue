<template>
    <legend :style="gridSetup">
        <h3>{{ lesson }}</h3>
        <p>{{ time }}</p>
    </legend>
</template>

<style scoped lang="scss">
    legend {
        height: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 5px;
        grid-row: 1;
        background-color: #00416c;
        color: whitesmoke;
        align-self: flex-end;

        h3{
            font-weight: 600;
        }

        p {
            font-size: 0.6rem;
            font-weight: 500;
        }
    }
</style>

<script>
export default {
    props: {
        lesson: Number,
        time: String,
    },

    data() {
        return {

        };
    },

    computed: {
        gridSetup() {
            return {
                "grid-column": `${this.lesson+1} / span 1`
            }
        }
    }
};
</script>