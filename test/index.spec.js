// importamos la funcion que vamos a testear
// import { myFunction } from '../src/lib/index';
import home from '../src/views/home.js';

describe('myFunction', () => {
  it('consigue renderizar home', () => {
    const navigateTo = jest.fn();
    document.body.append(home(navigateTo));
    const signup = document.querySelector('.btnSignUp');
    signup.click();
    expect(navigateTo).toHaveBeenCalledWith('/signup');
  });
});
