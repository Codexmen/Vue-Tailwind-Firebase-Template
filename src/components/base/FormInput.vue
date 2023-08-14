<template>
    <div>
        <label v-if="label" class="block text-sm font-medium text-gray-700" :for="name">{{ label }}</label>
        <input
            :type="type"
            :name="name"
            :placeholder="placeholder"
            :value="modelValue"
            :class="inputClasses"
            @input="$emit('update:modelValue', $event.target.value)"
        />
        <div v-for="error of errors" :key="error.$uid" class="text-red-800 prose prose-sm pt-1">
            <div>{{ error.$message }}</div>
        </div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'FormInput',
    props: {
        errors: {
            type: Array,
            default: null,
        },
        name: {
            type: String,
            default: null,
        },
        label: {
            type: String,
            required: true,
        },
        placeholder: {
            type: String,
            default: null,
        },
        modelValue: {
            type: String,
            default: null,
        },
        type: {
            type: String,
            default: 'text',
        },
    },
    emits: ['update:modelValue'],
    setup() {
        const inputClasses =
            'mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50';
        return {
            inputClasses,
        };
    },
};
</script>
