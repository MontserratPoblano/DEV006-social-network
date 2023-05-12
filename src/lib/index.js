import { createUserWithEmailAndPassword, sendEmailVerification } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js';
import { auth } from './firebase.js';
import { showMessage } from './message.js';

export async function registerUser(email, password) {
  try {
    const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {

    if(error.code ==="auth/email-already-in-use"){
      alert("Email is already in use")
    }else if(error.code ==="auth/invalid-email"){
      alert("Invalid email please try again")
    }else if(error.code === "auth/weak-password"){
      alert("Password is too weak, it should contain at least 6 characters")
    }
   
  }
  
}

export async function validationEmail() {
  try {
    const verificationEmail = sendEmailVerification(auth.currentUser);
    console.log(verificationEmail);
  } catch (error) {
    console.log(error);
  }
}

// Email verification sent!
// ...
