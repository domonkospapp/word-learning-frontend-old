import { BACKEND_URL } from '../config';
import {
  getEmailFromLocalStore,
  getUsernameFromLocalStore,
} from './authProvider';

const FILE_UPLOAD_BASE_URL = `${BACKEND_URL}/words/translations`;

export const uploadTranslation = (file) => {
  const username = getUsernameFromLocalStore();
  const email = getEmailFromLocalStore();

  const formData = new FormData();
  formData.append('translations', file, file.name);

  const requestOptions = {
    method: 'POST',
    body: formData,
  };

  return fetch(
    `${FILE_UPLOAD_BASE_URL}?username=${username}&email=${email}`,
    requestOptions
  ).then((res) => {
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    return res.json();
  });
};
