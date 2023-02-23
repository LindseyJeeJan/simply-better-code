import React, { useEffect } from 'react';
import { Box, Heading, Image, Page, Paragraph, Text } from 'grommet';

export default function About() {
  (function SetTitle() {
    useEffect(() => {
      const title = 'About – ';
      document.title = title.concat(document.title);
    }, []);
  })();

  return (
    <Page kind='full' fill='horizontal' pad='medium' align='center'>
      <Heading level={1}>
        <Text size='string'>hello</Text>
      </Heading>
      <Box pad={'large'}>
        <div className='columns'>
          <div className='col-2'>
            <div className='image-cropper left-margin-auto center-mobile'>
              <Image
                a11yTitle='lindsey lauria smiling photo'
                fit='contain'
                src='https://www.gravatar.com/avatar/9b893deb3209a60d70152ac63517589c?s=200'
              />
            </div>
          </div>
          <div className='col-2'>
            <Paragraph fill={true}>
              Hi, I&apos;m Lindsey. I am a Front-End Developer with a strong background in both
              design and development of responsive and accessible user interfaces for web
              applications. My goal is always to provide the best experience to the largest possible
              number of users.
            </Paragraph>
            <Paragraph fill={true}>
              I enjoy creating accessible interfaces that are inclusively designed to provide an
              equal experience for all users. I have been developing with accessiblity in mind for
              over a decade and I enjoy learning as much as possible about supporting various
              assitive technologies. I consider myself both a designer and engineer.
            </Paragraph>
          </div>
        </div>
      </Box>
    </Page>
  );
}
