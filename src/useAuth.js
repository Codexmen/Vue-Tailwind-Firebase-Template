import {
    getAuth,
    connectAuthEmulator,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    GoogleAuthProvider,
} from 'firebase/auth';
import { ref } from 'vue';

import { app } from '/src/services/firebase';
import { emulators } from './firebase.conf';

const auth = getAuth(app);
if (import.meta.env.DEV) {
    connectAuthEmulator(auth, emulators.authUrl);
}

function mapErrorsToMessage(errorCode) {
    switch (errorCode) {
        case 'auth/invalid-email':
            return 'You enter invalid email';
        case 'auth/user-not-found':
        case 'auth/wrong-password':
            return 'Email or password is wrong';
        case 'auth/email-already-in-use':
            return 'Email already exist';
        case 'auth/user-disabled':
            return 'user blocked';
        case 'auth/weak-password':
            return 'You enter weak password';
        default:
            return 'Something went wrong';
    }
}

function useAuth() {
    const errorMessage = ref('');
    const errorCode = ref('');
    const login = (email, password) => {
        errorMessage.value = '';
        errorCode.value = '';
        return signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                return true;
            })
            .catch((error) => {
                errorMessage.value = mapErrorsToMessage(error.code);
            });
    };
    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                return true;
            })
            .catch((error) => {
                errorMessage.value = mapErrorsToMessage(error.code);
            });
    };
    const logout = () => {
        signOut(auth)
            .then(() => {
                // Sign-out successful.
            })
            .catch(() => {
                // An error happened.
            });
    };
    const loginWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
            .then(() => {
                return true;
            })
            .catch((error) => {
                errorMessage.value = mapErrorsToMessage(error.code);
            });
    };
    return { login, logout, signUp, errorMessage, errorCode, loginWithGoogle };
}
export { auth, app, useAuth };
