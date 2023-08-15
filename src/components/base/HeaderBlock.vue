<script setup>
import { ref } from 'vue';
import CloseIcon from '/src/components/base/icons/CloseIcon.vue';
import HamburgerMenuIcon from '/src/components/base/icons/HamburgerMenuIcon.vue';
import appConfig from '/src/app.conf.js';
import useUser from '../../useUser';
const isOpen = ref(false);
const { isLoggedIn } = useUser();
</script>
<template>
    <header class="p-4 shadow-md">
        <div class="container mx-auto flex justify-center items-center sm:justify-around">
            <div class="block sm:hidden mr-auto">
                <HamburgerMenuIcon class="text-black" @click="isOpen = true" />
                <nav v-if="isOpen" class="w-full h-full fixed p-8 bg-white top-0 left-0 flex flex-col">
                    <router-link v-for="link in appConfig.mobileHeaderLinks" :key="link" class="py-2" :to="link.path">
                        {{ link.label }}
                    </router-link>
                    <CloseIcon class="absolute top-2 right-2 cursor-pointer" @click="isOpen = false" />
                </nav>
            </div>
            <a class="text-gray-800 font-bold text-2xl hover:underline cursor-pointer mr-auto" href="/">Logo</a>
            <div class="ml-auto hidden sm:block"></div>
            <nav class="ml-auto hidden sm:flex">
                <router-link
                    v-for="link in appConfig.headerLinks"
                    :key="link"
                    class="p-2 mr-4 hover:text-cyan-700 text-gray-800 rounded-md"
                    :to="link.path"
                >
                    {{ link.label }}
                </router-link>
                <router-link
                    v-if="isLoggedIn"
                    to="/account"
                    class="p-2 mr-4 hover:text-cyan-700 text-gray-800 rounded-md"
                >
                    Account
                </router-link>
                <router-link v-else to="/login" class="p-2 mr-4 hover:text-cyan-700 text-gray-800 rounded-md">
                    Login
                </router-link>
            </nav>
        </div>
    </header>
</template>
