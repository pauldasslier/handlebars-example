import Handlebars from 'handlebars';

import { signInTpl } from './signInTpl';

export const SignIn = () => {
  return Handlebars.compile(signInTpl)();
};
