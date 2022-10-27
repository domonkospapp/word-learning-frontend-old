import * as React from 'react';
import './style.css';

const LearningInput = ({ words, levelUp, levelDown }) => {
  const pickRandom = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  };

  const [currentWord, setCurrentWord] = React.useState(pickRandom());
  const [answer, setAnswer] = React.useState('');

  const getNewWord = () => {
    if (answer == currentWord.foreign) {
      alert('Correct!');
      levelUp(currentWord);
    } else {
      alert(`Correct is: ${currentWord.foreign}`);
      levelDown(currentWord);
    }
    setAnswer('');
    setCurrentWord(pickRandom);
  };

  const updateAnswer = (e) => {
    setAnswer(e.target.value);
  };

  return (
    <div>
      Word: {currentWord?.original}
      <br />
      Foreign: <input type="text" value={answer} onChange={updateAnswer} />
      <button onClick={getNewWord}>Submit</button>
    </div>
  );
};
export default LearningInput;
