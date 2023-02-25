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
      <Box pad={'small'}>
        <Paragraph fill={true}>
          To build an accessible form, first and foremost it&apos;s important to consider that users
          typically prefer simple and short forms. Overly complicated or non-intuitive forms can
          lead to cognitive fatigue or frustration and can lead to users abandoning the task. As a
          developer trying to gather user information, this means we have already failed our task.
        </Paragraph>
        <Paragraph fill={true} className='paragraph__no-margin'>
          Even basic forms have some things to consider through the lens of acccessiblity:
        </Paragraph>
        <Text margin='small'>
          <ul className='styled-list'>
            <li>grouping</li>
            <li>instructions</li>
            <li>labels</li>
            <li>validation</li>
          </ul>
        </Text>
        <div className='code-box'>
          <SyntaxHighlighter language='javascript' style={a11yDark}>
            {codeString}
          </SyntaxHighlighter>
        </div>
      </Box>
    </Page>
  );
}
