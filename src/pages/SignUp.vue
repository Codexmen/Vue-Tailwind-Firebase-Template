<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

import { useAuth } from '/src/useAuth';
import Button from '/src/components/base/BaseButton.vue';
import appSettings from '/src/app.conf.js';

const router = useRouter();
const { signUp, errorMessage } = useAuth();

const loginField = ref('');
const password = ref('');
const password2 = ref('');
const isSubmitDisabled = computed(() => {
    return !loginField.value || !password.value || !password2.value || password.value !== password2.value;
});

async function submit() {
    const isLoggedIn = await signUp(loginField.value, password.value);
    if (isLoggedIn) {
        router.push(appSettings.defaultRouteAfterLogin);
    }
}
</script>

<template>
    <div class="prose prose-2xl text-center max-w-full">Sign Up</div>
    <div>
        <div v-if="errorMessage" class="text-red-800 prose prose-sm">
            {{ errorMessage }}
        </div>
        <div class="my-2">
            <span class="text-gray-700">Email address:</span>
            <input v-model="loginField" class="block w-full" type="text" placeholder="Email address" />
        </div>
        <div class="my-2">
            <span class="text-gray-700">Password:</span>
            <input v-model="password" class="block w-full" type="password" placeholder="password" />
        </div>
        <div class="my-2">
            <span class="text-gray-700">Repeat password:</span>
            <input v-model="password2" class="block w-full" type="password" placeholder="password" />
        </div>
        <div class="my-2">
            <Button class="w-full" theme="primary" :is-disabled="isSubmitDisabled" label="Sign up" @click="submit" />
        </div>
        <div class="mt-4 text-center">
            Already have an account? <router-link class="font-bold" to="/login"> Login </router-link>
        </div>
    </div>
</template>
