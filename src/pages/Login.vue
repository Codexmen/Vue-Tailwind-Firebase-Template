<script setup>
import {ref, computed} from 'vue';
import { useRouter } from 'vue-router'

import {useAuth}  from '/src/useAuth';

const router = useRouter();
const {login, errorMessage} = useAuth();

const loginField = ref('');
const password = ref('');
const isSubmitDisabled = computed(() => {
    return !loginField.value || !password.value
})

async function submit() {
    const isLoggedIn = await login(loginField.value, password.value);
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
            <button :disabled="isSubmitDisabled" @click="submit">Login</button>
        </div>
    </div>
</template>

