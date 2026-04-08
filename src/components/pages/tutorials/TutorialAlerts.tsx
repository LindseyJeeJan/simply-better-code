import { useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { getTutorialTitle } from './TutorialsData';
import AlertMessage from '../../Alerts';

const politeCode = `
{/* aria-live="polite": screen reader waits for the user to finish
    their current task before announcing the new content.
    Use for non-urgent notifications. */}
<div aria-live='polite' aria-atomic='true'>
  {statusMessage && <p>{statusMessage}</p>}
</div>
`;

const assertiveCode = `
{/* aria-live="assertive": screen reader interrupts immediately
    to announce the new content.
    Use sparingly; only for urgent errors. */}
<div aria-live='assertive' aria-atomic='true'>
  {errorMessage && <p role='alert'>{errorMessage}</p>}
</div>
`;

const atomicCode = `
{/* aria-atomic="true": announces the entire region contents
    when anything inside changes, not just the changed node.
    Prevents partial announcements. */}
<div aria-live='polite' aria-atomic='true'>
  <p>{message}</p>
</div>
`;

export default function TutorialAlerts() {
  const tutorialName = getTutorialTitle('tutorials/tutorial-alerts');

  useEffect(() => {
    document.title = tutorialName;
  }, [tutorialName]);

  return (
    <div className='page-wide'>
      <h1 className='tutorial-heading'>{tutorialName}</h1>
      <div className='tutorial-content'>
        <p>
          When content on a page changes dynamically, a form error appears, a success message shows,
          a notification arrives, sighted users see it immediately. Screen reader users miss it
          unless you explicitly tell the browser to announce it. That&apos;s what{' '}
          <span className='code'>aria-live</span> regions are for.
        </p>

        <h2>aria-live=&quot;polite&quot;</h2>
        <p>
          A polite live region announces its contents after the user finishes what they are
          currently doing. Use this for status messages, confirmations, and non-urgent
          notifications.
        </p>

        <div className='code-box'>
          <SyntaxHighlighter language='jsx' style={a11yDark}>
            {politeCode}
          </SyntaxHighlighter>
        </div>

        <h2>aria-live=&quot;assertive&quot;</h2>
        <p>
          An assertive live region interrupts the screen reader immediately. Use it sparingly; only
          for time-sensitive errors where the user must act now. Overusing assertive regions creates
          a confusing, interruption-heavy experience.
        </p>

        <div className='code-box'>
          <SyntaxHighlighter language='jsx' style={a11yDark}>
            {assertiveCode}
          </SyntaxHighlighter>
        </div>

        <h2>aria-atomic</h2>
        <p>
          Adding <span className='code'>aria-atomic=&quot;true&quot;</span> to a live region tells
          the browser to announce the entire region&apos;s content whenever anything inside it
          changes. Without it, the browser may only announce the specific text node that changed,
          which can produce confusing partial announcements.
        </p>

        <div className='code-box'>
          <SyntaxHighlighter language='jsx' style={a11yDark}>
            {atomicCode}
          </SyntaxHighlighter>
        </div>

        <h2>Example: AlertMessage component</h2>
        <p>
          Here is the <span className='code'>AlertMessage</span> component used throughout this
          site. It uses <span className='code'>role=&quot;alert&quot;</span> for error messages,
          which implicitly sets <span className='code'>aria-live=&quot;assertive&quot;</span>, and
          hides itself with <span className='code'>display: none</span> when no message is provided.
        </p>

        <AlertMessage alertType='error' message='Error: This field is required.' />
        <AlertMessage alertType='information' message='Your changes have been saved.' />

        <div className='outlined-thing padded-thing-small'>
          <h2 className='bold'>Resources</h2>
          <a
            href='https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions'
            target='_blank'
            rel='noreferrer'
          >
            MDN: ARIA Live Regions
          </a>
          <br />
          <a
            href='https://www.w3.org/WAI/WCAG21/Understanding/status-messages.html'
            target='_blank'
            rel='noreferrer'
          >
            WCAG 2.1: Understanding Status Messages
          </a>
        </div>
      </div>
    </div>
  );
}
