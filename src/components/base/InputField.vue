<template>
    <input v-model="loginField" type="text" placeholder="username" />
</template>

<script setup>
import { ref } from 'vue';
const loginField = ref('');
</script>

<style scoped></style>
