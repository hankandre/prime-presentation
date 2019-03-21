import 'normalize.css';
import './main.css';
import $ from 'jquery/dist/jquery.slim';
import fetchUser from './fetch-user';
import buildProfile from './build-profile';

const storageKey = 'hanks_super_cool_app';

export default (async function() {
  const hasData = JSON.parse(window.localStorage.getItem(storageKey));
  const body = $('body');
  if (hasData) {
    const response = await fetchUser(hasData);
    buildProfile(response);
    body.show();
  } else {
    body.show();
    $('form').submit(async e => {
      if (e) e.preventDefault();
      const values = $('form')
        .serializeArray()
        .reduce((acc, { name, value }) => {
          acc[name] = value;
          return acc;
        }, {});
      window.localStorage.setItem(storageKey, JSON.stringify(values));
      const response = await fetchUser(values);
      buildProfile(response);
    });
  }
})();
