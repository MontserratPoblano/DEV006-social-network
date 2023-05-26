// Punto de entrada de la aplicación
import profile from './views/profile.js';
import home from './views/home.js';
import signup from './views/signup.js';
import error from './views/error.js';
import forgotPassword from './views/forgotPassword.js';
import newPassword from './views/newPassword.js';
import board from './views/board.js';
import settingprofile from './views/settingprofile.js';

const routes = [
  { path: '/', component: home },
  { path: '/signup', component: signup },
  { path: '/profile', component: profile },
  { path: '/forgotPassword', component: forgotPassword },
  { path: '/newPassword', component: newPassword },
  { path: '/error', component: error },
  { path: '/board', component: board },
  { path: '/settingprofile', component: settingprofile },
];

const defaultRoute = '/';
const root = document.getElementById('root');

function navigateTo(hash) {
  const route = routes.find((routeFound) => routeFound.path === hash);

  if (route && route.component) {
    window.history.pushState(
      {},
      route.path,
      window.location.origin + route.path,
    );

    if (root.firstChild) {
      root.removeChild(root.firstChild);
    }
    root.appendChild(route.component(navigateTo));
  } else {
    navigateTo('/error');
  }
}

window.onpopstate = () => {
  navigateTo(window.location.pathname);
};
navigateTo(window.location.pathname || defaultRoute);
