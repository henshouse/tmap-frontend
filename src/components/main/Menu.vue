<template>
    <menu>
        <FilterModal @click="show = false" v-if="show"/>
        <ul id="mode">
            <button id="border-button">
                <i class="fa-solid fa-calendar-days fa-xl"></i>
            </button>
            <button>
                <i class="fa-solid fa-map fa-xl"></i>
            </button>
        </ul>
        <ul id="filters">
            <li>
                <i class="fa-solid fa-filter"></i>
                <h2>Aktivní filtry:</h2>
            </li>
            <ul>
                <Filter name="315" />
                <Filter name="Richard Belda" />
                <Filter name="Cm" />
            </ul>
            <button @click="show = true">
                <i class="fa-solid fa-sliders fa-xl"></i>
            </button>
        </ul>
        <Schedule />
    </menu>
</template>

<style scoped lang="scss">
menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5%;
    width: 100%;
    height: 75vh;
    background-color: rgba(245, 245, 245, 0.5);
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border-radius: 8px;
    overflow: hidden;

    #filters {
        width: 90%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        >ul {
            width: 80%;
            display: flex;
            gap: 1.2rem;
            justify-content: flex-start;
            align-items: center;
        }

        li {
            display: flex;
            gap: 10px;
            align-items: center;
            align-self: flex-start;
            align-self: center;

            h2 {
                font-size: 1.2rem;
            }
        }

        button {
            width: 2rem;
            height: 2rem;
            background-color: whitesmoke;
            border-radius: 6px;
        }

    }

    #mode {
        display: flex;
        width: 100%;
        height: 6%;
        justify-content: center;
        align-items: center;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

        button {
            width: 50%;
            height: 100%;
            background-color: #00416c;

            i {
                color: whitesmoke;
            }
        }

        #border-button {
            border-right: 1px solid whitesmoke;
        }
    }
}
</style>

<script>
import Schedule from './menu/Schedule.vue'
import Filter from './menu/Filter.vue'
import FilterModal from './menu/FilterModal.vue'

export default {
    components: {
        FilterModal,
        Schedule,
        Filter,
    },

    data() {
        return {
            show: false,
        };
    },
};
</script>