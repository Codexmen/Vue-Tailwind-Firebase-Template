# This is demo project that uses Firebase as backend.

[Demo](https://abstract-ring-262510.web.app/) is deployed to Firebase hosting.

What is included:
- Sign In/Up with Google or login/password
- Form validation with Vuelidate
- Tailwind CSS for styling
- Page layouts with common components like Header/Footer
- Protected routes for logged users
- Eslint and prettier for code formatting
- TBD: user settings stored in DB
- TBD: Cypress tests

# How to install Firebase emulators

`npm install -g firebase-tools` or `yarn add firebase-tools`

# How to start dev server and emulators

Start dev server:
`npm run dev`

Start Firebase emulators:
`firebase emulators:start`

# How to deploy to Firebase hosting
Run `firebase deploy` to deploy to Firebase hosting.