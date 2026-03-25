import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import TutorialSemanticHtml from 'components/pages/tutorials/TutorialSemanticHtml';

test('renders h1 with article title', () => {
  const { getByRole } = render(
    <MemoryRouter>
      <TutorialSemanticHtml />
    </MemoryRouter>
  );
  expect(getByRole('heading', { level: 1 })).toHaveTextContent('Semantic HTML in React');
});

test('sets document title', () => {
  render(<MemoryRouter><TutorialSemanticHtml /></MemoryRouter>);
  expect(document.title).toBe('Semantic HTML in React');
});

test('renders at least one code block', () => {
  const { container } = render(
    <MemoryRouter>
      <TutorialSemanticHtml />
    </MemoryRouter>
  );
  expect(container.querySelector('pre')).toBeInTheDocument();
});
