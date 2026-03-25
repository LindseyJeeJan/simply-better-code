import { useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { getTutorialTitle } from './TutorialsData';

const inaccessibleCode = `
// Avoid: div and span carry no semantic meaning
<div onClick={handleClick}>Submit</div>
<span onClick={handleNav}>Home</span>
`;

const accessibleCode = `
// Better: use elements that communicate purpose
<button onClick={handleClick}>Submit</button>
<a href='/'>Home</a>
`;

const structureCode = `
<header>
  <nav aria-label='main navigation'>...</nav>
</header>
<main>
  <article>
    <h1>Page Title</h1>
    <section>
      <h2>Section Heading</h2>
      <p>Content...</p>
    </section>
  </article>
</main>
<footer>...</footer>
`;

export default function TutorialSemanticHtml() {
  const tutorialName = getTutorialTitle('tutorials/tutorial-semantic-html');

  useEffect(() => {
    document.title = tutorialName;
  }, [tutorialName]);

  return (
    <div className='page-wide'>
      <h1 className='tutorial-heading'>{tutorialName}</h1>
      <div className='tutorial-content'>
        <p>
          Semantic HTML means using elements that describe the meaning of your content, not just its
          appearance. When you use the right element, browsers and assistive technologies understand
          the structure of your page — and users benefit.
        </p>

        <h2>The problem with div soup</h2>
        <p>
          React makes it easy to wrap everything in a <span className='code'>&lt;div&gt;</span>.
          Divs are neutral — they carry no meaning to screen readers or browsers. A user navigating
          by keyboard or screen reader gets no clues about what a div does or how to interact with
          it.
        </p>

        <div className='code-box'>
          <SyntaxHighlighter language='jsx' style={a11yDark}>
            {inaccessibleCode}
          </SyntaxHighlighter>
        </div>

        <p>
          A <span className='code'>&lt;button&gt;</span> is focusable by keyboard, activatable by
          pressing Enter or Space, and announced as &quot;button&quot; by screen readers — for free,
          with no extra work. A <span className='code'>&lt;div onClick&gt;</span> does none of that.
        </p>

        <div className='code-box'>
          <SyntaxHighlighter language='jsx' style={a11yDark}>
            {accessibleCode}
          </SyntaxHighlighter>
        </div>

        <h2>Landmark elements</h2>
        <p>
          HTML5 landmark elements let screen reader users jump directly to key sections of a page.
          Use <span className='code'>&lt;header&gt;</span>,{' '}
          <span className='code'>&lt;nav&gt;</span>, <span className='code'>&lt;main&gt;</span>,{' '}
          <span className='code'>&lt;article&gt;</span>,{' '}
          <span className='code'>&lt;section&gt;</span>, and{' '}
          <span className='code'>&lt;footer&gt;</span> to structure your page.
        </p>

        <div className='code-box'>
          <SyntaxHighlighter language='jsx' style={a11yDark}>
            {structureCode}
          </SyntaxHighlighter>
        </div>

        <p>
          The rule of thumb: if a native HTML element exists for what you&apos;re building, use it.
          Semantic elements come with accessibility built in. Custom elements require you to rebuild
          that behaviour manually with ARIA — and it&apos;s easy to get wrong.
        </p>

        <div className='outlined-thing padded-thing-small'>
          <h2 className='bold'>Resources</h2>
          <a
            href='https://developer.mozilla.org/en-US/docs/Glossary/Semantics#semantics_in_html'
            target='_blank'
            rel='noreferrer'
          >
            MDN: Semantics in HTML
          </a>
          <br />
          <a
            href='https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/'
            target='_blank'
            rel='noreferrer'
          >
            W3C: ARIA Landmark Regions
          </a>
        </div>
      </div>
    </div>
  );
}
