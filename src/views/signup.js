import { registerUser } from '../lib';

function signup(navigateTo) {
  const sectionSignUp = document.createElement('section');
  const buttonReturn = document.createElement('button');
  buttonReturn.textContent = 'Back';
  buttonReturn.classList.add('buttonReturn');

  const formSignUp = document.createElement('form');
  formSignUp.classList.add('container-formSignUp');

  const userSignUp = document.createElement('p');
  userSignUp.textContent = 'User name';
  userSignUp.classList.add('paragraph-signUp');

  const inputUserSignUp = document.createElement('input');
  inputUserSignUp.placeholder = 'Enter user';
  // inputUserSignUp.type = 'text';
  inputUserSignUp.required = true;
  inputUserSignUp.classList.add('input-userSignUp');

  const emailSignUp = document.createElement('p');
  emailSignUp.textContent = 'E-mail';
  emailSignUp.classList.add('paragraph-signUp');

  const inputEmailSignUp = document.createElement('input');
  inputEmailSignUp.placeholder = 'Enter email';
  inputEmailSignUp.required = true;
  inputEmailSignUp.type = 'email';
  inputEmailSignUp.classList.add('input-userSignUp');

  const passwordSignUp = document.createElement('p');
  passwordSignUp.textContent = 'Password';
  passwordSignUp.classList.add('paragraph-signUp');

  const inputPasswordSignUp = document.createElement('input');
  inputPasswordSignUp.placeholder = 'Enter password';
  inputPasswordSignUp.required = true;
  inputPasswordSignUp.type = 'password';
  inputPasswordSignUp.classList.add('input-userSignUp');

  const confirmPassword = document.createElement('p');
  confirmPassword.textContent = 'Confirm password';
  confirmPassword.classList.add('paragraph-signUp');

  const inputConfirmPasswordSignUp = document.createElement('input');
  inputConfirmPasswordSignUp.placeholder = 'Confirm password';
  inputConfirmPasswordSignUp.required = true;
  // inputConfirmPasswordSignUp.autocomplete = true;
  inputConfirmPasswordSignUp.type = 'password';
  inputConfirmPasswordSignUp.classList.add('input-userSignUp');

  const buttonSignUp = document.createElement('button');
  buttonSignUp.classList.add('btn-windowSignUp');
  buttonSignUp.textContent = 'Sign Up';

  buttonReturn.addEventListener('click', () => {
    navigateTo('/');
  });

  formSignUp.addEventListener('submit', (e) => {
    e.preventDefault();
    if (formSignUp.checkValidity()) {
      if (inputPasswordSignUp.value !== inputConfirmPasswordSignUp.value) {
        inputConfirmPasswordSignUp.setCustomValidity('Passwords do not match');
        formSignUp.reportValidity();
        return;
      }
      inputConfirmPasswordSignUp.setCustomValidity('');
      registerUser(inputEmailSignUp.value, inputPasswordSignUp.value);
      // eslint-disable-next-line no-alert
      alert('Registration successful! Welcome to our platform');
      navigateTo('/board');
    } else {
      const inputs = formSignUp.querySelectorAll('input');
      inputs.forEach((input) => {
        if (input.checkValidity() === false) {
          const errorText = input.dataset.error || 'Complete this field';
          input.setCustomValidity(errorText);
        } else {
          input.setCustomValidity('');
        }
      });
      formSignUp.reportValidity();
    }
  });

  formSignUp.append(
    // currentCode,
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
