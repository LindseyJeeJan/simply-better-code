import React, { useEffect } from 'react';
import { Anchor, Box, Heading, Page, Text, Paragraph } from 'grommet';
import { Accessibility, Alert, CircleInformation } from 'grommet-icons';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Tutorials from './TutorialsData';

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
          To build an accessible form, it&apos;s important to consider that users typically prefer
          simple and short forms. Overly complicated or non-intuitive forms can lead to cognitive
          fatigue or frustration and can lead to users abandoning the task. As a developer trying to
          gather user information, this means we have already failed our task.
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
        <form className='outlined-thing background-white padded-thing-large'>
          <fieldset>
            <legend>User Login</legend>
            <div className='input-group'>
              <label htmlFor='username'>Username</label>
              <p className='message-error'>
                <Alert color='#CC0000' size='medium' />
                Required information. Enter your username.
              </p>
              <input
                id='username'
                className='form-error'
                type='text'
                placeholder='your username'
                autoComplete='off'
              />
            </div>
            <div className='input-group'>
              <label htmlFor='password'>Password</label>
              <p className='message-info'>
                <CircleInformation color='cornflowerblue' size='medium' />
                Password must be 8 characters.
              </p>

              <p className='message-error'>
                <Alert color='#CC0000' size='medium' />
                Required information. Enter your password.
              </p>
              <input
                id='password'
                className='form-error'
                type='password'
                placeholder='your password'
                autoComplete='off'
              />
            </div>
          </fieldset>
        </form>
        <div className='code-box'>
          <SyntaxHighlighter language='javascript' style={a11yDark}>
            {codeString}
          </SyntaxHighlighter>
        </div>
        <div className='outlined-thing padded-thing-small'>
          <h2>
            <Accessibility color='black' size='medium' />
            Resources
          </h2>
          <Anchor href='https://www.w3.org/WAI/tutorials/forms/'>
            W3C Web Accessibility Initiative Forms Tutorial
          </Anchor>
        </div>
      </Box>
    </Page>
  );
}
