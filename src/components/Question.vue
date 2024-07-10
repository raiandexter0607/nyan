<script setup>
import { defineProps, defineEmits } from 'vue'

const emit = defineEmits("selectOption")
const { question } = defineProps(['question'])

const emitSelectedOption = (isCorrect) => {
    emit("selectOption", isCorrect)
}
</script>

<template>
    <div class="question-header">
        <h2>{{question.text}}</h2>
    </div>
    <div class="options-container">
        <div v-for="option in question.options" class="card" :key="option.id" @click="emitSelectedOption(option.isCorrect)">
            <img :src="option.img">
            <div class="card-text">
                <h2>{{ option.text }}</h2>
            </div>
        </div>
    </div>
</template>

<style scoped>

.options-container {
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;
}

.card {
    width: 310px;
    overflow: hidden;
    border-radius: 2%;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 35px;
    margin-right: 20px;
    cursor: pointer;
}

.card img {
    width: 100%;
    height: 300px;
    margin: 0;
}

.card .card-text {
    padding: 0 5px;
}

.card card-text h2 {
    font-weight: bold;
}
</style>