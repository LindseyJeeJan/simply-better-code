import React, { useEffect } from 'react';
import { Link, useRouteError } from 'react-router-dom';
import { Box, Heading, Paragraph, Text } from 'grommet';

export default function ErrorPage() {
  const error = useRouteError() as Error;
  console.error(error);

  const errorTitle = 'Error – ';
  (function SetTitle() {
    useEffect(() => {
      document.title = errorTitle.concat(document.title);
    }, []);
  })();

  return (
    <Box height='100vh'>
      <main>
        <Box id='error-page' justify='center'>
          <Heading level={1}>
            <Text size='string'>Error</Text>
          </Heading>
          <Paragraph fill={true}>We&apos;re sorry, an unexpected error has occurred.</Paragraph>
          <Paragraph fill={true}>
            <Text size='string'>{error?.statusText || error?.message}</Text>
          </Paragraph>
          <Paragraph fill={true}>
            Return to the <Link to='/'>homepage</Link>.
          </Paragraph>
        </Box>
      </main>
    </Box>
  );
}
