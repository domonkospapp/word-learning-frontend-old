import { useQuery } from '@tanstack/react-query/build/lib/useQuery';
import * as React from 'react';
import LearningInput from './LearningInput';
import './style.css';
import { getWords } from './wordProvider';

const Learning = () => {
  const { isLoading, isError, data } = useQuery(['words'], getWords);

  return isLoading || isError ? (
    <p>Loading words...</p>
  ) : (
    <LearningInput words={data} />
  );
};
export default Learning;
