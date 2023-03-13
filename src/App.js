import { Main } from './pages/Main';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';

export const App = () => {
  switch (window.location.pathname) {
    case '/sign-in':
      return SignIn();
    case '/sign-up':
      return SignUp();
    default:
      return Main();
  }
};