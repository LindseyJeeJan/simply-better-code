import React from 'react';
import { Box, Heading, Page, Paragraph, Text } from 'grommet';
import ListNav from '@/components/MainTutorialList';

export default function Home() {
  return (
    <Page kind='full' fill='horizontal' pad='medium' align='center' justify='center'>
      <Box pad={'xlarge'}>
        <Heading level={1} textAlign='center'>
          <Text size='string'>simply better code</Text>
        </Heading>
        <Paragraph fill={true}>
          &hellip;because accessible code doesn&apos;t have to be complicated
        </Paragraph>
      </Box>
      <Box pad={'large'} fill='horizontal'>
        <Heading id='tutorial-heading' level={2}>
          <Text size='string'>tutorials</Text>
        </Heading>
        <section aria-labelledby='tutorial-heading'>
          <ListNav />
        </section>
      </Box>
    </Page>
  );
}
