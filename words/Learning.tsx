import { useQuery } from '@tanstack/react-query/build/lib/useQuery';
import * as React from 'react';
import LearningInput from './LearningInput';
import '../style.css';
import { getWords, updateWord } from '../services/wordProvider';

const Learning = () => {
  const { isLoading, isError, data } = useQuery(['words'], getWords);

  const levelUp = (word) => {
    word.level = word.level + 1;
    updateWord(word);
  };

  const levelDown = (word) => {
    word.level = word.level - 1;
    updateWord(word);
  };

  return isLoading || isError ? (
    <p>Loading words...</p>
  ) : (
    <LearningInput words={data} levelUp={levelUp} levelDown={levelDown} />
  );
};
export default Learning;
