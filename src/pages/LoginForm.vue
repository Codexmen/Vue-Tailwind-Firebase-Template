<script setup>
import { computed, reactive } from 'vue';
import appSettings from '/src/app.conf.js';
import { useRouter } from 'vue-router';
import { useVuelidate } from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';

import Button from '/src/components/base/BaseButton.vue';

import { useAuth } from '/src/useAuth';
import FormInput from '../components/base/FormInput.vue';

const router = useRouter();
const { login, loginWithGoogle, errorMessage } = useAuth();
const state = reactive({
    loginField: '',
    password: '',
});
const rules = {
    loginField: { required, email, $lazy: true },
    password: { required },
};
const isSubmitDisabled = computed(() => {
    return !state.loginField || !state.password;
});
const v$ = useVuelidate(rules, state);
const redirectAfterLogin = () => {
    router.push(appSettings.defaultRouteAfterLogin);
};
async function submit() {
    const isFormCorrect = await v$.value.$validate();
    if (!isFormCorrect) return;
    const isLoggedIn = await login(state.loginField, state.password);
    if (isLoggedIn) {
        redirectAfterLogin();
    }
}
async function loginWithGoogleProvider() {
    const isLoggedIn = await loginWithGoogle();
    if (isLoggedIn) {
        redirectAfterLogin();
    }
}
</script>

<template>
    <div class="md:w-[480px] mx-auto px-4">
        <div class="prose prose-2xl text-center max-w-full">Log In</div>
        <div>
            <div v-if="errorMessage" class="text-red-800 prose prose-sm">
                {{ errorMessage }}
            </div>
            <div v-if="appSettings.auth.withEmailSignIn">
                <div class="my-2">
                    <FormInput v-model="v$.loginField.$model" :errors="v$.loginField.$errors" label="Email address:" />
                </div>
                <div class="my-2">
                    <FormInput
                        v-model="v$.password.$model"
                        :errors="v$.password.$errors"
                        type="password"
                        label="Password:"
                    />
                </div>
            </div>
            <div class="my-2">
                <Button
                    v-if="appSettings.auth.withEmailSignIn"
                    theme="primary"
                    class="w-full my-2"
                    :disabled="isSubmitDisabled"
                    label="Login"
                    @click="submit"
                />
                <Button
                    theme="transparent"
                    class="w-full my-2"
                    icon-before="flat-color-icons:google"
                    label="Sign in with Google"
                    @click="loginWithGoogleProvider"
                />
            </div>
            <div v-if="appSettings.auth.withForgotPassword" class="mt-4 text-center hover:underline">
                <router-link to="/forgot-password"> Forgot password? </router-link>
            </div>
            <div v-if="appSettings.auth.withEmailSignUp" class="mt-4 text-center">
                Dont have an account?
                <router-link to="/signup" class="font-bold text-red-600 hover:underline"> Sign In </router-link>
            </div>
        </div>
    </div>
</template>
