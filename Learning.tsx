import * as React from 'react';
import './style.css';
import words from './words';

const Learning = () => {
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
    </div>
  );
};
export default Learning;
