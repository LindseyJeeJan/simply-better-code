import React, { useState, useEffect, FormEvent } from 'react';
import { Anchor, Box, Button, Heading, Page, Text, Paragraph } from 'grommet';
import { Accessibility } from 'grommet-icons';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Tutorials from './TutorialsData';
import AlertMessage from './../../Alerts';

export default function TutorialForms() {
  (function SetTitle() {
    useEffect(() => {
      document.title = tutorialName;
    }, []);
  })();

  const tutorialName: string = Tutorials[0].title;
  SyntaxHighlighter.registerLanguage('javascript', js);
  const codeString = `<Heading level={1} className='tutorial-heading'>
      <Text size='string'>{tutorialName}</Text>
  </Heading>`;

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorUsernameRequired, setErrorUsernameRequired] = useState('');
  const [errorPasswordRequired, setErrorPasswordRequired] = useState('');

  const resetErrorMessages = () => {
    setErrorUsernameRequired('');
    setErrorPasswordRequired('');
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name: string = (event.target as HTMLInputElement).name;
    const value: string = (event.target as HTMLInputElement).value;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    resetErrorMessages();

    if (!username.length || !password.length) {
      if (!username.length) {
        setErrorUsernameRequired(`Error: Required information. Enter your username.`);
      }
      if (!password.length) {
        setErrorPasswordRequired('Error: Required information. Enter your password.');
      }
      return;
    }

    alert(`Login was successful.`);
    setUsername('');
    setPassword('');
    resetErrorMessages();
  };

  return (
    <Page kind='wide' fill='horizontal' pad='large'>
      <Heading level={1} className='tutorial-heading'>
        <Text size='string'>{tutorialName}</Text>
      </Heading>
      <Box pad={'small'}>
        <Paragraph fill={true}>
          To build an accessible form, it&apos;s important to consider that users typically prefer
          simple and short forms. Overly complicated or non-intuitive forms can lead to cognitive
          fatigue or frustration which can lead to users abandoning the task. As a developer whose
          job is to gather user information, this means we have failed our goal.
        </Paragraph>

        <Paragraph fill={true} className='paragraph__no-margin'>
          Even basic forms have things to consider through the lens of acccessiblity:
        </Paragraph>
        <Text margin='small'>
          <ul className='styled-list'>
            <li>grouping of controls</li>
            <li>instructions</li>
            <li>labels</li>
            <li>validation</li>
          </ul>
        </Text>
        <Paragraph fill={true}>
          Here is an example of a simple username and password entry form.
        </Paragraph>
        <form
          className='outlined-thing background-white padded-thing-large'
          noValidate
          onSubmit={handleFormSubmit}
        >
          <fieldset>
            <legend>User Login</legend>
            <div className='input-group'>
              <label htmlFor='username'>Username</label>
              <AlertMessage
                alertType='error'
                id='errorUsernameRequired'
                message={errorUsernameRequired}
              />
              <input
                aria-describedby='errorUsernameRequired'
                autoComplete='off'
                className='form-error'
                id='username'
                name='username'
                onChange={(e) => handleInputChange(e)}
                placeholder='your username'
                required
                type='text'
              />
            </div>
            <div className='input-group'>
              <label htmlFor='password'>Password</label>
              <AlertMessage
                id='passwordInformation'
                message='Password must be 8 characters.'
                alertType='information'
              />
              <AlertMessage
                alertType='error'
                id='errorPasswordRequired'
                message={errorPasswordRequired}
              />
              <input
                aria-describedby='errorPasswordRequired'
                autoComplete='off'
                className='form-error'
                id='password'
                onChange={handleInputChange}
                name='password'
                placeholder='your password'
                required
                type='password'
              />
            </div>
            <Button type='submit' primary label='Submit' />
          </fieldset>
        </form>
        <div className='code-box'>
          <SyntaxHighlighter language='javascript' style={a11yDark}>
            {codeString}
          </SyntaxHighlighter>
        </div>
        <div className='outlined-thing padded-thing-small'>
          <h2 className='bold'>
            <Accessibility color='gray' size='medium' aria-hidden='true' />
            Resources
          </h2>
          <Anchor href='https://www.w3.org/WAI/tutorials/forms/' target={'_blank'}>
            W3C Web Accessibility Initiative Forms Tutorial
          </Anchor>
        </div>
      </Box>
    </Page>
  );
}
