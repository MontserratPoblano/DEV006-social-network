import { registerUser, addDisplayName } from '../lib/index.js';
import { auth } from '../lib/firebase.js';

function signup(navigateTo) {
  const sectionSignUp = document.createElement('section');
  const buttonReturn = document.createElement('button');
  const formSignUp = document.createElement('form');
  const userSignUp = document.createElement('p');
  const inputUserSignUp = document.createElement('input');
  const emailSignUp = document.createElement('p');
  const inputEmailSignUp = document.createElement('input');
  const passwordSignUp = document.createElement('p');
  const inputPasswordSignUp = document.createElement('input');
  const confirmPassword = document.createElement('p');
  const inputConfirmPasswordSignUp = document.createElement('input');
  const buttonSignUp = document.createElement('button');
  const notification = document.createElement('div');
  const messageConfirmPassword = document.createElement('p');

  buttonReturn.id = 'buttonReturn';
  formSignUp.classList.add('container-formSignUp');

  userSignUp.classList.add('paragraph-signUp');
  passwordSignUp.classList.add('paragraph-signUp');

  emailSignUp.classList.add('paragraph-signUp');
  inputEmailSignUp.classList.add('input-userSignUp');
  inputPasswordSignUp.classList.add('input-userSignUp');
  confirmPassword.classList.add('paragraph-signUp');
  buttonSignUp.classList.add('btn-windowSignUp');
  notification.id = 'notification';
  inputConfirmPasswordSignUp.classList.add('input-userSignUp');
  inputUserSignUp.classList.add('input-userSignUp');
  messageConfirmPassword.classList.add('confirm-passwordmessage');

  userSignUp.textContent = 'User name';
  buttonReturn.textContent = 'Back';
  emailSignUp.textContent = 'E-mail';
  passwordSignUp.textContent = 'Password';
  confirmPassword.textContent = 'Confirm password';
  buttonSignUp.textContent = 'Sign Up';

  inputUserSignUp.placeholder = 'Enter user';
  inputEmailSignUp.placeholder = 'Enter email';
  inputPasswordSignUp.placeholder = 'Enter password';
  inputConfirmPasswordSignUp.placeholder = 'Confirm password';

  inputUserSignUp.required = true;
  inputConfirmPasswordSignUp.required = true;
  inputEmailSignUp.required = true;
  inputPasswordSignUp.required = true;

  inputEmailSignUp.type = 'email';
  inputPasswordSignUp.type = 'password';
  inputConfirmPasswordSignUp.type = 'password';

  userSignUp.autocomplete = 'on';

  buttonReturn.addEventListener('click', () => {
    navigateTo('/');
  });

  formSignUp.addEventListener('submit', (e) => {
    e.preventDefault();
    if (inputPasswordSignUp.value !== inputConfirmPasswordSignUp.value) {
      messageConfirmPassword.textContent = 'Password do not match';
      messageConfirmPassword.style.visibility = 'visible';
      setTimeout(() => {
        messageConfirmPassword.style.visibility = 'hidden';
        formSignUp.reset();
      }, 10000);
    } else {
      const registerPromise = registerUser(auth, inputEmailSignUp.value, inputPasswordSignUp.value);
      registerPromise.then(() => {
        addDisplayName(inputUserSignUp.value).then(() => {
          notification.textContent = 'Registration successful!';
          notification.style.display = 'block';
          setTimeout(() => {
            notification.style.display = 'none';
            navigateTo('/');
          }, 2000);
        }).catch((error) => {
          console.log(error);
          console.log('Error al agregar el nombre de usuario al perfil:');
          notification.textContent = 'Registration failed. Please try again';
          notification.style.display = 'block';
          setTimeout(() => {
            notification.style.display = 'none';
          }, 3000);
        });
      });
    }
  });

  formSignUp.append(
    userSignUp,
    inputUserSignUp,
    emailSignUp,
    inputEmailSignUp,
    passwordSignUp,
    inputPasswordSignUp,
    confirmPassword,
    inputConfirmPasswordSignUp,
    messageConfirmPassword,
    buttonSignUp,
  );

  sectionSignUp.append(buttonReturn, formSignUp, notification);

  return sectionSignUp;
}

export default signup;
