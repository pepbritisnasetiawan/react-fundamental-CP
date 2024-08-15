import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';

import Home from '../pages';
import About from '../pages/About';
import Blog from '../pages/blogs';

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
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
]);
