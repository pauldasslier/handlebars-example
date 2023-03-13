import Handlebars from 'handlebars';

import { HomeLink } from '../../components/HomeLink';
import signUpTpl from 'bundle-text:./signUpTpl.hbs';

export const SignUp = () => {
  const precompiled = (new Function('return ' + Handlebars.precompile(signUpTpl))());
  const template = Handlebars.template(precompiled);

  return template({ link: HomeLink({ title: 'Тык' })});
};