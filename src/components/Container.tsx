import React from 'react';
import { Box, Heading, Paragraph } from 'grommet';

function Main() {
  return (
    <>
      <Box pad='small'>
        <header></header>
        <main className='app-main'>
          <Heading>Simply Better Code</Heading>
          <Paragraph>This is a paragraph</Paragraph>
        </main>
        <footer></footer>
      </Box>
    </>
  );
}

export default Main;
