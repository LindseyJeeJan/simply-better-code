import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Avatar, Anchor, Box, Footer, Header, Nav, Text } from 'grommet';
import About from 'components/pages/About';
import Home from 'components/pages/Home';
import ErrorPage from 'components/pages/Error';
import NavBar from 'components/Nav';
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

const gravatarSrc = 'https://www.gravatar.com/avatar/9b893deb3209a60d70152ac63517589c';

export default function Container() {
  return (
    <>
      <Box className='app-main'>
        <Header pad='medium' align='center' justify='between'>
          <Avatar src={gravatarSrc} />
          <NavBar />
        </Header>
        <main>
          <RouterProvider router={router} />
        </main>
        <Footer pad='medium' align='center' justify='end'>
          <Text size='small' className='copyright'>
            copyright &copy;2023
          </Text>
        </Footer>
      </Box>
    </>
  );
}
