This is demo project that uses Firebase as backend.
What include:

-   basic auth with google and login form
-   basic validation with Vuelidate
-   Tailwind CSS for styling
-   TBD: eslint and prettier for code formatting
-   TBD: cypress for e2e testing

# How to install Firebase emulators

`npm install -g firebase-tools` or `yarn add firebase-tools`

#How to start

npm run dev
firebase emulators:start

## Critical path

-   Test login with google
-   refactor Sign in form to use Vuelidate and new components
-   add screen for logged in user with info
-   Hide Firebase creds in env and split it to dev/prod
-   add application config
-   upload to github
-   add eslint and prettier
-   add cypress tests

#### Sources:

Auth delay + Router: https://dev.to/gautemeekolsen/vue-guard-routes-with-firebase-authentication-f4l

Auth: https://learnvue.co/tutorials/vue-firebase-authentication

Validation: https://learnvue.co/tutorials/intro-to-vuelidate#what-is-vuelidate
