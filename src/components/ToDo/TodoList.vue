<script setup>
import {ref, onMounted} from 'vue';
import useTodoList from './useDB'

const {addTodo, getList, list} = useTodoList();
const todoText = ref('')
const addTodoItem = async () => {
    await addTodo(todoText.value);
}
</script>

<template>
    <div v-for="item in list" :key="item.id">{{ item}}</div>
    <input v-model="todoText" placeholder="Some important" />
    <button :disabled="!todoText" @click="addTodoItem">Add default Todo</button>
</template>
