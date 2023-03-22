import React, { useState, useEffect, FormEvent } from 'react';
import { Anchor, Box, Button, Heading, Page, Text, Paragraph } from 'grommet';
import { Accessibility } from 'grommet-icons';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Tutorials from './TutorialsData';
import AlertMessage from './../../Alerts';

export default function TutorialForms() {
  (function SetTitle() {
    useEffect(() => {
      document.title = tutorialName;
    }, []);
  })();

  const tutorialName: string = Tutorials[0].title;
  const codeString = `
<fieldset>
  <legend>User Login</legend>
  <div className='input-group'>
    <label>
      <div className='margin-bottom-small'>Username</div>
      <AlertMessage alertType='error' id='errorUsername' message={errorUsername} />
      <input
      aria-describedby='errorUsername'
      aria-invalid={errorUsername ? 'true' : false}
      autoComplete='off'
      className={errorUsername ? 'form-error' : ''}
      name='username'
      onChange={(e) => handleInputChange(e)}
      placeholder='your username'
      required
      type='text'
      value={username}
      />
    </label>
  </div>
  <div className='input-group'>
    <label>
      <div className='margin-bottom-small'>Password</div>
      <AlertMessage
      id='passwordInformation'
      message='Password is at least 8 characters.'
      alertType='information'
      />
      <AlertMessage alertType='error' id='errorPassword' message={errorPassword} />
      <input
      aria-describedby='errorPassword'
      aria-invalid={errorPassword ? 'true' : false}
      autoComplete='off'
      className={errorPassword ? 'form-error' : ''}
      onChange={(e) => handleInputChange(e)}
      minLength={8}
      name='password'
      placeholder='your password'
      required
      type='password'
      value={password}
      />
    </label>
  </div>
  <Button type='submit' primary label='Submit' />
</fieldset>

`;

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorUsername, setErrorUsername] = useState('');
  const [errorPassword, setErrorPassword] = useState('');

  const resetErrorMessages = () => {
    setErrorUsername('');
    setErrorPassword('');
  };

  const resetForm = () => {
    setUsername('');
    setPassword('');
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
        setErrorUsername(`Error: Required information. Enter your username.`);
      }
      if (!password.length) {
        setErrorPassword('Error: Required information. Enter your password.');
      }
      if (password.length > 1 && password.length < 8) {
        setErrorPassword('Error: Password must be at least 8 characters.');
      }
      return;
    }

    confirm('Login was successful.');
    resetForm();
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
          All forms have some things to consider through the lens of acccessiblity:
        </Paragraph>
        <Text margin='small'>
          <ul className='styled-list'>
            <li>
              <span className='bold'>Grouping of controls:</span> If a group exists, it is marked as
              a group or grouped using a fielset element. The group has a label and instructions, if
              needed.
            </li>
            <li>
              <span className='bold'>Instructions:</span> Requirements and/or formats are provided.
            </li>
            <li>
              <span className='bold'>Labels:</span> A concise and accesssible label is
              programmatically linked to each form field.
            </li>
            <li>
              <span className='bold'>Validation:</span> Errors are clearly marked and help is
              provided to explain why an error has occurred as well as how to fix it. Error
              messaging persists until errors are fixed. The messaging is close to the field that
              needs help and is programmatically associated to the field.
            </li>
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
              <label>
                <div className='margin-bottom-small'>Username</div>
                <AlertMessage alertType='error' id='errorUsername' message={errorUsername} />
                <input
                  aria-describedby='errorUsername'
                  aria-invalid={errorUsername ? 'true' : false}
                  autoComplete='off'
                  className={errorUsername ? 'form-error' : ''}
                  name='username'
                  onChange={(e) => handleInputChange(e)}
                  placeholder='your username'
                  required
                  type='text'
                  value={username}
                />
              </label>
            </div>
            <div className='input-group'>
              <label>
                <div className='margin-bottom-small'>Password</div>
                <AlertMessage
                  id='passwordInformation'
                  message='Password is at least 8 characters.'
                  alertType='information'
                />
                <AlertMessage alertType='error' id='errorPassword' message={errorPassword} />
                <input
                  aria-describedby='errorPassword'
                  aria-invalid={errorPassword ? 'true' : false}
                  autoComplete='off'
                  className={errorPassword ? 'form-error' : ''}
                  onChange={(e) => handleInputChange(e)}
                  minLength={8}
                  name='password'
                  placeholder='your password'
                  required
                  type='password'
                  value={password}
                />
              </label>
            </div>
            <Button type='submit' primary label='Submit' />
          </fieldset>
        </form>
        <div className='code-box'>
          <SyntaxHighlighter language='jsx' style={a11yDark}>
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
