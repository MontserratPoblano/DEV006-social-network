/* eslint-disable no-alert */
// eslint-disable-next-line import/no-unresolved
import { createUserWithEmailAndPassword, GoogleAuthProvider,
   signInWithPopup,signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js';
import { auth, db } from './firebase.js';
import {collection,addDoc} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
// import { showMessage } from './message.js';

export async function registerUser(email, password) {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      alert('Email is already in use');
    } else if (error.code === 'auth/invalid-email') {
      alert('Invalid email please try again');
    } else if (error.code === 'auth/weak-password') {
      alert('Password is too weak, it should contain at least 6 characters');
    }
  }
}

export async function registerSignIn(auth,email, password) {
 try {

    const credentials=await signInWithEmailAndPassword(auth,email,password);
    console.log(credentials)
 } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode)
    console.log(errorMessage)
 }
}

export async function registerWithGoogle() {
  const provider = new GoogleAuthProvider();
  try {
    const credentials=await signInWithPopup(auth, provider);
    alert("Welcome"+credentials.user.displayName, "success!")
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
}

export async function post(description){
  try {
   const post= await addDoc(collection(db,"postDescription"),{
    user:user.displayName,
    description
  });
}catch(error){
  console.log(error)
}
}

// export async function validationEmail() {
//   try {
//     const verificationEmail = sendEmailVerification(auth.currentUser);
//     console.log(verificationEmail);
//   } catch (error) {
//     console.log(error);
//   }
// }

// Email verification sent!
// ...
