<script setup>
import AddEventButton from '/src/components/smoking/AddEventButton.vue'
import EventsList from '/src/components/smoking/EventsList.vue'
import LastEventDiff from '/src/components/smoking/LastEventDiff.vue'
import CountDownTimer from '/src/components/smoking/CountDownTimer.vue'
import Summary from '/src/components/smoking/Summary.vue'
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

