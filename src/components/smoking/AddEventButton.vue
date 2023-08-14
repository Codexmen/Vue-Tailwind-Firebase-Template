<script setup>
import {useEventsStorage} from './useEventsStorage.js';
import Button from '/src/components/base/Button.vue'
defineProps({
  msg: String
})
    const {addEvent} = useEventsStorage();
</script>

<template>
    <Button theme="primary" @click="() => addEvent((new Date).getTime())" label="Smoke"></Button>
</template>
