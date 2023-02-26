<template>
    <legend :style="gridSetup">
        <p>{{ classroom }}</p>
        <h3>{{ subject }}</h3>
        <p>{{ teacher }}</p>
    </legend>
</template>

<style scoped lang="scss">
legend {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    grid-column: 1 / 2;
    gap: 12px;
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
        classroom: String,
        subject: String,
        teacher: String,
        row: Number,
        column: Number
    },

    data() {
        return {

        };
    },

    computed: {
        gridSetup() {
            return {
                "grid-column": `${this.column} / span 1`,
                "grid-row": `${this.row} / span 1`
            }
        }
    }
};
</script>