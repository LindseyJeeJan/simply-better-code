import React from 'react';
import { Box, Heading, Page, Paragraph, Text } from 'grommet';
import Tutorials from './Tutorials';

export default function TutorialTodoList() {
  const tutorialName: string = Tutorials[1].title;
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
