import React from 'react';
import { Avatar, Box, Footer, Header, Text } from 'grommet';
import NavBar from 'components/Nav';
import { Outlet } from 'react-router-dom';

const gravatarSrc = 'https://www.gravatar.com/avatar/9b893deb3209a60d70152ac63517589c';

export default function Container() {
  return (
    <>
      <Box className='app-main'>
        <Header pad='small' align='center' justify='between'>
          <Avatar src={gravatarSrc} />
          <NavBar />
        </Header>
        <main>
          <Outlet />
        </main>
        <Footer pad='small' align='center' justify='end'>
          <Text size='small' className='copyright'>
            Copyright &copy;2023 Lindsey Lauria.
          </Text>
        </Footer>
      </Box>
    </>
  );
}
