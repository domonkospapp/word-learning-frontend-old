import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import * as React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ImportWords from './importer/ImportWords';
import Layout from './Layout';
import './style.css';
import Login from './users/Login';
import CreateWord from './words/CreateWord';
import Learning from './words/Learning';
import WordList from './words/WordList';

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
          path: '/words/import',
          element: <ImportWords />,
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
