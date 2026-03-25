import { useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { getTutorialTitle } from './TutorialsData';

const skipLinkCode = `
/* CSS: visually hidden until focused */
.skip-link {
  position: absolute;
  left: -9999px;
}
.skip-link:focus {
  left: 0;
  top: 0;
}
`;

const skipLinkJsxCode = `
<a href='#main-content' className='skip-link'>
  Skip to main content
</a>

{/* ... header, nav ... */}

<main id='main-content'>
  {/* page content */}
</main>
`;

const navLandmarkCode = `
<header>
  <nav aria-label='main navigation'>
    <ul>
      <li><a href='/'>Home</a></li>
      <li><a href='/about'>About</a></li>
      <li><a href='/articles'>Articles</a></li>
    </ul>
  </nav>
</header>
`;

const dropdownCode = `
import { useState } from 'react';

export default function NavDropdown({ label, items }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      setIsOpen(false);
    }
  };

  return (
    <li onKeyDown={handleKeyDown}>
      <button
        aria-expanded={isOpen}
        aria-controls='dropdown-list'
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {label}
      </button>
      {isOpen && (
        <ul id='dropdown-list'>
          {items.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
`;

export default function TutorialNavigationMenu() {
  const tutorialName = getTutorialTitle('tutorials/tutorial-navigation-menu');

  useEffect(() => {
    document.title = tutorialName;
  }, [tutorialName]);

  return (
    <div className='page-wide'>
      <h1 className='tutorial-heading'>{tutorialName}</h1>
      <div className='tutorial-content'>
        <p>
          Navigation menus are used on almost every page. Getting them right means keyboard users
          can move through your site, screen reader users understand the structure, and everyone can
          skip past repetitive navigation quickly.
        </p>

        <h2>Skip links</h2>
        <p>
          A skip link is a visually hidden anchor at the top of the page that lets keyboard users
          jump directly to the main content, bypassing repeated navigation. It appears on screen
          only when focused.
        </p>

        <div className='code-box'>
          <SyntaxHighlighter language='css' style={a11yDark}>
            {skipLinkCode}
          </SyntaxHighlighter>
        </div>

        <div className='code-box'>
          <SyntaxHighlighter language='jsx' style={a11yDark}>
            {skipLinkJsxCode}
          </SyntaxHighlighter>
        </div>

        <h2>The nav landmark</h2>
        <p>
          Wrap your navigation in a <span className='code'>&lt;nav&gt;</span> element. Screen reader
          users can jump directly to nav landmarks. If you have more than one nav on a page, give
          each one a unique <span className='code'>aria-label</span> so users can distinguish them.
        </p>

        <div className='code-box'>
          <SyntaxHighlighter language='jsx' style={a11yDark}>
            {navLandmarkCode}
          </SyntaxHighlighter>
        </div>

        <h2>Accessible dropdown (disclosure pattern)</h2>
        <p>
          The simplest accessible dropdown uses a <span className='code'>&lt;button&gt;</span> with{' '}
          <span className='code'>aria-expanded</span> to toggle a list of links.{' '}
          <span className='code'>aria-expanded=&quot;true&quot;</span> tells screen readers the menu
          is open; <span className='code'>false</span> tells them it is closed. Pressing Escape
          should close the menu.
        </p>

        <div className='code-box'>
          <SyntaxHighlighter language='jsx' style={a11yDark}>
            {dropdownCode}
          </SyntaxHighlighter>
        </div>

        <div className='outlined-thing padded-thing-small'>
          <h2 className='bold'>Resources</h2>
          <a
            href='https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation/'
            target='_blank'
            rel='noreferrer'
          >
            W3C ARIA: Disclosure Navigation Menu Example
          </a>
          <br />
          <a
            href='https://www.w3.org/WAI/WCAG21/Techniques/general/G1'
            target='_blank'
            rel='noreferrer'
          >
            WCAG Technique G1: Skip Navigation Links
          </a>
        </div>
      </div>
    </div>
  );
}
