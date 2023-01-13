<script setup>
import {ref, computed} from 'vue';
import { useRouter } from 'vue-router'

import {useAuth}  from '/src/useAuth';
import Button from '/src/components/base/Button.vue'

const router = useRouter();
const {signUp, errorMessage} = useAuth();

const loginField = ref('');
const password = ref('');
const password2 = ref('');
const isSubmitDisabled = computed(() => {
    return !loginField.value || !password.value || !password2.value || password.value !== password2.value
})

async function submit() {
    const isLoggedIn = await signUp(loginField.value, password.value);
    if (isLoggedIn) {
        router.push('/counter');
    }
}
</script>

<template>
    <div class="prose prose-2xl text-center max-w-full">Sign Up</div>
    <div>
        <div class="text-red-800 prose prose-sm" v-if="errorMessage">{{ errorMessage }}</div>
        <div class="my-2">
            <span class="text-gray-700">Email address:</span>
            <input class="block w-full" type="text" v-model="loginField" placeholder="Email address">
        </div>
        <div class="my-2">
            <span class="text-gray-700">Password:</span>
            <input class="block w-full" type="password" v-model="password" placeholder="password">
        </div>
      <div class="my-2">
            <span class="text-gray-700">Repeat password:</span>
            <input class="block w-full" type="password" v-model="password2" placeholder="password">
        </div>
        <div class="my-2">
            <Button class="w-full" :is-disabled="isSubmitDisabled" @click="submit" label="Sign up"/>
        </div>
      <div class="mt-4 text-center">Already have an account? <router-link class="font-bold" to="/">Login</router-link></div>
    </div>
</template>

