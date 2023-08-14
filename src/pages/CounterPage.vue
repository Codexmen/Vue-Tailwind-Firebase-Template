<script setup>
import AddEventButton from '/src/components/smoking/AddEventButton.vue';
import CountDownTimer from '/src/components/smoking/CountDownTimer.vue';
import Summary from '/src/components/smoking/SummaryBlock.vue';
</script>

<template>
    <div class="flex flex-col h-full">
        <CountDownTimer />
        <Summary />
        <AddEventButton class="mt-auto mb-8" />
    </div>
</template>
