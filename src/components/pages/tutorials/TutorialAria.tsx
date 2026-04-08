import { useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { getTutorialTitle } from './TutorialsData';

const wrongAriaCode = `// Avoid: native button already has role="button"
<button role='button' aria-label='Submit form'>Submit</button>

// Avoid: aria-label on a div that isn't interactive
<div aria-label='wrapper'>...</div>`;

const ariaLabelCode = `// Use aria-label when there is no visible text label
<button aria-label='Close dialog'>
  <svg aria-hidden='true'>...</svg>
</button>`;

const ariaLabelledbyCode = `// Use aria-labelledby to reference visible text as the label
<section aria-labelledby='section-heading'>
  <h2 id='section-heading'>Recent Activity</h2>
  <p>...</p>
</section>`;

const ariaDescribedbyCode = `// Use aria-describedby for supplementary descriptions
<input
  type='password'
  aria-describedby='password-hint'
/>
<p id='password-hint'>Must be at least 8 characters.</p>`;

export default function TutorialAria() {
  const tutorialName = getTutorialTitle('tutorials/tutorial-aria');

  useEffect(() => {
    document.title = tutorialName;
  }, [tutorialName]);

  return (
    <div className='page-wide'>
      <h1 className='tutorial-heading'>{tutorialName}</h1>
      <div className='tutorial-content'>
        <p>
          ARIA (Accessible Rich Internet Applications) is a set of attributes you can add to HTML
          elements to provide extra information to assistive technologies like screen readers. It
          fills the gap when HTML alone cannot communicate the purpose or state of an element.
        </p>

        <h2>The first rule of ARIA</h2>
        <p>
          Do not use ARIA if a native HTML element already does the job. A{' '}
          <span className='code'>&lt;button&gt;</span> already has{' '}
          <span className='code'>role=&quot;button&quot;</span> built in. Adding it again is
          redundant, and adding ARIA attributes to elements that don&apos;t need them can actually
          make things worse for screen reader users.
        </p>

        <div className='code-box'>
          <SyntaxHighlighter language='jsx' style={a11yDark}>
            {wrongAriaCode}
          </SyntaxHighlighter>
        </div>

        <h2>aria-label</h2>
        <p>
          Use <span className='code'>aria-label</span> to give an element an accessible name when
          there is no visible text to reference. Common use case: icon-only buttons.
        </p>

        <div className='code-box'>
          <SyntaxHighlighter language='jsx' style={a11yDark}>
            {ariaLabelCode}
          </SyntaxHighlighter>
        </div>

        <h2>aria-labelledby</h2>
        <p>
          Use <span className='code'>aria-labelledby</span> to associate an element with visible
          text elsewhere on the page. The referenced element&apos;s text becomes the accessible
          name.
        </p>

        <div className='code-box'>
          <SyntaxHighlighter language='jsx' style={a11yDark}>
            {ariaLabelledbyCode}
          </SyntaxHighlighter>
        </div>

        <h2>aria-describedby</h2>
        <p>
          Use <span className='code'>aria-describedby</span> for supplementary information, a hint,
          constraint, or error message, that provides more detail beyond the label.
        </p>

        <div className='code-box'>
          <SyntaxHighlighter language='jsx' style={a11yDark}>
            {ariaDescribedbyCode}
          </SyntaxHighlighter>
        </div>

        <div className='outlined-thing padded-thing-small'>
          <h2 className='bold'>Resources</h2>
          <a href='https://www.w3.org/TR/using-aria/#rule1' target='_blank' rel='noreferrer'>
            W3C: First Rule of ARIA Use
          </a>
          <br />
          <a
            href='https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes'
            target='_blank'
            rel='noreferrer'
          >
            MDN: ARIA Attributes
          </a>
        </div>
      </div>
    </div>
  );
}
