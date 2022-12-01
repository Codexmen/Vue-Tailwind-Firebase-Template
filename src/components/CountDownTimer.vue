<script setup>
import {ref, computed} from 'vue'
import {useEventsStorage} from '/src/services/useEventsStorage.js';
    const TIMEOUT = 40*60;
    const {storage} = useEventsStorage();
    const getDiff = () => storage.value.lastEvent ?  Math.floor((Date.now() - storage.value.lastEvent.timestamp) / 1000): 0

    const countdown = ref(TIMEOUT - getDiff())
    const isReady = ref(countdown.value <= 0);
    setInterval(() => {
            countdown.value = TIMEOUT - getDiff();
            isReady.value = countdown.value <= 0
        }, 1000)

    const formattedTime = computed(() => {
        const time = new Date(countdown.value* 1000);
        return ("0" + time.getUTCHours()).slice(-2)   + ":" +
        ("0" + time.getUTCMinutes()).slice(-2) + ":" +
        ("0" + time.getUTCSeconds()).slice(-2);
    });

</script>

<template>
    <div>
        Until next:
        <span v-if="!isReady"> {{formattedTime ||'-' }}</span>
        <span v-if="isReady">Ready!</span>
    </div>
</template>
