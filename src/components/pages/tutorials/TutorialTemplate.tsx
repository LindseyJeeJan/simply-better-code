import React from 'react';
import { Box, Heading, Page, Text } from 'grommet';

import { Outlet } from 'react-router-dom';

export default function TutorialTemplate() {
  return (
    <Page kind='wide' fill='horizontal' pad='large'>
      <Heading level={1}>
        <Text size='string'></Text>
      </Heading>
      <Box pad={'large'}>
        <Outlet />
      </Box>
    </Page>
  );
}
