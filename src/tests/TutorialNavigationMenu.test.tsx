import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import TutorialNavigationMenu from 'components/pages/tutorials/TutorialNavigationMenu';

test('renders h1 with article title', () => {
  const { getByRole } = render(
    <MemoryRouter>
      <TutorialNavigationMenu />
    </MemoryRouter>,
  );
  expect(getByRole('heading', { level: 1 })).toHaveTextContent(
    'Build an Accessible Navigation Menu in React',
  );
});

test('sets document title', () => {
  render(
    <MemoryRouter>
      <TutorialNavigationMenu />
    </MemoryRouter>,
  );
  expect(document.title).toBe('Build an Accessible Navigation Menu in React');
});

test('renders at least one code block', () => {
  const { container } = render(
    <MemoryRouter>
      <TutorialNavigationMenu />
    </MemoryRouter>,
  );
  expect(container.querySelector('pre')).toBeInTheDocument();
});
