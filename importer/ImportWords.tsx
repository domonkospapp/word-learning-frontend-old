import * as React from 'react';
import '../style.css';
import { useNavigate } from 'react-router-dom';
import { uploadTranslation } from '../services/fileUploadProvider';

const ImportWords = () => {
  const navigate = useNavigate();
  const [file, setFile] = React.useState();

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const onFileUpload = () => {
    uploadTranslation(file);
    navigate('/');
    alert('Created!');
  };

  return (
    <div>
      <br />
      <input type="file" onChange={onFileChange} />
      <br />
      <br />
      <button onClick={onFileUpload}>Upload words</button>
    </div>
  );
};
export default ImportWords;
