import { ref } from 'vue';
import { auth } from './useAuth';

const userData = ref({});
const userSettings = ref({
    darkMode: false,
});
const isLoggedIn = ref(false);

auth.onAuthStateChanged((user) => {
    userData.value = user;
    isLoggedIn.value = !!user;
});

// Source: https://dev.to/gautemeekolsen/vue-guard-routes-with-firebase-authentication-f4l
export const isUserLoggedInPromise = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            unsubscribe();
            resolve(!!user);
        }, reject);
    });
};

export default function useUser() {
    return { userData, userSettings, isLoggedIn };
}
