import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { getTutorialTitle } from './TutorialsData';
import Input from '../../Input';
import AlertMessage from '../../Alerts';

export default function TutorialForms() {
  const tutorialName: string = getTutorialTitle('tutorials/tutorial-forms');

  useEffect(() => {
    document.title = tutorialName;
  }, [tutorialName]);

  const codeString = `
<form className='outlined-thing background-white padded-thing-large' noValidate>
  <fieldset>
    <legend>User Login</legend>
    <Input
      name='username'
      label='Username'
      type='text'
      minLength={0}
      error={!!usernameValidationError}
      errorMessage={usernameValidationError}
      value={username}
      onChange={handleInputChange}
    />
    <AlertMessage
      alertType='information'
      message='Password must be at least 8 characters.'
    />
    <Input
      name='password'
      label='Password'
      type='password'
      minLength={8}
      error={!!passwordValidationError}
      errorMessage={passwordValidationError}
      value={password}
      onChange={handleInputChange}
    />
    <button type='submit'>Submit</button>
  </fieldset>
</form>

`;

  const [loginSuccess, setLoginSuccess] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameValidationError, setUsernameValidationError] = useState('');
  const [passwordValidationError, setPasswordValidationError] = useState('');

  const resetErrorMessages = () => {
    setUsernameValidationError('');
    setPasswordValidationError('');
  };

  const resetForm = () => {
    setUsername('');
    setPassword('');
    setLoginSuccess(false);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === 'username') {
      setUsername(value);
      setUsernameValidationError('');
    } else if (name === 'password') {
      setPassword(value);
      setPasswordValidationError('');
    }
  };

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    resetErrorMessages();

    if (!username.length || !password.length) {
      if (!username.length) {
        setUsernameValidationError(`Error: Required information. Enter your username.`);
      }
      if (!password.length) {
        setPasswordValidationError('Error: Required information. Enter your password.');
      }
      if (password.length > 1 && password.length < 8) {
        setPasswordValidationError('Error: Password must be at least 8 characters.');
      }
      return;
    }

    setLoginSuccess(true);
    resetForm();
    resetErrorMessages();
  };

  return (
    <div className='page-wide'>
      <h1 className='tutorial-heading'>{tutorialName}</h1>
      <div className='tutorial-content'>
        <p>
          To build an accessible form, it&apos;s important to consider that users typically prefer
          simple and short forms. Overly complicated or non-intuitive forms can lead to cognitive
          fatigue or frustration which can lead to users abandoning the task. As a developer whose
          job is to gather user information, this means we have failed our goal.
        </p>

        <p className='paragraph__no-margin'>
          All forms have some things to consider through the lens of accessibility:
        </p>
        <ul className='styled-list'>
          <li>
            <span className='bold'>Grouping of controls:</span> If a group exists, it is marked as a
            group or grouped using a fieldset element. The group has a label and instructions, if
            needed.
          </li>
          <li>
            <span className='bold'>Instructions:</span> Requirements and/or formats are provided.
          </li>
          <li>
            <span className='bold'>Labels:</span> A concise and accessible label is programmatically
            linked to each form field.
          </li>
          <li>
            <span className='bold'>Validation:</span> Errors are clearly marked and help is provided
            to explain why an error has occurred as well as how to fix it. Error messaging persists
            until errors are fixed. The messaging is close to the field that needs help and is
            programmatically associated to the field.
          </li>
        </ul>

        <p>Here is an example of a simple username and password entry form.</p>

        <form className='outlined-thing background-white padded-thing-large' noValidate>
          <fieldset>
            <legend>User Login</legend>
            <Input
              name='username'
              label='Username'
              type='text'
              minLength={0}
              error={!!usernameValidationError}
              errorMessage={usernameValidationError}
              value={username}
              onChange={handleInputChange}
            />
            <AlertMessage
              alertType='information'
              message='Password must be at least 8 characters.'
            />
            <Input
              name='password'
              label='Password'
              type='password'
              minLength={8}
              error={!!passwordValidationError}
              errorMessage={passwordValidationError}
              value={password}
              onChange={handleInputChange}
            />
            <button type='submit' className='btn-primary' onClick={handleFormSubmit}>
              Submit
            </button>
            {loginSuccess && (
              <AlertMessage alertType='information' message='Login was successful.' />
            )}
          </fieldset>
        </form>

        <div className='code-box'>
          <SyntaxHighlighter language='jsx' style={a11yDark}>
            {codeString}
          </SyntaxHighlighter>
        </div>

        <p>
          By using semantic HTML elements and responsive web design principles, we increase the
          likelihood that it will display properly on a wide range of devices, including mobile
          devices with smaller screens. We also ensure support by assistive technologies.
        </p>
        <p>
          The form includes clear and descriptive labels for each input field, which can help users
          understand what information is required in each field. Additionally, the use of a&nbsp;
          <span className='code'>fieldset</span> element and a <span className='code'>legend</span>{' '}
          tag to group related inputs can help users with screen readers navigate the form more
          easily.
        </p>
        <p>
          Error messages are associated with each input field. This means that if a user enters
          invalid information into a field, they will receive an error message that is directly
          associated with that field, rather than a generic error message that does not provide
          specific guidance.
        </p>
        <p>
          The use of the <span className='code'>noValidate</span> attribute in the form element
          means that the form will not be validated by the browser itself. This can be beneficial
          for users who may be using assistive technologies that do not work well with browser-based
          validation, or for users who have disabled browser-based validation for personal
          preference or security reasons.
        </p>

        <div className='outlined-thing padded-thing-small'>
          <h2 className='bold'>Resources</h2>
          <a href='https://www.w3.org/WAI/tutorials/forms/' target='_blank' rel='noreferrer'>
            W3C Web Accessibility Initiative Forms Tutorial
          </a>
        </div>
      </div>
    </div>
  );
}
