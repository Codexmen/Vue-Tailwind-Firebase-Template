import {getAuth, connectAuthEmulator, signInWithEmailAndPassword, createUserWithEmailAndPassword,  signOut} from 'firebase/auth';
import {ref} from 'vue';

import {app} from '/src/services/firebase';

const auth = getAuth(app);

function mapErrorsToMessage(errorCode) {
    console.log(`errorCode: ${errorCode}`)
    switch (errorCode) {
        case 'auth/invalid-email':
            return 'You enter invalid email'
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

if (import.meta.env.DEV) {
    connectAuthEmulator(auth, "http://localhost:9099");
}


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


