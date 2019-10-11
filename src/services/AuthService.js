export const login = async (email, password) => {
  const oauthClient = process.env.REACT_APP_OAUTH2_CLIENT;
  const oauthClientSecret = process.env.REACT_APP_OAUTH2_CLIENT_SECRET;
  const oauthUrl = process.env.REACT_APP_OAUTH2_URL;
  const response = await fetch(`${oauthUrl}/login`, {
    method: 'POST',
    headers: {
      Authorization: 'Basic ' + window.btoa(`${oauthClient}:${oauthClientSecret}`),
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  });
  return response.json();
}
