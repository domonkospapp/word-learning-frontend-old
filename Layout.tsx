import * as React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './style.css';

const Layout = () => (
  <div>
    <Link to="/">My words</Link>|<Link to="learning">Learning</Link>|
    <Link to="words/import">Import words</Link>|<Link to="login">Login</Link>
    <Outlet />
  </div>
);

export default Layout;
