export default async function({ username, token }) {
  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    mode: 'cors',
    headers: {
      Authorization: `bearer ${token}`,
    },
    body: JSON.stringify({
      query: `
    query { 
      user(login: ${username}) {
        avatarUrl
        url
        email
        name
        websiteUrl
        starredRepositories(first: 12, orderBy: {direction: DESC, field: STARRED_AT}) {
          totalCount
          edges {
            node {
              id
              name
              updatedAt
              url
              description
              owner {
                login
              }
            }
          }
        }
        repositories(first: 13, orderBy: {direction: DESC, field: UPDATED_AT}) {
          totalCount
          edges {
            node {
              id
              updatedAt
              description
              name
              url
            }
          }
        }
      }
    }
    `,
    }),
  });
  const { data } = await response.json();
  return data;
}
