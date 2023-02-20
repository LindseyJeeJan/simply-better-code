import React from 'react';
import { Box, Header, Footer, Text } from 'grommet';
import Home from 'components/pages/Home';

export default function Container() {
  return (
    <>
      <Box className='app-main'>
        <Header pad='medium' align='center' justify='end'>
          <Text>About</Text>
        </Header>
        <main>
          <Home />
        </main>
        <Footer pad='medium' align='center' justify='end'>
          <Text>&copy;2023</Text>
        </Footer>
      </Box>
    </>
  );
}
