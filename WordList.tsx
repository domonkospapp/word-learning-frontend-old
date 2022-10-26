import { useQuery } from '@tanstack/react-query/build/lib/useQuery';
import * as React from 'react';
import { Link } from 'react-router-dom';
import {
  getEmailFromLocalStore,
  getUsernameFromLocalStore,
} from './authProvider';
import { BACKEND_URL } from './config';
import './style.css';

const WordList = () => {
  const getWords = () => {
    const username = getUsernameFromLocalStore();
    const email = getEmailFromLocalStore();

    return fetch(
      `${BACKEND_URL}/words?username=${username}&email=${email}`
    ).then((res) => {
      console.log(res);
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }

      return res.json();
    });
  };

  const { isLoading, error, data } = useQuery(['words'], getWords);

  const userIsLoggedIn = () =>
    getUsernameFromLocalStore() && getEmailFromLocalStore();

  return (
    <div>
      {userIsLoggedIn() ? (
        <div>
          Your words are:
          {isLoading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>
              Something went wrong try to login:
              <br />
              <Link to="Login">Go to the login page</Link>
            </p>
          ) : (
            <ul>
              {data &&
                data.map((w, k) => (
                  <li key={k}>
                    {w.original} - {w.foreign} ({w.level})
                  </li>
                ))}
            </ul>
          )}
        </div>
      ) : (
        <div>
          <p>You are not logged in</p>
          <Link to="Login">Go to the login page</Link>
        </div>
      )}
    </div>
  );
};
export default WordList;
