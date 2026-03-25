import { useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { getTutorialTitle } from './TutorialsData';

const modalMarkupCode = `
{isOpen && (
  <div
    role='dialog'
    aria-modal='true'
    aria-labelledby='modal-title'
    aria-describedby='modal-description'
  >
    <h2 id='modal-title'>Confirm Delete</h2>
    <p id='modal-description'>
      Are you sure you want to delete this item? This action cannot be undone.
    </p>
    <button onClick={handleConfirm}>Delete</button>
    <button onClick={handleClose}>Cancel</button>
  </div>
)}
`;

const focusCode = `
import { useEffect, useRef } from 'react';

export default function Modal({ isOpen, onClose, triggerRef }) {
  const modalRef = useRef(null);

  // Move focus into the modal when it opens
  useEffect(() => {
    if (isOpen) {
      modalRef.current?.focus();
    }
  }, [isOpen]);

  // Return focus to the trigger when the modal closes
  useEffect(() => {
    if (!isOpen && triggerRef.current) {
      triggerRef.current.focus();
    }
  }, [isOpen, triggerRef]);

  // Close on Escape key
  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      ref={modalRef}
      tabIndex={-1}
      role='dialog'
      aria-modal='true'
      aria-labelledby='modal-title'
      onKeyDown={handleKeyDown}
    >
      <h2 id='modal-title'>Dialog Title</h2>
      {/* ... */}
    </div>
  );
}
`;

export default function TutorialModal() {
  const tutorialName = getTutorialTitle('tutorials/tutorial-modal');

  useEffect(() => {
    document.title = tutorialName;
  }, [tutorialName]);

  return (
    <div className='page-wide'>
      <h1 className='tutorial-heading'>{tutorialName}</h1>
      <div className='tutorial-content'>
        <p>
          Modals are one of the most common sources of accessibility problems in React apps. When a
          modal opens, keyboard and screen reader users need to be inside it — not left behind on
          the page underneath. When it closes, they need to return to where they started.
        </p>

        <h2>Markup: role and aria attributes</h2>
        <p>
          The dialog element needs <span className='code'>role=&quot;dialog&quot;</span>,{' '}
          <span className='code'>aria-modal=&quot;true&quot;</span> (tells screen readers the rest
          of the page is inert), and <span className='code'>aria-labelledby</span> pointing to the
          dialog&apos;s heading so its title is announced when focus enters.
        </p>

        <div className='code-box'>
          <SyntaxHighlighter language='jsx' style={a11yDark}>
            {modalMarkupCode}
          </SyntaxHighlighter>
        </div>

        <h2>Focus management</h2>
        <p>
          When the modal opens, move focus inside it using a <span className='code'>useRef</span>{' '}
          and <span className='code'>useEffect</span>. Give the modal container{' '}
          <span className='code'>tabIndex={'{-1}'}</span> so it can receive programmatic focus even
          though it isn&apos;t natively focusable. When the modal closes, return focus to the
          trigger button that opened it.
        </p>

        <p>
          Close the modal when the user presses <span className='code'>Escape</span> — this is the
          expected keyboard interaction for any dialog.
        </p>

        <div className='code-box'>
          <SyntaxHighlighter language='jsx' style={a11yDark}>
            {focusCode}
          </SyntaxHighlighter>
        </div>

        <p>
          For full focus trapping (preventing Tab from leaving the modal), consider a library like{' '}
          <span className='code'>focus-trap-react</span> or implement it by listening for Tab and
          Shift+Tab on the modal container and cycling focus between the first and last focusable
          elements.
        </p>

        <div className='outlined-thing padded-thing-small'>
          <h2 className='bold'>Resources</h2>
          <a
            href='https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/'
            target='_blank'
            rel='noreferrer'
          >
            W3C ARIA Authoring Practices: Dialog (Modal) Pattern
          </a>
        </div>
      </div>
    </div>
  );
}
