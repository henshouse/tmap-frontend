<template>
    <div id="schedule-grid">
        <div id="grid-fill"></div>
        <LessonTitle :lesson="1" time="8:00-8:45" />
        <LessonTitle :lesson="2" time="8:55-9:40" />
        <LessonTitle :lesson="3" time="10:00-10:45" />
        <LessonTitle :lesson="4" time="10:55-11:40" />
        <LessonTitle :lesson="5" time="11:50-12:35" />
        <LessonTitle :lesson="6" time="12:45-13:30" />
        <LessonTitle :lesson="7" time="13:40-14:25" />
        <LessonTitle :lesson="8" time="14:35-15:20" />
        <LessonTitle :lesson="9" time="15:30-16:15" />
        <LessonTitle :lesson="10" time="16:20-17:05" />
        <DayTitle :row="2" day="po" date="11.9."/>
        <DayTitle :row="3" day="út" date="11.9."/>
        <DayTitle :row="4" day="st" date="11.9."/>
        <DayTitle :row="5" day="čt" date="11.9."/>
        <DayTitle :row="6" day="pá" date="11.9."/>
        <Lesson :row="3" :column="2" classroom="315" subject="stp" teacher="Cm"/>
        <Lesson :row="3" :column="3" classroom="315" subject="stp" teacher="Cm"/>
    </div>
</template>

<style scoped lang="scss">
#schedule-grid {
    width: 60%;
    height: 70%;
    display: grid;
    grid-template-rows: repeat(6, 1fr);
    grid-template-columns: repeat(11, 1fr);
    grid-gap: 5px;
}

#grid-fill {
    height: 50%;
    align-self: flex-end;
    background-color: rgba(107, 107, 107, 0.5);
}
</style>

<script scoped>
import LessonTitle from './schedule/LessonTitle.vue';
import DayTitle from './schedule/DayTitle.vue';
import Lesson from './schedule/Lesson.vue';

export default {
    components: {
        LessonTitle,
        DayTitle,
        Lesson
    },
};
</script>