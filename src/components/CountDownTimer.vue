<script setup>
import {ref, computed, watchEffect} from 'vue'
import {useEventsStorage} from 'src/services/useEventsStorage.js';
    const TIMEOUT = 5;
    const {storage} = useEventsStorage();
    const getDiff = () => storage.value.lastEvent ?  Math.floor((Date.now() - storage.value.lastEvent.timestamp) / 1000): 0
console.log(getDiff());
    const countdown = ref(Math.max(TIMEOUT - getDiff(),0))
    const isReady = ref(countdown.value === 0);
    watchEffect(() => {
        countdown.value = Math.max(TIMEOUT - getDiff(),0)
        isReady.value = countdown.value === 0
        const timer = setInterval(() => {
            countdown.value = countdown.value - 1;
            if (countdown.value <= 0) {
                clearInterval(timer);
                isReady.value = true
            }
        }, 1000)
    })

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
