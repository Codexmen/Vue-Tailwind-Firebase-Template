<script setup>
import { Icon } from '@iconify/vue';
</script>

<template>
    <div class="w-[70vw] mx-auto p-8 py-32">
        <div class="text-4xl font-extrabold pb-8">Main features that have this project</div>
        <div class="text-2xl mb-2">List of main features:</div>
        <ul class="grid grid-cols-2 gap-2">
            <li class="flex items-center">
                <Icon class="mr-2" icon="bi:lightning-fill" /> Sign In/Up with Google or login/password
            </li>
            <li class="flex items-center"><Icon class="mr-2" icon="bi:lightning-fill" /> Tailwind CSS for styling</li>
            <li class="flex items-center">
                <Icon class="mr-2" icon="bi:lightning-fill" /> Protected routes for logged users
            </li>
            <li class="flex items-center">
                <Icon class="mr-2" icon="bi:lightning-fill" /> Eslint and prettier for code formatting
            </li>
            <li class="flex items-center">
                <Icon class="mr-2" icon="bi:lightning-fill" /> Form validation with Vuelidate
            </li>
            <li class="flex items-center"><Icon class="mr-2" icon="bi:lightning-fill" /> Configurable components</li>
        </ul>
    </div>
</template>
