import React, { useEffect } from 'react';
import { Box, Heading, Page, Text, Paragraph } from 'grommet';
import Tutorials from './Tutorials';

import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function TutorialForms() {
  const tutorialName: string = Tutorials[0].title;

  (function SetTitle() {
    useEffect(() => {
      document.title = tutorialName;
    }, []);
  })();

  SyntaxHighlighter.registerLanguage('javascript', js);

  const codeString = `<Heading level={1} className='tutorial-heading'>
      <Text size='string'>{tutorialName}</Text>
  </Heading>`;

  return (
    <Page kind='wide' fill='horizontal' pad='large'>
      <Heading level={1} className='tutorial-heading'>
        <Text size='string'>{tutorialName}</Text>
      </Heading>
      <Box pad={'large'}>
        <Paragraph fill={true}>Text here</Paragraph>
        <div className='code-box'>
          <SyntaxHighlighter language='javascript' style={a11yDark}>
            {codeString}
          </SyntaxHighlighter>
        </div>
      </Box>
    </Page>
  );
}
