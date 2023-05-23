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
  deleteDoc,
  doc,
  onSnapshot,
  updateDoc,
  getDoc,
} from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js';

import { auth, db } from './firebase.js';
// import { showMessage } from './message.js';

export async function registerUser(auth, email, password) {
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
    console.log(docRef);
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

// export function deletePost(id) {
//   return new Promise((resolve, reject) => {
//     try {
//       deleteDoc(doc(db, 'postDescription', id));
//       resolve();
//     } catch (error) {
//       reject(error);
//     }
//   });
// }

export async function deletePost(id) {
  try {
    await deleteDoc(doc(db, 'postDescription', id));
  } catch (error) {
    console.log(error);
  }
}

// export const onGetPost = (callback) => onSnapshot(collection(db, 'postDescription'), callback);

export function onGetPost(callback) {
  onSnapshot(collection(db, 'postDescription'), callback);
}

export async function editPost() {
  try {
    const descriptionRef = doc(db, 'postDescription');
    console.log(descriptionRef);
    await updateDoc(descriptionRef, {
      description: true,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getPost(id) {
  try {
    const getDocPost = await getDoc(doc(db, 'postDescription', id));
    return getDocPost;
  } catch (error) {
    console.log(error);
  }
}

// *****PREGUNTAR EN OH LA DIFERENCIA DE ESTA FUNCION CON LA LINEA 142*****
// export async function updatePost(id, newFields) {
//   try {
//     const updateDocPost = await updateDoc(doc(db, 'posDescription', id), newFields);
//     return updateDocPost;
//   } catch (error) {
//     console.log(error);
//   }
// }

export const updatePost = (id, newFields) => updateDoc(doc(db, 'postDescription', id), newFields);

// const unsub = (callback) => onSnapshot(collection(db, 'postDescription'), callback);
// console.log(unsub);

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
