import { useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { getTutorialTitle } from './TutorialsData';

const brokenKeyboardCode = `// Avoid: div with onClick is not keyboard accessible
<div onClick={handleDelete} className='delete-icon'>
  ✕
</div>`;

const fixedKeyboardCode = `// Better: button is focusable and activatable by keyboard
<button onClick={handleDelete} className='delete-icon'>
  <span aria-hidden='true'>✕</span>
  <span className='visually-hidden'>Delete item</span>
</button>`;

const tabIndexCode = `// tabIndex={0}: adds element to natural tab order
<div role='button' tabIndex={0} onClick={handleClick} onKeyDown={handleKeyDown}>
  Custom control
</div>

// tabIndex={-1}: focusable programmatically, not via Tab key
// Useful for managing focus in modals or menus
<div ref={dialogRef} tabIndex={-1}>
  Dialog content
</div>

// Avoid tabIndex > 0; it overrides the natural tab order
// and creates a confusing experience for keyboard users`;

const focusVisibleCode = `/* Always provide a visible focus indicator */
:focus-visible {
  outline: 2px solid #005fcc;
  outline-offset: 2px;
}

/* Don't do this; it removes focus visibility entirely */
:focus {
  outline: none;
}`;

export default function TutorialKeyboardNavigation() {
  const tutorialName = getTutorialTitle('tutorials/tutorial-keyboard-navigation');

  useEffect(() => {
    document.title = tutorialName;
  }, [tutorialName]);

  return (
    <div className='page-wide'>
      <h1 className='tutorial-heading'>{tutorialName}</h1>
      <div className='tutorial-content'>
        <p>
          Many users navigate entirely by keyboard, people with motor disabilities, power users, and
          anyone using a screen reader. If your React components aren&apos;t keyboard accessible,
          these users are locked out.
        </p>

        <h2>How keyboard navigation works</h2>
        <p>
          Users press <span className='code'>Tab</span> to move forward through focusable elements
          and <span className='code'>Shift+Tab</span> to move backward. Interactive elements, links,
          buttons, inputs, selects, are focusable by default. Divs and spans are not.
        </p>

        <h2>The div onClick problem</h2>
        <p>
          A common mistake in React is attaching <span className='code'>onClick</span> to a div or
          span. A mouse user can click it fine. A keyboard user cannot reach it with Tab, and cannot
          activate it with Enter or Space.
        </p>

        <div className='code-box'>
          <SyntaxHighlighter language='jsx' style={a11yDark}>
            {brokenKeyboardCode}
          </SyntaxHighlighter>
        </div>

        <p>
          The fix is almost always to use a <span className='code'>&lt;button&gt;</span>. Buttons
          are focusable, activatable by keyboard, and announced correctly by screen readers.
        </p>

        <div className='code-box'>
          <SyntaxHighlighter language='jsx' style={a11yDark}>
            {fixedKeyboardCode}
          </SyntaxHighlighter>
        </div>

        <h2>tabIndex</h2>
        <p>
          The <span className='code'>tabIndex</span> attribute controls whether and how an element
          participates in keyboard navigation.
        </p>

        <div className='code-box'>
          <SyntaxHighlighter language='jsx' style={a11yDark}>
            {tabIndexCode}
          </SyntaxHighlighter>
        </div>

        <h2>Visible focus indicators</h2>
        <p>
          Keyboard users rely on the focus indicator, the visible outline around the focused
          element, to know where they are on the page. Removing it with{' '}
          <span className='code'>outline: none</span> is one of the most common accessibility
          mistakes in CSS. Use <span className='code'>:focus-visible</span> to show a clear
          indicator for keyboard users without affecting mouse users.
        </p>

        <div className='code-box'>
          <SyntaxHighlighter language='css' style={a11yDark}>
            {focusVisibleCode}
          </SyntaxHighlighter>
        </div>

        <div className='outlined-thing padded-thing-small'>
          <h2 className='bold'>Resources</h2>
          <a
            href='https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html'
            target='_blank'
            rel='noreferrer'
          >
            WCAG 2.1: Keyboard Accessible
          </a>
          <br />
          <a
            href='https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible'
            target='_blank'
            rel='noreferrer'
          >
            MDN: :focus-visible
          </a>
        </div>
      </div>
    </div>
  );
}
