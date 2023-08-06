<script setup>
import {ref, computed} from 'vue';
import { useRouter } from 'vue-router'

import Button from '/src/components/base/Button.vue'

import FormInput from "/src//components/base/FormInput.vue";

const router = useRouter();

const emailField = ref('');
const isSubmitDisabled = computed(() => {
    return !emailField.value
})

async function submit() {
  console.log('submit')
}
</script>
<template>
  <div>
  <div class="prose prose-2xl text-center max-w-full">Forgot Password</div>
  <div class="prose text-center max-w-full">An email will be sent to you with a link to reset your password!</div>
  <FormInput label="Email address:" v-model="emailField"/>
  <div class="my-2">
            <Button theme="primary" class="w-full" :is-disabled="isSubmitDisabled" @click="submit" label="Submit"/>
  </div>
    <div class="mt-4 text-center hover:underline"><router-link to="/login">Go back to the login page</router-link></div>
    </div>
</template>


<style scoped>

</style>