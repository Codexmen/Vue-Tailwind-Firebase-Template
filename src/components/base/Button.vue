<script setup>
const props = defineProps({
    label: {type: String, default: ''},
    isDisabled: {type: Boolean, default: false},
    theme: {type: String, default: 'primary'}
})
function themeStyles() {
    const map = {
        'primary': 'bg-blue-500 hover:bg-blue-400 text-gray-100 disabled:bg-blue-200 disabled:cursor-not-allowed'
    }
    return map[props.theme] || map['primary']
}


defineExpose({
    themeStyles
})
</script>
<template>
    <button :disabled="isDisabled" :class="themeStyles()" class="p-2">{{label}}</button>
</template>



<style scoped>

</style>
