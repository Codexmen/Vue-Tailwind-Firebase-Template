<script setup>
import {useEventsStorage} from '/src/services/useEventsStorage.js';
defineProps({
  msg: String
})
    const {addEvent} = useEventsStorage();
</script>

<template>
    <button @click="() => addEvent((new Date).getTime())">Smoke</button>
</template>
