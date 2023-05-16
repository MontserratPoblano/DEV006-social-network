/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable consistent-return */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-alert */
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js';
import {
  collection,
  addDoc,
  getDocs,
} from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js';
import { auth, db } from './firebase.js';
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

export async function registerSignIn(auth, email, password) {
  try {
    const credentials = await signInWithEmailAndPassword(auth, email, password);
    return credentials;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
  }
}

export async function registerWithGoogle() {
  const provider = new GoogleAuthProvider();
  try {
    const credentials = await signInWithPopup(auth, provider);
    return credentials.user;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    return error;
  }
}

export async function postBoard(description) {
  try {
    const docRef = await addDoc(collection(db, 'postDescription'), {
      description,
    });
    // console.log('Document written with ID: ', docRef.id);
  } catch (error) {
    // console.log(error);
  }
}

export async function getPosts() {
  try {
    const querySnapshot = await getDocs(collection(db, 'postDescription'));
    return querySnapshot;
  } catch (error) {
    console.log(error);
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
