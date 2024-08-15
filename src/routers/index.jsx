import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';

import Home from '../pages';
import About from '../pages/About';
import Blog from '../pages/blogs';
import Post from '../pages/blogs/_id';

import { posts, postById } from '../apis/loader';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/blog',
        element: <Blog />,
        loader: posts,
      },
      {
        path: '/blog/:id',
        element: <Post />,
        loader: postById,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
]);
