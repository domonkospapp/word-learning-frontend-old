import { useQuery } from '@tanstack/react-query/build/lib/useQuery';
import * as React from 'react';
import { Link } from 'react-router-dom';
import '../style.css';
import { getWords } from '../services/wordProvider';
import {
  getEmailFromLocalStore,
  getUsernameFromLocalStore,
} from '../services/authProvider';

const WordList = () => {
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
            <div>
              <ul>
                {data &&
                  data.map((w, k) => (
                    <li key={k}>
                      {w.original} - {w.foreign} ({w.level})
                    </li>
                  ))}
              </ul>
              <Link to="words/create">Add new word</Link>
            </div>
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
