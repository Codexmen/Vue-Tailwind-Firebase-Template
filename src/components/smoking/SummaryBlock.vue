<script setup>
import { useEventsStorage } from './useEventsStorage.js';

const { eventsForYesterday, eventsForToday, eventsForMonth, eventsForYear } = useEventsStorage();
</script>

<template>
    <div class="grid grid-cols-2 mt-8 border-1 bg-gray-200 p-4 rounded-md shadow-sm">
        <div class="text-center">
            <div class="text-gray-500 prose prose-sm">Today:</div>
            <div class="text-3xl">
                {{ eventsForToday.length || '-' }}
            </div>
        </div>
        <div class="text-center">
            <div class="text-gray-500 prose prose-sm">Yesterday:</div>
            <div class="text-3xl">
                {{ eventsForYesterday.length || '-' }}
            </div>
        </div>
        <div class="text-center">
            <div class="text-gray-500 prose prose-sm">Month:</div>
            <div class="text-3xl">
                {{ eventsForMonth.length || '-' }}
            </div>
        </div>
        <div class="text-center">
            <div class="text-gray-500 prose prose-sm">Year:</div>
            <div class="text-3xl">
                {{ eventsForYear.length || '-' }}
            </div>
        </div>
    </div>
</template>
