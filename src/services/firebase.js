// TODO: move to init file and set as env vars
import {initializeApp} from "firebase/app";

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
export const app = initializeApp(firebaseConfig);
