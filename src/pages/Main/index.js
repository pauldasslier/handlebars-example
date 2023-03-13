import Handlebars from 'handlebars';

export const Main = () => {
  return Handlebars.compile(`
  <div>
    <a href="/sign-in">Sign In</a>
    <a href="/sign-up">Sign Up</a>
  </div>
`)();
};