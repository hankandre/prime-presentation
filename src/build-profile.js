import $ from 'jquery/dist/jquery.slim';
import { kebabCase } from 'lodash-es';
import { storageKey } from '.';
import { setTheme, themes } from './themes';

function buildRepo({ node: { url, id, description, name } } = {}) {
  return `
  <a href="${url}">
    <li data-id="${id}">
      <h3>${name}</h3>
      <p>${description || '<em>No description provided</em>'}</p>
    </li>
  </a>
`;
}

function buildRepoList(title, repoList) {
  return `
    <div class="${kebabCase(title)}">
      <h2 class="repo-title">${title}</h2>
      <ul class="repo-list">
        ${repoList.edges.map(buildRepo).join('')}
      </ul>
    </div>
    `;
}

export default function(userData) {
  setTheme();
  const body = $('body');
  const {
    user: { starredRepositories, repositories, url, avatarUrl, name },
  } = userData;

  body.html(`
      <div class="hero">
        <div><select id="themeSelector">${Object.keys(themes).map(
          theme => `<option value="${theme}">${theme}</option>`
        )}</select></div>
        <a href="${url}">
          <img class="github-avatar" alt="${name} avatar" src="${avatarUrl}"/>
          <h2>The GitHub profile of ${name}</h2>
        </a>
        <button id="clearUser">Log out</button>
      </div>
      ${[['starred repos', starredRepositories], ['my repos', repositories]]
        .map(list => buildRepoList(...list))
        .join('')}
    `);

  $('#clearUser').click(e => {
    if (e) e.preventDefault();
    localStorage.removeItem(storageKey);
    location.reload(false);
  });
  $('#themeSelector').change(e => {
    if (e) e.preventDefault();
    const val = $('#themeSelector option:selected').val();
    setTheme(val);
  });
}
