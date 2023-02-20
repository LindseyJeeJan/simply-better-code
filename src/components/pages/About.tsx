import React from 'react';
import { Heading, Page, Paragraph, Text } from 'grommet';

export default function About() {
  return (
    <Page kind='full' fill='horizontal' pad='medium' align='center'>
      <Heading level={1}>
        <Text size='string'>About</Text>
      </Heading>
      <Paragraph fill={true}>About Me</Paragraph>
    </Page>
  );
}
