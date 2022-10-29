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
    if (isAnswerCorrect()) {
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

  const isAnswerCorrect = () => {
    return answer.toLowerCase() == currentWord.foreign?.toLowerCase();
  };

  const playPronunciation = () => {
    var msg = new SpeechSynthesisUtterance(currentWord.foreign);
    window.speechSynthesis.speak(msg);
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
        {isAnswerCorrect() ? 'Correct!' : `Correct is: ${currentWord.foreign}`}
      </p>

      <button onClick={playPronunciation}>Pronunce it!</button>
      <br />
      <button onClick={getNextWord}>Next word</button>
    </div>
  );
};
export default LearningInput;
