import React from 'react';
import { Heading, Page, Paragraph, Text } from 'grommet';

export default function Home() {
  return (
    <Page kind='full' fill='horizontal' pad='medium' align='center' justify='center'>
      <Heading level={1}>
        <Text size='string'>Simply better code</Text>
      </Heading>
      <Paragraph fill={true}>
        &hellip;because accessible code doesn&apos;t have to be complicated
      </Paragraph>
    </Page>
  );
}
