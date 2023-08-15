// TODO: move to init file and set as env vars
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '/src/firebase.conf.js';

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
