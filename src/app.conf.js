const settings = {
    auth: {
        withForgotPassword: false,
        withEmailSignUp: true,
        withEmailSignIn: true,
    },
    title: 'Demo Vue + Firebase App',
    defaultRouteAfterLogin: '/home',
    defaultRoute: '/',
    headerLinks: [
        {
            label: 'Home',
            path: '/home',
            icon: undefined,
        },
    ],
    mobileHeaderLinks: [
        {
            label: 'Home',
            path: '/home',
            icon: undefined,
        },
        {
            label: 'Account',
            path: '/account',
            icon: undefined,
        },
    ],
    footerLinks: [
        {
            sectionTitle: 'Footer Section 1',
            links: [
                { label: 'Home', path: '/home' },
                { label: 'Login', path: '/login' },
            ],
        },
        {
            sectionTitle: 'Footer Section 2',
            links: [{ label: 'Sign Up', path: '/signup' }],
        },
    ],
};

export default settings;
