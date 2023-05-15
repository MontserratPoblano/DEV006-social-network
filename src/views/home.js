import { registerSignIn, registerWithGoogle } from '../lib/index.js';

function home(navigateTo) {
  const section = document.createElement('section');

  const textHome = document.createElement('h1');
  textHome.textContent = 'Home page';
  textHome.classList.add('homePage');

  const title = document.createElement('h2');
  title.textContent = 'Community of Buildings';
  title.className = 'title';

  const container = document.createElement('div');
  container.className = 'container-app';
  container.id = 'container-inputs';

  const imageBuilding = document.createElement('img');
  imageBuilding.src = ('./images/building.png');
  imageBuilding.classList.add('app-img');

  const description = document.createElement('p');
  description.textContent = 'Platform for the neighbors of a community where they can sell, give away, buy whatever they deem convenient';
  description.className = 'description-app';

  const formHome=document.createElement('form');
  formHome.className='form-home'
  const labelEmailHome=document.createElement('label');
  labelEmailHome.textContent='Email';
  labelEmailHome.htmlFor='email-home';
  labelEmailHome.className='name-email';
  // const email = document.createElement('p');
  // email.textContent = 'Email';
  // email.className = 'name-email';
  const inputEmail = document.createElement('input');
  inputEmail.type='email';
  inputEmail.placeholder='Enter email';
  inputEmail.required='true';
  inputEmail.autocomplete='on'
  inputEmail.id='email-home';
  inputEmail.className = 'input-email';
  
  // const password = document.createElement('p');
  // password.textContent = 'Password';
  // password.className = 'name-password';

  const labelPasswordHome=document.createElement('label');
  labelPasswordHome.textContent='Password';
  labelPasswordHome.htmlFor='password-home';
  labelPasswordHome.className='name-password';

  const inputPassword = document.createElement('input');
  inputPassword.type='password';
  inputPassword.placeholder='Enter password'
  inputPassword.required='true';
  inputPassword.autocomplete='on';
  inputPassword.id='password-home';
  inputPassword.classList.add('inputPassword');
  inputPassword.className = 'inputPassword';

  const forgotPassword = document.createElement('a');
  forgotPassword.textContent = 'Forgot Password';
  forgotPassword.href = '/forgotPassword';
  forgotPassword.classList.add('btnForgotP');
  forgotPassword.addEventListener('click', () => {
    navigateTo('/forgotPassword');
  });

  const btnSignIn = document.createElement('button');
  btnSignIn.textContent = 'Sign In';
  btnSignIn.type='submit';
  btnSignIn.classList.add('btnSignIn');
  // btnSignIn.addEventListener('click', () => {
  //   navigateTo('/profile');
  // });

  const signUp = document.createElement('a');
  signUp.textContent = 'Sign Up';
  signUp.href = '/signup';
  signUp.classList.add('btnSignUp');

  const btnGoogle = document.createElement('button');
  btnGoogle.classList.add('btnGoogle');
  btnGoogle.textContent = 'Sign In With Google';


  formHome.append(labelEmailHome,inputEmail,labelPasswordHome,inputPassword,forgotPassword,
    btnSignIn,btnGoogle,signUp)

  btnGoogle.addEventListener('click', () => {
    registerWithGoogle();
    setTimeout(() => {
      navigateTo('/board');
    }, 3000);
  });

  signUp.addEventListener('click', () => {
    navigateTo('/signup');
  });

  btnSignIn.addEventListener('click', (e) => {
    e.preventDefault()
    // registerSignIn(auth,inputEmail.value,inputPassword.value)
    // console.log(registerSignIn)
    navigateTo('/board');
  });


  container.append(
    title,
    imageBuilding,
    description,
    formHome
    // email,
    // inputEmail,
    // password,
    // inputPassword,
    // forgotPassword,
    // btnSignIn,
    // btnGoogle,
    // signUp,
  );
  section.append(textHome, container);
  return section;
}

export default home;
