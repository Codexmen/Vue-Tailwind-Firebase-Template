import { createRouter, createWebHistory } from 'vue-router';
import settings from '/src/app.conf.js';
import LoginPage from '/src/pages/LoginForm.vue';
import ForgotPassword from '/src/components/forms/ForgotPassword.vue';
import HomePage from '/src/pages/HomePage.vue';
import UserAccountPage from '/src/pages/UserAccount.vue';
import SignUpPage from '/src/pages/SignUp.vue';
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
                title: (title) => `${title} - Home page`,
            },
        },
        {
            path: '/account',
            name: 'account',
            component: UserAccountPage,
            meta: {
                requiresAuth: true,
                withHeader: true,
                title: 'User Account',
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
    ],
    scrollBehavior(to) {
        //if to has hash then scroll to that hash
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
            };
        }
    },
});

router.beforeEach(async (to, from, next) => {
    const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
    const isLoggedIn = await isUserLoggedInPromise();

    if (requiresAuth && !isLoggedIn) {
        next('/');
    } else {
        next();
    }
});
router.afterEach((to) => {
    document.title =
        typeof to.meta.title === 'function' ? to.meta.title(settings.title) : to.meta.title || settings.title;
});
export default router;
