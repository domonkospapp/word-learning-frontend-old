import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import * as React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import Learning from './Learning';
import Login from './Login';
import './style.css';
import WordList from './WordList';
import CreateWord from './words/CreateWord';

const App = () => {
  const queryClient = new QueryClient();
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
          path: '/words/create',
          element: <CreateWord />,
        },
        {
          path: '/learning',
          element: <Learning />,
        },
        {
          path: '/login',
          element: <Login />,
        },
      ],
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};
export default App;
