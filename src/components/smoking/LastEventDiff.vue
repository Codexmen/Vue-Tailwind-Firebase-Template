<script setup>
import {ref, computed} from 'vue'
import {useEventsStorage} from './useEventsStorage.js';

    const {lastEvent} = useEventsStorage();
    const getDiff = () => lastEvent.value ?  Math.floor((Date.now() - lastEvent.value.timestamp) / 1000): 0
    const diff = ref(getDiff())
    const formattedTime = computed(() => {
        // TODO: add login for > than 99 hours
        const time = new Date(diff.value* 1000);
        return ("0" + time.getUTCHours()).slice(-2)   + ":" +
            ("0" + time.getUTCMinutes()).slice(-2) + ":" +
            ("0" + time.getUTCSeconds()).slice(-2);
    });

    setInterval(() => {
            diff.value = getDiff()
    }, 1000)
</script>

<template>
    <div>
        Time from last event: {{formattedTime ||'-' }}
    </div>
</template>
