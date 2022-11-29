<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
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


