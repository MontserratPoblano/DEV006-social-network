/* eslint-disable operator-linebreak */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */

import { registerWithGoogle, logIn } from '../lib/index.js';

function home(navigateTo) {
  const section = document.createElement('section');
  const title = document.createElement('h2');
  const description = document.createElement('p');
  const container = document.createElement('div');
  const formHome = document.createElement('form');
  const labelEmailHome = document.createElement('label');
  const inputEmail = document.createElement('input');
  const imageBuilding = document.createElement('img');
  const messageErrorHome = document.createElement('p');
  const labelPasswordHome = document.createElement('label');
  const inputPassword = document.createElement('input');
  const notificationHome = document.createElement('div');
  const forgotPassword = document.createElement('a');
  const btnLogIn = document.createElement('button');
  const textBeforeSignUp = document.createElement('span');
  const signUp = document.createElement('button');
  const btnGoogle = document.createElement('img');

  title.textContent = 'Community of Buildings';
  description.textContent = 'Platform for the neighbors of a community where they can sell, give away, buy whatever they deem convenient';
  labelEmailHome.textContent = 'Email';
  labelPasswordHome.textContent = 'Password';
  forgotPassword.textContent = 'Forgot Password?';
  textBeforeSignUp.textContent = 'Don\'t have an account? ';
  btnLogIn.textContent = 'Log In';
  signUp.textContent = 'Sign Up';
  
  title.id = 'title';
  description.id = 'description-app';
  imageBuilding.id = 'app-img';
  formHome.id = 'form-home';
  labelEmailHome.id = 'name-email';
  labelPasswordHome.id = 'name-password';
  inputEmail.id = 'input-email';
  inputPassword.id = 'input-password';
  btnLogIn.id = 'btnLogIn';
  signUp.id = 'btnSignUp';
  btnGoogle.id = 'btnGoogle';
  textBeforeSignUp.id = 'text';
  forgotPassword.id = 'btnForgotP';
  messageErrorHome.id = 'messageError-home';
  notificationHome.id = 'notification';
 
  container.className = 'container-app';
 
  imageBuilding.src = ('../images/building.png');
  imageBuilding.alt = 'Imagen del edificio';
  btnGoogle.src = ('../images/btn_google_signin_dark_focus_web.png');
  btnGoogle.alt = 'Inicio sesión con Google';
  
  signUp.href = '/signup';
  forgotPassword.href = '/forgotPassword';

  btnLogIn.type = 'submit';
  inputPassword.type = 'password';
  inputEmail.type = 'email';

  labelPasswordHome.htmlFor = 'password-home';
  labelEmailHome.htmlFor = 'email-home';

  inputEmail.placeholder = 'Enter email';
  inputPassword.placeholder = 'Enter password';

  inputEmail.required = 'true';
  inputPassword.required = 'true';
  
  inputEmail.autocomplete = 'on';
  inputPassword.autocomplete = 'on';

  forgotPassword.addEventListener('click', () => {
    navigateTo('/forgotPassword');
  });

  signUp.addEventListener('click', (e) => {
    e.preventDefault();
    navigateTo('/signup');
  });

  btnGoogle.addEventListener('click', () => {
    const resultPromise = registerWithGoogle();
    resultPromise.then((user) => {
      // eslint-disable-next-line no-alert
      alert(`Welcome ${user.displayName}!`);
      navigateTo('/board');
    }).catch((error) => {
      // eslint-disable-next-line no-alert
      alert('Failed register, try again', error);
    });
  });

  btnLogIn.addEventListener('click', (e) => {
    e.preventDefault();
    const signInPromise = logIn(inputEmail.value, inputPassword.value);
    signInPromise.then((user) => {
      notificationHome.style.display = 'block';
      notificationHome.textContent = `Welcome ${user}`; 
      setTimeout(() => {
        notificationHome.style.display = 'none';
        navigateTo('/board');
      }, 2000);
    }).catch((error) => {
      if (error === 'auth/wrong-password') {
        messageErrorHome.textContent = 'Wrong password...';
        messageErrorHome.style.visibility = 'visible';
        inputPassword.setAttribute('style', 'background-color:#FF5A5F;');
        setTimeout(() => {
          messageErrorHome.style.visibility = 'hidden';
          inputPassword.removeAttribute('style');
        }, 2000);
      } else if (error === 'auth/user-not-found') {
        messageErrorHome.textContent = 'User not found...';
        messageErrorHome.style.visibility = 'visible';
        inputEmail.setAttribute('style', 'background-color:#FF5A5F;');
        inputPassword.setAttribute('style', 'background-color:#FF5A5F;');
        setTimeout(() => {
          messageErrorHome.style.visibility = 'hidden';
          inputEmail.removeAttribute('style');
          inputPassword.removeAttribute('style');
        }, 2000);
      } else if (error === 'auth/invalid-email') {
        messageErrorHome.textContent = 'Invalid email...';
        messageErrorHome.style.visibility = 'visible';
        inputEmail.setAttribute('style', 'background-color:#FF5A5F;');
        setTimeout(() => {
          messageErrorHome.style.visibility = 'hidden';
          inputEmail.removeAttribute('style');
          inputPassword.removeAttribute('style');
        }, 2000);
      }
    });
  });

  formHome.append(
    labelEmailHome,
    inputEmail,
    labelPasswordHome,
    inputPassword,
    messageErrorHome,
    forgotPassword,
    btnLogIn,
    btnGoogle,
    textBeforeSignUp,
    signUp,
  );

  container.append(
    title,
    imageBuilding,
    description,
    formHome,
    notificationHome,
  );

  section.appendChild(container);
  return section;
}

export default home;
