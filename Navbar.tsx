import * as React from 'react';
import {
  BrowserRouter,
  createBrowserRouter,
  Link,
  RouterProvider,
  Outlet,
} from 'react-router-dom';
import Learning from './Learning';
import './style.css';
import WordList from './WordList';

const Navbar() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <div>
          <Link to="/">My words</Link>
          <Link to="learning">Learning</Link>
          <Outlet />
        </div>
      ),
      // errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <WordList />,
        },
        {
          path: '/learning',
          element: <Learning />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
