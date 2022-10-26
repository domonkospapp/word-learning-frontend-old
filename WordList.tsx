import * as React from 'react';
import './style.css';
import words from './words';

const WordList = () => {
  return (
    <div>
      Your words are:
      <ul>
        {words.map((w, k) => (
          <li key={k}>
            {w.original} - {w.foreign} ({w.level})
          </li>
        ))}
      </ul>
    </div>
  );
};
export default WordList;
