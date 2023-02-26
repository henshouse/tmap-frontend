<template>
    <div id="modal">
        <div id="modal-content">
            <ul>
                <span>Filtry</span>
                <button @click="closeModal">
                    <i class="fa-solid fa-xmark fa-xl"></i>
                </button>
            </ul>
            <ul>
                <li>
                    <label for="teacher">Učitel:</label>
                    <select name="teacher" id="teacher">
                        <option value="Zuzana Cimlerová (Cm)">Zuzana Cimlerová (Cm)</option>
                        <option value="Andrea Vlasáková (Vl)">Andrea Vlasáková (Vl)</option>
                        <option value="Dušan Ďurďovič (Dd)">Dušan Ďurďovič (Dd)</option>
                        <option value="Martin Agh (Ag)">Martin Agh (Ag)</option>
                        <option value="Petr Růžička (Ru)">Petr Růžička (Ru)</option>
                    </select>
                </li>
                <li>
                    <label for="student">Student:</label>
                    <select name="student" id="student">
                        <option value="Richard Belda">Richard Belda</option>
                        <option value="Mikuláš Jan Honys">Mikuláš Jan Honys</option>
                        <option value="Jan Kovář">Jan Kovář</option>
                        <option value="Filip Komárek">Filip Komárek</option>
                    </select>
                </li>
                <li>
                    <label for="classroom">Učebna:</label>
                    <select name="classroom" id="classroom">
                        <option value="101">101</option>
                        <option value="208">208</option>
                        <option value="210">210</option>
                        <option value="315">315</option>
                        <option value="412">412</option>
                    </select>
                </li>
                <li>
                    <button @click="setFilter">Nastavit filtry</button>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped lang="scss">
@keyframes fadeIn {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

@keyframes fadeOut {
    0% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
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
    background-color: rgba(0, 0, 0, 0.4);
    animation: fadeIn 80ms;
}

#modal-content {
    width: 50%;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: whitesmoke;
    z-index: 3;
    border-radius: 8px;
    overflow: hidden;

    >ul:first-of-type {
        display: flex;
        width: 100%;
        height: 2.6rem;
        background-color: #00416c;
        align-items: center;
        justify-content: space-between;
        font-size: 1.2rem;
        font-weight: 600;
        box-shadow: rgba(149, 157, 165, 0.5) 0px 8px 24px;
        color: whitesmoke;

        button {
            height: 1.6rem;
            width: 1.6rem;
            background: none;
            color: whitesmoke;
            margin-right: 0.6rem;
        }

        span {
            margin-left: 2rem;
        }
    }

    >ul:last-of-type {
        height: 100%;
        width: 80%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        li {
            width: 50%;
            height: 1.2rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 1.2rem;

            select,
            option {
                width: 50%;
                height: 1.6rem;
                border-radius: 0;
                border: none;
                background-color: whitesmoke;
                border: 1px solid #00416c;
                box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
            }
        }

        li:last-of-type {
            width: 100%;
            display: flex;
            justify-content: center;

            button {
                padding: 0.5rem;
                background-color: #00416c;
                border-radius: 6px;
                color: whitesmoke;
                font-weight: 600;
            }
        }
    }
}
</style>

<script scoped>
export default {

    data() {
        return {
            filterArray: []
        };
    },

    methods: {
        closeModal() {
            this.$emit("close", false)
        },

        setFilter() {
            let teacher = document.getElementById('teacher')
            let teacherValue = teacher.value
            this.filterArray.push(teacherValue)
            let student = document.getElementById('student')
            let studentValue = student.value
            this.filterArray.push(studentValue)
            let classroom = document.getElementById('classroom')
            let classroomValue = classroom.value
            this.filterArray.push(classroomValue)
            this.$emit("setFilter", this.filterArray)
        }
    }
};
</script>