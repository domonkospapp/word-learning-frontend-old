import { useQuery } from '@tanstack/react-query/build/lib/useQuery';
import * as React from 'react';
import { BACKEND_URL } from './config';
import './style.css';

const WordList = () => {
  const getWords = () => {
    return fetch(`${BACKEND_URL}/words?username=user&email=email`).then((res) =>
      res.json()
    );
  };
  const { isLoading, data } = useQuery(['words'], getWords);

  return (
    <div>
      Your words are:
      {isLoading ? (
        <p>Loading...</p>
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
  );
};
export default WordList;
