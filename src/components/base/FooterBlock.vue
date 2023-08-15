<script setup>
import appSettings from '/src/app.conf.js';
</script>

<template>
    <footer class="bg-slate-600 text-neutral-200 pb-16 pt-8">
        <div class="w-[70vw] px-8 mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div v-for="section in appSettings.footerLinks" :key="section">
                <div v-if="section.sectionTitle" class="text-2xl mb-4">
                    {{ section.sectionTitle }}
                </div>
                <div>
                    <div v-for="link in section.links" :key="link.path">
                        <router-link class="hover:underline" :to="link.path">{{ link.label }}</router-link>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
