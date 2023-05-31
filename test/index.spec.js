/* eslint-disable max-len */
// importamos la funcion que vamos a testear
// import { myFunction } from '../src/lib/index';
import home from '../src/views/home.js';
import { registerWithGoogle } from '../src/lib/index.js';
// import { navigateTo } from '../src/main.js';

describe('myFunction', () => {
  it('consigue visualizar home', () => {
    const navigateTo = jest.fn();
    document.body.append(home(navigateTo));
    const signup = document.getElementById('btnSignUp');
    signup.click();
    expect(navigateTo).toHaveBeenCalledWith('/signup');
  });
});

// Mock del módulo index.js, y como 2do argumento se mockea la función registerWithGoogle haciendo que devuelva un objeto..
// ...con la propiedad displayName.
jest.mock('../src/lib/index.js', () => ({
  registerWithGoogle: jest.fn().mockResolvedValue({ displayName: 'Mon' }),
  logIn: jest.fn().mockResolvedValue({ user: { uid: 'user123' } }),
}));

// se ejecuta antes del describe para realizar una configuración previa.
// se crea un espía de la función alert del objeto window para rastrear y verificar si la función ha sido llamada.
// mockImplementation evita que se muestre una alerta real durante la ejecución de la prueba, por eso está vacia.
beforeEach(() => {
  jest.spyOn(window, 'alert').mockImplementation(() => {});
});

describe('probando alert de bienvenida con registro por google', () => {
  it('deberia mostrar un alert saludando al usuario', async () => {
    const google = document.getElementById('btnGoogle');
    google.click();
    await Promise.resolve();
    expect((registerWithGoogle)).toHaveBeenCalled();
    expect(window.alert).toHaveBeenCalledWith('Welcome Mon!');
  });
});

describe('Probando el input name', () => {
  it('el usuario ingresa su nombre en el input', async () => {
    const logIn = document.getElementById('btnLogIn');
    const inputEmail = document.getElementById('input-email');
    inputEmail.value = 'nombre@example.com'; // Simular ingreso de nombre de usuario
    logIn.click();
    await Promise.resolve();
    expect(inputEmail.value).not.toBe('');
  });
  it('el usuario ingresa su password en el input', async () => {
    const inputPassword = document.getElementById('input-password');
    const logIn = document.getElementById('btnLogIn');
    inputPassword.value = 'password123'; // Simular ingreso de contraseña
    logIn.click();
    await Promise.resolve();
    expect(inputPassword.value).not.toBe('');
  });
});
