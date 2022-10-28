import { BACKEND_URL } from './config';

const USERS_BASE_URL = `${BACKEND_URL}/users`;

export const createUser = (user) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  };

  return fetch(USERS_BASE_URL, requestOptions).then((res) => {
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    return res.json();
  });
};
