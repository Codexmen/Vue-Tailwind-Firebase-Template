<script setup>
import {ref, computed} from 'vue';
import { useRouter } from 'vue-router'

import {useAuth}  from '/src/useAuth';

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
        router.push('/protected');
    }
}
</script>

<template>
    Login
    <div>
        <div v-if="errorMessage">{{ errorMessage }}</div>
        <div>
            <label>Login:</label>
            <input v-model="loginField" placeholder="username">
        </div>
        <div>
            <label>Password:</label>
            <input type="password" v-model="password" placeholder="password">
        </div>
        <div>
            <label>Repeat password:</label>
            <input type="password" v-model="password2" placeholder="password">
        </div>
        <div>
            <button :disabled="isSubmitDisabled" @click="submit">Sign Up</button>
        </div>
    </div>
</template>

