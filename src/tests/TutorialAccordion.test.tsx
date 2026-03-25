import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import TutorialAccordion from 'components/pages/tutorials/TutorialAccordion';

test('renders h1 with article title', () => {
  const { getByRole } = render(
    <MemoryRouter>
      <TutorialAccordion />
    </MemoryRouter>,
  );
  expect(getByRole('heading', { level: 1 })).toHaveTextContent(
    'Build an Accessible Accordion in React',
  );
});

test('sets document title', () => {
  render(
    <MemoryRouter>
      <TutorialAccordion />
    </MemoryRouter>,
  );
  expect(document.title).toBe('Build an Accessible Accordion in React');
});

test('renders at least one code block', () => {
  const { container } = render(
    <MemoryRouter>
      <TutorialAccordion />
    </MemoryRouter>,
  );
  expect(container.querySelector('pre')).toBeInTheDocument();
});
