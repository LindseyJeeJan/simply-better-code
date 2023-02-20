import React from 'react';
import { Box, Heading, Page, Paragraph, Text } from 'grommet';
import Tutorials from './Tutorials';
import { CodeBlock } from 'react-code-blocks';

export default function TutorialForms() {
  const tutorialName: string = Tutorials[0].title;

  return (
    <Page kind='wide' fill='horizontal' pad='large'>
      <Heading level={1}>
        <Text size='string'>{tutorialName}</Text>
      </Heading>
      <Box pad={'large'}>
        <Paragraph fill={true}>Text here</Paragraph>
      </Box>
    </Page>
  );
}
