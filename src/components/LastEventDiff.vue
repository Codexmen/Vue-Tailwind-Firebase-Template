<script setup>
import {ref, computed} from 'vue'
import {useEventsStorage} from '/src/services/useEventsStorage.js';

    const {storage} = useEventsStorage();
    const getDiff = () => storage.value.lastEvent ?  Math.floor((Date.now() - storage.value.lastEvent.timestamp) / 1000): 0
    const diff = ref(getDiff())
    setInterval(() => {
            diff.value = getDiff()
    }, 1000)
    const formattedTime = computed(() => {
        // TODO: add login for > than 99 hours
        const time = new Date(diff.value* 1000);
        return ("0" + time.getUTCHours()).slice(-2)   + ":" +
        ("0" + time.getUTCMinutes()).slice(-2) + ":" +
        ("0" + time.getUTCSeconds()).slice(-2);
    });

</script>

<template>
    <div>
        Time from last event: {{formattedTime ||'-' }}
    </div>
</template>
