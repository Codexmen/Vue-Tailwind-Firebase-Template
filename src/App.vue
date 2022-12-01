<script setup>
import useUser from './useUser';
import {useAuth}  from '/src/useAuth';
import { useRouter } from 'vue-router'

const {isLoggedIn} = useUser();
const {logout} = useAuth();

// TODO: move it in component Header
const router = useRouter();
const logOutAndRedirect = async () => {
    await logout();
    router.push('/');
}
</script>

<template>
    <div>
        <router-link to="/">Home</router-link>
        <router-link to="/protected">Protected</router-link>
        <router-link v-if="!isLoggedIn" to="/login">Login</router-link>
        <a href="#" @click="logOutAndRedirect" v-if="isLoggedIn">Logout</a>
    </div>
    <div>
        <router-view />
    </div>

</template>


