import { useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { getTutorialTitle } from './TutorialsData';

const accordionCode = `
import { useState } from 'react';

function AccordionItem({ id, heading, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = \`panel-\${id}\`;
  const triggerId = \`trigger-\${id}\`;

  return (
    <div className='accordion-item'>
      <h3>
        <button
          id={triggerId}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {heading}
        </button>
      </h3>
      <div
        id={panelId}
        role='region'
        aria-labelledby={triggerId}
        hidden={!isOpen}
      >
        {children}
      </div>
    </div>
  );
}

export default function Accordion({ items }) {
  return (
    <div className='accordion'>
      {items.map((item) => (
        <AccordionItem key={item.id} id={item.id} heading={item.heading}>
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
}
`;

export default function TutorialAccordion() {
  const tutorialName = getTutorialTitle('tutorials/tutorial-accordion');

  useEffect(() => {
    document.title = tutorialName;
  }, [tutorialName]);

  return (
    <div className='page-wide'>
      <h1 className='tutorial-heading'>{tutorialName}</h1>
      <div className='tutorial-content'>
        <p>
          An accordion is a set of vertically stacked panels that can be expanded or collapsed. The
          accessibility challenge is making the open/closed state understandable to screen readers
          and ensuring the trigger and its content are correctly associated.
        </p>

        <h2>The pattern</h2>
        <p>
          Each panel has two parts: a trigger button and a content panel. The trigger uses{' '}
          <span className='code'>aria-expanded</span> to communicate state (
          <span className='code'>true</span> when open, <span className='code'>false</span> when
          closed) and <span className='code'>aria-controls</span> to point to the panel it controls.
          The panel uses <span className='code'>role=&quot;region&quot;</span> and{' '}
          <span className='code'>aria-labelledby</span> to reference back to its trigger.
        </p>

        <p>
          Using the HTML <span className='code'>hidden</span> attribute to show/hide panels (rather
          than CSS visibility) ensures that hidden content is removed from the accessibility tree
          and not reachable by Tab.
        </p>

        <p>
          Wrap each trigger in a heading element (<span className='code'>&lt;h3&gt;</span> in the
          example below) so screen reader users navigating by headings can find each accordion item.
        </p>

        <div className='code-box'>
          <SyntaxHighlighter language='jsx' style={a11yDark}>
            {accordionCode}
          </SyntaxHighlighter>
        </div>

        <div className='outlined-thing padded-thing-small'>
          <h2 className='bold'>Resources</h2>
          <a
            href='https://www.w3.org/WAI/ARIA/apg/patterns/accordion/'
            target='_blank'
            rel='noreferrer'
          >
            W3C ARIA Authoring Practices: Accordion Pattern
          </a>
        </div>
      </div>
    </div>
  );
}
