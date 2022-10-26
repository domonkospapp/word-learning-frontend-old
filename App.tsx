import * as React from 'react';
import './style.css';

export default function App() {
  const words = [
    {
      original: 'fut',
      foreign: 'run',
      level: 1,
    },
    {
      original: 'alszik',
      foreign: 'sleep',
      level: 3,
    },
    {
      original: 'alma',
      foreign: 'apple',
      level: 0,
    },
  ];

  const pickRandom = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  };

  const [currentWord, setCurrentWord] = React.useState(pickRandom());
  const [answer, setAnswer] = React.useState('');

  const getNewWord = () => {
    const correct =
      answer == currentWord.foreign
        ? `OK`
        : `Not OK, correct is: ${currentWord.foreign}`;
    alert(correct);
    setAnswer('');
    setCurrentWord(pickRandom);
  };

  const updateAnswer = (e) => {
    setAnswer(e.target.value);
  };

  return (
    <div>
      Word: {currentWord.original}
      <br />
      Foreign: <input type="text" value={answer} onChange={updateAnswer} />
      <button onClick={getNewWord}>Submit</button>
      <br />
      <br />
      Your words are:
      <ul>
        {words.map((w) => (
          <li>
            {w.original} - {w.foreign} ({w.level})
          </li>
        ))}
      </ul>
    </div>
  );
}
