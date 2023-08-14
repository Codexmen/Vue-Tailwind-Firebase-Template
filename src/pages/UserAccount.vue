<script setup>
import  BaseButton from '/src/components/base/Button.vue'
import Header from "../components/base/Header.vue";
import {useRoute} from "vue-router";
import useUser from "../useUser.js";
const route = useRoute();
const {userData, userSettings} = useUser()
</script>

<template>
  <Header v-if="route.meta.withHeader" />
  <div class="container mx-auto pt-4">
    <div class="text-4xl">Account Settings</div>
    <div class="text-2xl pt-2">Info</div>
    <div>Name: {{userData.displayName}}</div>
    <div>Email: {{userData.email}}</div>
    <div class="text-2xl pt-2">Settings</div>
    <div>Dark mode: {{userSettings.darkMode}}</div>
  </div>
</template>

