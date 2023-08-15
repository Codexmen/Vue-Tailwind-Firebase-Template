<script setup>
import Header from '../components/base/HeaderBlock.vue';
import Button from '../components/base/BaseButton.vue';
import { useRoute } from 'vue-router';
import useUser from '../useUser.js';
import { useAuth } from '../useAuth';
import { useRouter } from 'vue-router';
import settings from '../app.conf';
const route = useRoute();
const { userData, userSettings } = useUser();
const { logout } = useAuth();
const router = useRouter();
const logoutAndRedirect = () => {
    logout();
    router.push(settings.defaultRoute);
};
</script>

<template>
    <Header v-if="route.meta.withHeader" />
    <div class="container mx-auto pt-4">
        <div class="text-4xl">Account Settings</div>
        <div class="text-2xl pt-2">Info</div>
        <div>Name: {{ userData.displayName }}</div>
        <div>Email: {{ userData.email }}</div>
        <div class="text-2xl pt-2">Settings</div>
        <div>Dark mode: {{ userSettings.darkMode }}</div>
        <div><Button theme="negative" label="Sign out" @click="logoutAndRedirect" /></div>
    </div>
</template>
