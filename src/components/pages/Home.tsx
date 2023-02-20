import React from 'react';
import { Heading, Page, Paragraph } from 'grommet';

export default function Home() {
  return (
    <Page kind='full' fill='horizontal' pad='medium' align='center' justify='center'>
      <Heading>Simply Better Code</Heading>
      <Paragraph fill={true}>...because better code doesn&apos;t have to be complicated</Paragraph>
    </Page>
  );
}
