import Handlebars from 'handlebars';

import { homeLinkTpl } from './homeLinkTpl';

export const HomeLink = ({ title = 'Go Home'}) => {
  return Handlebars.compile(homeLinkTpl)({ title });
};