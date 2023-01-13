<script setup>
import AddEventButton from '/src/components/smoking/AddEventButton.vue'
import EventsList from '/src/components/smoking/EventsList.vue'
import LastEventDiff from '/src/components/smoking/LastEventDiff.vue'
import CountDownTimer from '/src/components/smoking/CountDownTimer.vue'
import Summary from '/src/components/smoking/Summary.vue'
</script>

<template>
    <div class="flex flex-col h-full">
<!--        <LastEventDiff />-->
      <CountDownTimer />
      <Summary />
      <AddEventButton class="mt-auto mb-8" />
<!--      <EventsList />-->
    </div>
</template>

