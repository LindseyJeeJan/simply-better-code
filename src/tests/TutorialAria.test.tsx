import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import TutorialAria from 'components/pages/tutorials/TutorialAria';

test('renders h1 with article title', () => {
  const { getByRole } = render(
    <MemoryRouter>
      <TutorialAria />
    </MemoryRouter>,
  );
  expect(getByRole('heading', { level: 1 })).toHaveTextContent('Understanding ARIA in React');
});

test('sets document title', () => {
  render(
    <MemoryRouter>
      <TutorialAria />
    </MemoryRouter>,
  );
  expect(document.title).toBe('Understanding ARIA in React');
});

test('renders at least one code block', () => {
  const { container } = render(
    <MemoryRouter>
      <TutorialAria />
    </MemoryRouter>,
  );
  expect(container.querySelector('pre')).toBeInTheDocument();
});
