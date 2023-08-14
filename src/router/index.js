import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '/src/pages/LoginForm.vue';
import ForgotPassword from '/src/components/forms/ForgotPassword.vue';
import HomePage from '/src/pages/HomePage.vue';
import UserAccountPage from '/src/pages/UserAccount.vue';
import SignUpPage from '/src/pages/SignUp.vue';
import CounterPage from '/src/pages/CounterPage.vue';
import { isUserLoggedInPromise } from '../useUser';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'index',
            component: HomePage,
            meta: {
                requiresAuth: false,
                withHeader: true,
            },
        },
        {
            path: '/home',
            name: 'home',
            component: HomePage,
            meta: {
                requiresAuth: false,
                withHeader: true,
            },
        },
        {
            path: '/account',
            name: 'account',
            component: UserAccountPage,
            meta: {
                requiresAuth: false,
                withHeader: true,
            },
        },
        {
            path: '/login',
            name: 'login',
            component: LoginPage,
            meta: {
                requiresAuth: false,
            },
        },
        {
            path: '/signup',
            name: 'SignUp',
            component: SignUpPage,
            meta: {
                requiresAuth: false,
            },
        },
        {
            path: '/forgot-password',
            name: 'ForgotPassword',
            component: ForgotPassword,
            meta: {
                requiresAuth: false,
            },
        },
        {
            path: '/counter',
            name: 'counter',
            component: CounterPage,
            meta: {
                requiresAuth: true,
            },
        },
    ],
});

router.beforeEach(async (to, from, next) => {
    const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
    const isLoggedIn = await isUserLoggedInPromise();

    if (requiresAuth && !isLoggedIn) {
        next('/');
    } else {
        console.log('render route');
        next();
    }
});
export default router;
