import React from 'react';
import { createBrowserRouter, Link, NavLink, RouterProvider } from 'react-router-dom';
import { Box, Header, Footer, Text } from 'grommet';
import About from 'components/pages/About';
import Home from 'components/pages/Home';
import ErrorPage from 'components/pages/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/about',
    element: <About />,
  },
]);

export default function Container() {
  return (
    <>
      <Box className='app-main'>
        <Header pad='medium' align='center' justify='between'>
          <a href='/'>Home</a>
          <a href='/about'>About</a>
        </Header>
        <main>
          <RouterProvider router={router} />
        </main>
        <Footer pad='medium' align='center' justify='end'>
          <Text>&copy;2023</Text>
        </Footer>
      </Box>
    </>
  );
}
