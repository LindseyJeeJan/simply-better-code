import React from 'react';
import { Box, Heading, Page, Paragraph, Text } from 'grommet';

export default function About() {
  return (
    <Page kind='full' fill='horizontal' pad='medium' align='center'>
      <Heading level={1}>
        <Text size='string'>About</Text>
      </Heading>
      <Box pad={'large'}>
        <Paragraph fill={true}>
          Hi, I&apos;m Lindsey. I am a Front-end Software Engineer with a strong background in both
          design and development of responsive and accessible user interfaces for web applications.
          My goal is always to provide the best experience to the largest possible number of users.
        </Paragraph>
        <Paragraph fill={true}>
          I enjoy creating accessible interfaces that are inclusively designed to provide an equal
          experience for all users. I have been developing with accessiblity in mind for over a
          decade and I enjoy learning as much as possible about supporting various assitive
          technologies. I consider myself both a designer and engineer.
        </Paragraph>
      </Box>
    </Page>
  );
}
