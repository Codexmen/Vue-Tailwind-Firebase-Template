<script setup>
import BaseButton from '/src/components/base/BaseButton.vue';
import Header from '../components/base/HeaderBlock.vue';
import { useRoute } from 'vue-router';
import FeaturesBlock from '../components/blocks/FeaturesBlock.vue';
import FooterBlock from '../components/base/FooterBlock.vue';
const route = useRoute();
</script>

<template>
    <Header v-if="route.meta.withHeader" />
    <div class="flex flex-col items-center justify-center h-[80vh]">
        <div class="text-5xl font-bold text-center mb-4">Demo Vue + Firebase Project</div>
        <div class="text-xl text-center">
            Template for Vue + Firebase projects with authentication, authorization, and components library
        </div>
        <div class="flex items-center justify-center mt-8 gap-2">
            <BaseButton link="/signup" theme="primary" class="w-full" label="Sign In" />
            <BaseButton
                icon="mdi:arrow-right-thin"
                link="#features"
                theme="secondary"
                class="w-full"
                label="Go to features"
            />
        </div>
    </div>
    <div id="features" class="bg-slate-200">
        <FeaturesBlock />
    </div>
    <FooterBlock class="" />
</template>
