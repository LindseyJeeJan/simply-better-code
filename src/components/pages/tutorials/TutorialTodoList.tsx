import { useEffect } from 'react';
import { getTutorialTitle } from './TutorialsData';
import TodoList from './TutorialsTodos';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function TutorialTodoList() {
  const tutorialName: string = getTutorialTitle('tutorials/tutorial-todo-list');

  useEffect(() => {
    document.title = tutorialName;
  }, [tutorialName]);

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
    <div className='page-wide'>
      <h1 className='tutorial-heading'>{tutorialName}</h1>
      <div className='tutorial-content'>
        <TodoList />
        <div className='code-box'>
          <SyntaxHighlighter language='jsx' style={a11yDark}>
            {codeString}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
}
