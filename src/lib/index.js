import { createUserWithEmailAndPassword, sendEmailVerification } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js';
import { auth } from './firebase.js';

export async function registerUser(email, password) {
  try {
    const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) 
  
}
export async function validationEmail(email) {
  try {
    const verificationEmail = sendEmailVerification(auth.currentUser);
    console.log(verificationEmail);
  } catch (error) {
    console.log(error);
  }
}

// Email verification sent!
// ...
