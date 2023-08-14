<script setup>
import { ref } from 'vue';
import { useEventsStorage } from './useEventsStorage.js';
const shown = ref(false);
const { list } = useEventsStorage();
</script>

<template>
    <span @click="shown = !shown">Show log</span>
    <div v-if="shown">
        <div v-for="item in list" :key="item.timestamp">
            {{ new Date(item.timestamp) }}
        </div>
    </div>
</template>
