import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
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
