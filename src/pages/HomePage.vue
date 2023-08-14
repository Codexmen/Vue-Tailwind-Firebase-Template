<script setup>
import BaseButton from '/src/components/base/BaseButton.vue';
import Header from '../components/base/HeaderBlock.vue';
import { useRoute } from 'vue-router';
const route = useRoute();
</script>

<template>
    <Header v-if="route.meta.withHeader" />
    <div class="flex flex-col items-center justify-center h-screen">
        <div class="text-5xl font-bold text-center mb-4">AssetKeeper</div>
        <div class="text-xl text-center">
            Monitor and take control of all your financial assets in one convenient place
        </div>
        <div class="flex items-center justify-center mt-8 gap-2">
            <BaseButton link="/signup" theme="primary" class="w-full" label="Get Started" />
            <BaseButton icon="mdi:arrow-right-thin" theme="secondary" class="w-full" label="Learn More" />
        </div>
    </div>
</template>
