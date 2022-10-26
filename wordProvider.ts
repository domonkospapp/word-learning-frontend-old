import {
  getEmailFromLocalStore,
  getUsernameFromLocalStore,
} from './authProvider';
import { BACKEND_URL } from './config';

export const getWords = () => {
  const username = getUsernameFromLocalStore();
  const email = getEmailFromLocalStore();

  return fetch(`${BACKEND_URL}/words?username=${username}&email=${email}`).then(
    (res) => {
      console.log(res);
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }

      return res.json();
    }
  );
};
