<script setup>
import { Icon } from '@iconify/vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const props = defineProps({
    label: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        default: null,
    },
    theme: {
        type: String,
        default: 'secondary',
    },
    size: {
        type: String,
        default: 'md',
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    iconAfter: {
        type: String,
        default: null,
    },
    iconBefore: {
        type: String,
        default: null,
    },
    icon: {
        type: String,
        default: null,
    },
});
const commonClasses =
    'whitespace-nowrap shadow inline-flex items-center justify-center border border-transparent rounded-md font-semibold focus:outline-none focus:shadow-outline transition duration-150 ease-in-out';
const themeClasses = {
    primary: 'bg-primary-600 hover:bg-primary-500 text-white',
    secondary: 'bg-secondary-200 hover:bg-secondary-100 text-gray-800',
    negative: 'bg-red-600 hover:bg-red-500 text-white',
    success: 'bg-green-600 hover:bg-green-500 text-white',
    transparent: 'bg-transparent hover:bg-gray-100 text-gray-800',
};
const sizes = {
    sm: 'px-3 py-2 text-sm leading-4',
    md: 'px-4 py-2 text-base leading-5',
    lg: 'px-6 py-3 text-lg leading-6',
};
const emit = defineEmits(['click']);
function handleClick() {
    if (props.link) {
        router.push(props.link);
    } else {
        emit('click');
    }
}
</script>
<template>
    <button
        type="button"
        :disabled="disabled"
        :class="`${props.disabled ? 'opacity-50 cursor-not-allowed' : ''} ${commonClasses} ${
            themeClasses[props.theme]
        } ${sizes[props.size]}`"
        @click="handleClick"
    >
        <Icon v-if="iconBefore" class="mr-2" :icon="iconBefore" />
        <span v-if="iconBefore" class="material-icons">{{}}</span>
        <span> {{ props.label }}</span>
        <Icon v-if="iconAfter || icon" :class="{ 'ml-2': label }" :icon="iconAfter || icon" />
    </button>
</template>
