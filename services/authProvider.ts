const getUsernameFromLocalStore = () => {
  return localStorage.getItem('username');
};
const removeUsernameFromLocalStore = () => {
  return localStorage.removeItem('username');
};
const setUsernameToLocalStore = (username) => {
  localStorage.setItem('username', username);
};
const getEmailFromLocalStore = () => {
  return localStorage.getItem('email');
};
const removeEmailFromLocalStore = () => {
  return localStorage.removeItem('email');
};
const setEmailToLocalStore = (email) => {
  localStorage.setItem('email', email);
};
export {
  getUsernameFromLocalStore,
  removeUsernameFromLocalStore,
  setUsernameToLocalStore,
  getEmailFromLocalStore,
  removeEmailFromLocalStore,
  setEmailToLocalStore,
};
