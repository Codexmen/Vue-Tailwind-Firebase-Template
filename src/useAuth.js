import { initializeApp } from "firebase/app";
import {getAuth, connectAuthEmulator, signInWithEmailAndPassword, createUserWithEmailAndPassword,  signOut} from 'firebase/auth';
import {ref} from 'vue';

// TODO: move to init file and set as env vars
const firebaseConfig = {
    apiKey: "AIzaSyDqJ8SAJQxmMeANiWEI1tfuNILtZFVRoUk",
    authDomain: "abstract-ring-262510.firebaseapp.com",
    projectId: "abstract-ring-262510",
    storageBucket: "abstract-ring-262510.appspot.com",
    messagingSenderId: "116442611422",
    appId: "1:116442611422:web:b54def3ffbd30c7dfbcc4f",
    measurementId: "G-0CLJYHJ8HW"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


function mapErrorsToMessage(errorCode) {
    switch (errorCode) {
        case 'auth/invalid-email':
        case 'auth/user-not-found':
        case 'auth/wrong-password':
            return 'Email or password is wrong';
        case 'auth/user-disabled':
            return 'user blocked';
        default:
            return 'Something went wrong';
    }
}

// TODO: remove for prod
connectAuthEmulator(auth, "http://localhost:9099");

function useAuth() {
    const errorMessage = ref('');
    const errorCode = ref('');
    const login = (email, password) => {
        errorMessage.value = ''
        errorCode.value = ''
        return signInWithEmailAndPassword(auth, email, password)
            .then(()=> {
                return true;
            })
            .catch((error) => {
                errorMessage.value = mapErrorsToMessage(error.code)
            });
    }
    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                return true;
            })
            .catch((error) => {
                errorMessage.value = mapErrorsToMessage(error.code)
        });
    };
    const logout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }
    return {login, logout, signUp, errorMessage, errorCode}
}
export {auth, app, useAuth}


