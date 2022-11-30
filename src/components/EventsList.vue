<script setup>
import {ref, computed} from 'vue'
import {useEventsStorage} from '/src/services/useEventsStorage.js';
    const shown = ref(false)
    const {storage} = useEventsStorage();
    // return {addEvent}
    const reverseLog = computed(()=> {
        return [...storage.value.events].reverse();
    })
</script>

<template>
    <span @click="shown = !shown">Show log</span>
    <div v-if="shown" v-for="item in reverseLog" :key="item.timestamp">
        {{ new Date(item.timestamp) }}
    </div>
</template>
