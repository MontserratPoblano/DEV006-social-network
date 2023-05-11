import { registerUser, validationEmail } from '../lib';

function signup(navigateTo) {
  const sectionSignUp = document.createElement('section');
  const buttonReturn = document.createElement('button');
  const formSignUp = document.createElement('form');
  const currentCode = document.createElement('p');
  const userSignUp = document.createElement('p');
  const inputUserSignUp = document.createElement('input');
  const emailSignUp = document.createElement('p');
  const inputEmailSignUp = document.createElement('input');
  const passwordSignUp = document.createElement('p');
  const inputPasswordSignUp = document.createElement('input');
  const confirmPassword = document.createElement('p');
  const inputConfirmPasswordSignUp = document.createElement('input');
  const buttonSignUp = document.createElement('button');

  currentCode.textContent = 'current code ****';
  inputUserSignUp.placeholder = 'Enter user';
  inputEmailSignUp.placeholder = 'Enter email';
  inputPasswordSignUp.placeholder = 'Enter password';
  inputConfirmPasswordSignUp.placeholder = 'confirm password';
  userSignUp.textContent = 'User name';
  emailSignUp.textContent = 'E-mail';
  passwordSignUp.textContent = 'Password';
  confirmPassword.textContent = 'Confirm password';
  buttonSignUp.textContent = 'SignUp';
  buttonReturn.textContent = 'Back';
  buttonReturn.classList.add('buttonReturn');

  formSignUp.classList.add('container-formSignUp');
  currentCode.classList.add('paragraph-signUp');
  userSignUp.classList.add('paragraph-signUp');
  emailSignUp.classList.add('paragraph-signUp');
  passwordSignUp.classList.add('paragraph-signUp');
  confirmPassword.classList.add('paragraph-signUp');
  inputUserSignUp.classList.add('input-userSignUp');
  inputEmailSignUp.classList.add('input-userSignUp');
  inputPasswordSignUp.classList.add('input-userSignUp');
  inputConfirmPasswordSignUp.classList.add('input-userSignUp');
  buttonSignUp.classList.add('btn-windowSignUp');

 



  buttonReturn.addEventListener('click', () => {
    navigateTo('/');
  });

  buttonSignUp.addEventListener('click', (e) => {
    e.preventDefault();
    registerUser(inputEmailSignUp.value, inputPasswordSignUp.value);
    validationEmail(inputEmailSignUp.value);
  });

  formSignUp.append(
    currentCode,
    userSignUp,
    inputUserSignUp,
    emailSignUp,
    inputEmailSignUp,
    passwordSignUp,
    inputPasswordSignUp,
    confirmPassword,
    inputConfirmPasswordSignUp,
    buttonSignUp,
  );
  sectionSignUp.append(buttonReturn, formSignUp);

  return sectionSignUp;
}

export default signup;
