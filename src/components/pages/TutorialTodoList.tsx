import React from 'react';
import { Box, Heading, Page, Paragraph, Text } from 'grommet';

export default function TutorialTodoList() {
  return (
    <Page kind='full' fill='horizontal' pad='medium' align='center'>
      <Heading level={1}>
        <Text size='string'>Tutorial Todo List</Text>
      </Heading>
      <Box pad={'large'}>
        <Paragraph fill={true}>Text here</Paragraph>
      </Box>
    </Page>
  );
}
