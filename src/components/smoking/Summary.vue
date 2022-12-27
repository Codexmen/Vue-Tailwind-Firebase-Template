<script setup>
import {useEventsStorage} from './useEventsStorage.js';

const {eventsForYesterday, eventsForToday, eventsForWeek, eventsForMonth, eventsForYear} = useEventsStorage();

</script>

<template>
    <div>
        <div>
            Today: {{ eventsForToday.length || '-' }}
        </div>
        <div>
            Yesterday: {{ eventsForYesterday.length || '-' }}
        </div>
        <div>
            7 days: {{ eventsForWeek.length || '-' }}
        </div>
        <div>
            Month: {{ eventsForMonth.length || '-' }}
        </div>
        <div>
            Year: {{ eventsForYear.length || '-' }}
        </div>
    </div>

</template>
