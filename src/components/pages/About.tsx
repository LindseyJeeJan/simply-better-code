import React from 'react';
import { Heading, Page, Paragraph } from 'grommet';

export default function About() {
  return (
    <Page kind='full' fill='horizontal' pad='medium' align='center'>
      <Heading>About</Heading>
      <Paragraph fill={true}>About Me</Paragraph>
    </Page>
  );
}
