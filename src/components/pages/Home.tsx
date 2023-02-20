import React from 'react';
import { Box, Heading, Page, Paragraph, Text } from 'grommet';
import ListNav from './../ListNav';

export default function Home() {
  return (
    <Page kind='full' fill='horizontal' pad='medium' align='center' justify='center'>
      <Box pad={'xlarge'}>
        <Heading level={1}>
          <Text size='string'>Simply Better Code</Text>
        </Heading>
        <Paragraph fill={true}>
          &hellip;because accessible code doesn&apos;t have to be complicated
        </Paragraph>
      </Box>
      <Box pad={'xlarge'} fill='horizontal'>
        <Heading level={2}>
          <Text size='string'>Tutorials</Text>
        </Heading>
        <ListNav />
      </Box>
    </Page>
  );
}
