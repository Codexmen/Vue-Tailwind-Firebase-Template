<script setup>
import { useEventsStorage } from './useEventsStorage.js';
import Button from '/src/components/base/BaseButton.vue';
const { addEvent } = useEventsStorage();
</script>

<template>
    <Button theme="primary" label="Smoke" @click="() => addEvent(new Date().getTime())" />
</template>
