import * as React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import Learning from './Learning';
import './style.css';
import WordList from './WordList';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
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
};
export default App;
