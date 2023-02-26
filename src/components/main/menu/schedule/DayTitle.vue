<template>
    <legend :style="gridSetup">
        <h3>{{ day }}</h3>
        <p>{{ date }}</p>
    </legend>
</template>

<style scoped lang="scss">
legend {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    grid-column: 1 / 2;
    gap: 5px;
    background-color: rgba(220, 220, 220, 0.5);
    color: #00416c;

    h3 {
        font-weight: 600;
        text-transform: uppercase;
    }

    p {
        font-size: 0.6rem;
        font-weight: 500;
    }
}
</style>

<script scoped>
export default {
    props: {
        day: String,
        date: String,
        row: Number,
    },

    data() {
        return {

        };
    },

    computed: {
        gridSetup() {
            return {
                "grid-row": `${this.row} / span 1`
            }
        }
    }
};
</script>