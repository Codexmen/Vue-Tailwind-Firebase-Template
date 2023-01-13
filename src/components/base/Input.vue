<template>
    <input type="text" v-model="loginField" placeholder="username">
</template>

<script setup>
import {ref, computed} from 'vue';
const loginField = ref('');
</script>

<style scoped>

</style>
