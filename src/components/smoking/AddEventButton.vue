<script setup>
import {useEventsStorage} from './useEventsStorage.js';
defineProps({
  msg: String
})
    const {addEvent} = useEventsStorage();
</script>

<template>
    <button @click="() => addEvent((new Date).getTime())">Smoke</button>
</template>
