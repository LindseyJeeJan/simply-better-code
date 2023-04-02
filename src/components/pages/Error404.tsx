import React, { useEffect } from 'react';
import { Link, useRouteError } from 'react-router-dom';
import { Box, Heading, Paragraph, Text } from 'grommet';

export default function ErrorPage() {
  const error: any | unknown = useRouteError();
  console.error(error);

  const errorTitle = 'Error 404 Page Not Found – ';
  (function SetTitle() {
    useEffect(() => {
      document.title = errorTitle.concat(document.title);
    }, []);
  })();

  return (
    <Box className='app-main'>
      <main>
        <Box id='error-page' justify='center'>
          <Heading level={1}>
            <Text size='string'>404 Page Not Found</Text>
          </Heading>
          <Paragraph fill={true}>The page you&apos;re looking for does not exist.</Paragraph>
          <Paragraph fill={true}>
            <Text size='string'>
              Please check the URL and try again, or return to the <Link to='/'>homepage</Link>.
            </Text>
          </Paragraph>
        </Box>
      </main>
    </Box>
  );
}
