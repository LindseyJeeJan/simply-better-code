import React from 'react';
import { Box, Heading, Page, Text, Paragraph } from 'grommet';
import Tutorials from './Tutorials';
import { Outlet } from 'react-router-dom';

export default function TutorialForms() {
  const tutorialName: string = Tutorials[0].title;

  return (
    <Page kind='wide' fill='horizontal' pad='large'>
      <Heading level={1} className='tutorial-heading'>
        <Text size='string'>{tutorialName}</Text>
      </Heading>
      <Box pad={'large'}>
        <Paragraph fill={true}>Text here</Paragraph>
      </Box>
    </Page>
  );
}
