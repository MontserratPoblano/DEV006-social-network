import { registerUser, validationEmail } from '../lib';

function signup(navigateTo) {
  const sectionSignUp = document.createElement('section');
  const buttonReturn = document.createElement('button');
  buttonReturn.textContent = 'Back';
  buttonReturn.classList.add('buttonReturn');

  const formSignUp = document.createElement('form');
  formSignUp.classList.add('container-formSignUp');

  const currentCode = document.createElement('p');
  currentCode.textContent = 'current code ****';
  currentCode.classList.add('paragraph-signUp');

  const userSignUp = document.createElement('p');
  userSignUp.textContent = 'User name';
  userSignUp.classList.add('paragraph-signUp');


  const inputUserSignUp = document.createElement('input');
  inputUserSignUp.placeholder = 'Enter user';
  inputUserSignUp.type="text";
  inputUserSignUp.required=true;
  inputUserSignUp.classList.add('input-userSignUp');

  const emailSignUp = document.createElement('p');
  emailSignUp.textContent = 'E-mail';
  emailSignUp.classList.add('paragraph-signUp');

  const inputEmailSignUp = document.createElement('input');
  inputEmailSignUp.placeholder = 'Enter email';
  inputEmailSignUp.required=true;
  inputEmailSignUp.classList.add('input-userSignUp');
  

  const passwordSignUp = document.createElement('p');
  passwordSignUp.textContent = 'Password';
  passwordSignUp.classList.add('paragraph-signUp');

  const inputPasswordSignUp = document.createElement('input');
  inputPasswordSignUp.placeholder = 'Enter password';
  inputPasswordSignUp.required=true;
  inputPasswordSignUp.type="password";
  inputPasswordSignUp.classList.add('input-userSignUp');
  

  const confirmPassword = document.createElement('p');
  confirmPassword.textContent = 'Confirm password';
  confirmPassword.classList.add('paragraph-signUp');


  const inputConfirmPasswordSignUp = document.createElement('input');
  inputConfirmPasswordSignUp.placeholder = 'confirm password';
  inputConfirmPasswordSignUp.required=true;
  inputConfirmPasswordSignUp.autocomplete=true;
  inputConfirmPasswordSignUp.type="password";
  inputConfirmPasswordSignUp.classList.add('input-userSignUp');


  const buttonSignUp = document.createElement('input');
  buttonSignUp.classList.add('btn-windowSignUp');
  buttonSignUp.textContent = 'SignUp';
  buttonSignUp.type="submit";
 
  

   buttonReturn.addEventListener('click', () => {
    navigateTo('/');
  });

  formSignUp.addEventListener("submit", (event) => {
    event.preventDefault();
    
    if(inputPasswordSignUp.value===inputConfirmPasswordSignUp.value && formSignUp.checkValidity()){
      registerUser(inputEmailSignUp.value, inputPasswordSignUp.value);
      validationEmail(inputEmailSignUp.value);
      // Envía el formulario a Firebase
    }else if(inputPasswordSignUp.value !==inputConfirmPasswordSignUp.value) {
      alert("las contraseñas no son iguales")
    }else{
      formSignUp.reportValidity();
      
    }
  });
  
  // buttonSignUp.addEventListener('click', () => {
    
  //  if(inputPasswordSignUp.value===inputConfirmPasswordSignUp.value){
  //   registerUser(inputEmailSignUp.value, inputPasswordSignUp.value);
  //   validationEmail(inputEmailSignUp.value);
  //   }
  //   else{
  //     alert("el password no es el mismo")
  //   }
  // });

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
