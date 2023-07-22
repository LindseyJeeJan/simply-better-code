import React, { useEffect } from 'react';
import { Box, Heading, Page, Text } from 'grommet';
import Tutorials from './TutorialsData';
import TodoList from './TutorialsTodos';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function TutorialTodoList() {
  const tutorialName: string = Tutorials[1].title;

  (function SetTitle() {
    useEffect(() => {
      document.title = tutorialName;
    }, []);
  })();

  const codeString = `
export default function Checkbox({ label, onChange }: Props) {
  return (
    <div className='checkbox'>
      <label>
        <input name={label} onChange={onChange} type='checkbox' value={label} />
        {label}
      </label>
    </div>
  );
}

`;

  return (
    <Page kind='wide' fill='horizontal' pad='large'>
      <Heading level={1} className='tutorial-heading'>
        <Text size='string'>{tutorialName}</Text>
      </Heading>
      <Box pad={'small'}>
        <TodoList />
        <div className='code-box'>
          <SyntaxHighlighter language='jsx' style={a11yDark}>
            {codeString}
          </SyntaxHighlighter>
        </div>
      </Box>
    </Page>
  );
}
