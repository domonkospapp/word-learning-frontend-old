import * as React from 'react';
import '../style.css';
import { useNavigate } from 'react-router-dom';
import { createWord } from '../wordProvider';

const CreateWord = () => {
  const navigate = useNavigate();
  const [original, setOriginal] = React.useState('');
  const [foreign, setForeign] = React.useState('');

  const updateOriginal = (e) => {
    setOriginal(e.target.value);
  };

  const updateForeign = (e) => {
    setForeign(e.target.value);
  };

  const create = () => {
    createWord({
      original: original,
      foreign: foreign,
    });
    navigate('/');
    alert('Created!');
  };

  return (
    <div>
      Original: <input type="text" value={original} onChange={updateOriginal} />
      <br />
      Foreign: <input type="text" value={foreign} onChange={updateForeign} />
      <br />
      <button onClick={create}>Create</button>
    </div>
  );
};
export default CreateWord;
