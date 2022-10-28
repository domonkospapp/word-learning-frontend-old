import * as React from 'react';
import {
  removeEmailFromLocalStore,
  removeUsernameFromLocalStore,
  setEmailToLocalStore,
  setUsernameToLocalStore,
} from './authProvider';
import './style.css';
import { createUser } from './userProvider';

const Login = () => {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');

  const updateEsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const login = () => {
    alert('Done');
    setUsernameToLocalStore(username);
    setEmailToLocalStore(email);
  };

  const registration = () => {
    createUser({
      username: username,
      email: email,
    });
    alert('Create user request...');
  };

  const logout = () => {
    alert('Done');
    removeUsernameFromLocalStore();
    removeEmailFromLocalStore();
  };

  return (
    <div>
      Username: <input type="text" value={username} onChange={updateEsername} />
      <br />
      Email: <input type="text" value={email} onChange={updateEmail} />
      <br />
      <button onClick={login}>Login</button>
      <br />
      <button onClick={registration}>Registration</button>
      <br />
      <button onClick={logout}>Logout</button>
    </div>
  );
};
export default Login;
