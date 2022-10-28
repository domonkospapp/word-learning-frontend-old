import * as React from 'react';
import '../style.css';

const LearningInput = ({ words, levelUp, levelDown }) => {
  const pickRandom = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  };

  const [currentWord, setCurrentWord] = React.useState(pickRandom());
  const [answer, setAnswer] = React.useState('');
  const [waitingForAnswer, setWaitingForAnswer] = React.useState(true);

  const updateAnswer = (e) => {
    setAnswer(e.target.value);
  };

  const evaulate = () => {
    if (answer == currentWord.foreign) {
      levelUp(currentWord);
    } else {
      levelDown(currentWord);
    }
    setWaitingForAnswer(false);
  };

  const getNextWord = () => {
    setAnswer('');
    setCurrentWord(pickRandom);
    setWaitingForAnswer(true);
  };

  return waitingForAnswer ? (
    <div>
      Word: {currentWord?.original}
      <br />
      Foreign: <input type="text" value={answer} onChange={updateAnswer} />
      <button onClick={evaulate}>Submit</button>
    </div>
  ) : (
    <div>
      <p>
        {answer == currentWord.foreign
          ? 'Correct!'
          : `Correct is: ${currentWord.foreign}`}
      </p>
      <button onClick={getNextWord}>Next word</button>
    </div>
  );
};
export default LearningInput;
