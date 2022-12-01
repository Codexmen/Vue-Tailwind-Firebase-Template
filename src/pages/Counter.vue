<script setup>
import AddEventButton from './components/AddEventButton.vue'
import EventsList from './components/EventsList.vue'
import LastEventDiff from './components/LastEventDiff.vue'
import CountDownTimer from './components/CountDownTimer.vue'
import Summary from './components/Summary.vue'
</script>

<template>
    <div>
        <AddEventButton />
        <LastEventDiff />
        <CountDownTimer />
        <Summary />
        <EventsList />
    </div>
</template>

