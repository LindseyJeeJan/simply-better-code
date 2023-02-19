import React from 'react';
import { Box, Heading, Header, Footer, Text, Page } from 'grommet';

function Main() {
  return (
    <>
      <Box className='app-main'>
        <Header pad='medium' align='center' justify='end'>
          <Text>About</Text>
        </Header>
        <main>
          <Page kind='full' fill='horizontal' pad='medium' align='center' justify='center'>
            <Heading>Simply Better Code</Heading>
            <p>This is a paragraph</p>
          </Page>
        </main>
        <Footer pad='medium' align='center' justify='end'>
          <Text>&copy;2023</Text>
        </Footer>
      </Box>
    </>
  );
}

export default Main;
