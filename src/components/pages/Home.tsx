import React from 'react';
import { Box, Heading, Page, Paragraph, Text } from 'grommet';
import ListNav from './../ListNav';
import { List } from 'grommet-icons';

export default function Home() {
  return (
    <Page kind='full' fill='horizontal' pad='medium' align='center' justify='center'>
      <Box pad={'xlarge'}>
        <Heading level={1}>
          <Text size='string'>Simply better code</Text>
        </Heading>
        <Paragraph fill={true}>
          &hellip;because accessible code doesn&apos;t have to be complicated
        </Paragraph>
      </Box>
      <Box pad={'xlarge'} fill='horizontal'>
        <ListNav />
      </Box>
    </Page>
  );
}
