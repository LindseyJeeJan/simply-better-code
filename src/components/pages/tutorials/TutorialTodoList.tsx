import React, { useEffect } from 'react';
import { Box, Heading, Page, Paragraph, Text } from 'grommet';
import Tutorials from './Tutorials';

export default function TutorialTodoList() {
  const tutorialName: string = Tutorials[1].title;

  (function SetTitle() {
    useEffect(() => {
      document.title = tutorialName;
    }, []);
  })();

  return (
    <Page kind='wide' fill='horizontal' pad='large'>
      <Heading level={1} className='tutorial-heading'>
        <Text size='string'>{tutorialName}</Text>
      </Heading>
      <Box pad={'small'}>
        <Paragraph fill={true}>Text here</Paragraph>
      </Box>
    </Page>
  );
}
