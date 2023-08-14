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
    <div class="w-screen h-screen">
        <router-view />
    </div>
</template>


