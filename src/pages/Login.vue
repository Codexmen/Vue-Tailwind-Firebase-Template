<script setup>
import {ref, computed, reactive} from 'vue';
import { useRouter } from 'vue-router'
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

import Button from '/src/components/base/Button.vue'

import {useAuth}  from '/src/useAuth';
import FormInput from "../components/base/FormInput.vue";

const router = useRouter();
const {login, loginWithGoogle, errorMessage} = useAuth();
const state = reactive({
    loginField: '',
    password: '',
})
const rules = {
    loginField: {required, email, $lazy: true},
    password: {required},
}
const isSubmitDisabled = computed(() => {
  console.log(state.loginField, state.password)
        return !state.loginField || !state.password
    })
const v$ = useVuelidate(rules, state)
async function submit() {
    const isFormCorrect = await v$.value.$validate()
    if (!isFormCorrect) return
    const isLoggedIn = await login(state.loginField, state.password);
    if (isLoggedIn) {
        router.push('/counter');
    }
}

</script>

<template>
    <div class="prose prose-2xl text-center max-w-full">Log In</div>
    <div>
        <div class="text-red-800 prose prose-sm" v-if="errorMessage">{{ errorMessage }}</div>
        <div class="my-2">
            <FormInput :errors="v$.loginField.$errors" label="Email address:" v-model="v$.loginField.$model"/>
        </div>
        <div class="my-2">
          <FormInput :errors="v$.password.$errors" type="password" label="Password:" v-model="v$.password.$model"/>
        </div>
        <div class="my-2 flex gap-2">
            <Button theme="primary" class="" :disabled="isSubmitDisabled" @click="submit" label="Login"/>
            <Button theme="transparent" class="" @click="loginWithGoogle" icon-before="flat-color-icons:google" label="Sign in with Google"/>
        </div>
      <div class="mt-4 text-center hover:underline"><router-link to="/forgot-password">Forgot password?</router-link></div>
      <div class="mt-4 text-center">Dont have an account? <router-link to="/signup" class="font-bold text-red-600  hover:underline">Sign In</router-link></div>
    </div>
</template>

