import React from 'react';
import { useRouteError } from 'react-router-dom';
import { Box, Heading, Paragraph, Text } from 'grommet';

export default function ErrorPage() {
  const error: any | unknown = useRouteError();
  console.error(error);

  return (
    <Box id='error-page' justify='center'>
      <Heading level={1}>
        <Text size='string'>Oops!</Text>
      </Heading>
      <Paragraph fill={true}>Sorry, an unexpected error has occurred.</Paragraph>
      <Paragraph fill={true}>
        <Text size='string'>{error?.statusText || error?.message}</Text>
      </Paragraph>
    </Box>
  );
}
