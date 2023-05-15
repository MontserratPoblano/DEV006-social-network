// Import the functions you need from the SDKs you need
// eslint-disable-next-line import/no-unresolved
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js';
// eslint-disable-next-line import/no-unresolved
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js';
import {getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDPY0DEQigOuhm-9XwCql-1hwpBr10oVfg',
  authDomain: 'social-network-6d91d.firebaseapp.com',
  projectId: 'social-network-6d91d',
  storageBucket: 'social-network-6d91d.appspot.com',
  messagingSenderId: '544585531141',
  appId: '1:544585531141:web:2654e881027f760ae0c16c',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
