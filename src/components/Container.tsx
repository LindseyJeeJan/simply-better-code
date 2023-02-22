import React from 'react';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Avatar, Box, Footer, Header, Text } from 'grommet';
import About from 'components/pages/About';
import Home from 'components/pages/Home';
import ErrorPage from 'components/pages/Error';
import TutorialForms from './pages/tutorials/TutorialForms';
import TutorialTodoList from './pages/tutorials/TutorialTodoList';
import NavBar from 'components/Nav';
import { Outlet } from 'react-router-dom';
// const router = createBrowserRouter([
//   {
//     path: '*',
//     element: <Home />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: '/about',
//     element: <About />,
//   },
//   {
//     path: '/tutorial-forms',
//     element: <TutorialForms />,
//   },
//   {
//     path: '/tutorial-todo-list',
//     element: <TutorialTodoList />,
//   },
// ]);

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
          <Outlet />
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
