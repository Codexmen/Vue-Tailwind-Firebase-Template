<template>
    <h1 v-if="size === 'lg'" class="prose" :class="sizeClasses">
        <slot></slot>
    </h1>
    <h2 v-if="size === 'md'" class="prose" :class="sizeClasses">
        <slot></slot>
    </h2>
    <h3 v-if="size === 'sm'" class="prose" :class="sizeClasses">
        <slot></slot>
    </h3>
</template>

<script>
export default {
    name: 'HeadingText',
    props: {
        size: {
            type: String,
            default: 'md',
        },
    },
    setup(props) {
        const sizes = {
            sm: 'text-2xl leading-normal font-bold',
            md: 'text-3xl leading-normal font-bold',
            lg: 'text-4xl leading-normal font-bold',
        };
        return {
            sizeClasses: sizes[props.size],
        };
    },
};
</script>

<style scoped></style>
