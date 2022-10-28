import {
  getEmailFromLocalStore,
  getUsernameFromLocalStore,
} from './authProvider';
import { BACKEND_URL } from '../config';

const WORDS_BASE_URL = `${BACKEND_URL}/words`;

export const getWords = () => {
  const username = getUsernameFromLocalStore();
  const email = getEmailFromLocalStore();

  return fetch(`${WORDS_BASE_URL}?username=${username}&email=${email}`).then(
    (res) => {
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return res.json();
    }
  );
};

export const updateWord = (word) => {
  const body = {
    user: {
      username: getUsernameFromLocalStore(),
      email: getEmailFromLocalStore(),
    },
    original: word.original,
    foreign: word.foreign,
    level: word.level,
  };

  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  };

  return fetch(`${WORDS_BASE_URL}/${word.id}`, requestOptions).then((res) => {
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    return res.json();
  });
};

export const createWord = (word) => {
  const body = {
    user: {
      username: getUsernameFromLocalStore(),
      email: getEmailFromLocalStore(),
    },
    original: word.original,
    foreign: word.foreign,
  };

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  };

  return fetch(WORDS_BASE_URL, requestOptions).then((res) => {
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    return res.json();
  });
};
