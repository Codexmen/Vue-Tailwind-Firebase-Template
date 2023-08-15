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
            sectionName: undefined,
            links: [{ label: 'Home', path: '/home' }],
        },
    ],
};

export default settings;
