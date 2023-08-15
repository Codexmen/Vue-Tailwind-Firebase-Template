<script setup>
import { ref, computed, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useVuelidate } from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';

import { useAuth } from '/src/useAuth';
import FormInput from '../components/base/FormInput.vue';
import Button from '/src/components/base/BaseButton.vue';
import appSettings from '/src/app.conf.js';

const router = useRouter();
const { signUp, errorMessage } = useAuth();

const state = reactive({
    login: '',
    password: '',
    confirmPassword: '',
});
const rules = {
    login: { required, email, $lazy: true },
    password: { required },
    confirmPassword: { required },
};
const isSubmitDisabled = computed(() => {
    console.log(state.login, state.password, state.confirmPassword);
    console.log(!state.login || !state.password || !state.confirmPassword || state.password !== state.confirmPassword);
    return !state.login || !state.password || !state.confirmPassword || state.password !== state.confirmPassword;
});

const v$ = useVuelidate(rules, state);

async function submit() {
    const isFormCorrect = await v$.value.$validate();
    if (!isFormCorrect) return;
    const isLoggedIn = await signUp(state.login, state.password);
    if (isLoggedIn) {
        router.push(appSettings.defaultRouteAfterLogin);
    }
}
</script>

<template>
    <div class="md:w-[480px] mx-auto px-4">
        <div class="prose prose-2xl text-center max-w-full">Sign Up</div>
        <div>
            <div v-if="errorMessage" class="text-red-800 prose prose-sm">
                {{ errorMessage }}
            </div>
            <div class="my-2">
                <FormInput v-model="v$.login.$model" :errors="v$.login.$errors" label="Email address:" />
            </div>
            <div class="my-2">
                <FormInput
                    v-model="v$.password.$model"
                    :errors="v$.password.$errors"
                    type="password"
                    label="Password:"
                />
            </div>
            <div class="my-2">
                <FormInput
                    v-model="v$.confirmPassword.$model"
                    :errors="v$.confirmPassword.$errors"
                    type="password"
                    label="Repeat password:"
                />
            </div>
            <div class="my-2">
                <Button
                    class="w-full md:w-auto"
                    theme="primary"
                    :disabled="isSubmitDisabled"
                    label="Sign up"
                    @click="submit"
                />
            </div>
            <div class="mt-4 text-center">
                Already have an account? <router-link class="font-bold" to="/login"> Login </router-link>
            </div>
        </div>
    </div>
</template>
