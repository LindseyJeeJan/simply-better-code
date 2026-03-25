import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import TutorialKeyboardNavigation from 'components/pages/tutorials/TutorialKeyboardNavigation';

test('renders h1 with article title', () => {
  const { getByRole } = render(
    <MemoryRouter>
      <TutorialKeyboardNavigation />
    </MemoryRouter>,
  );
  expect(getByRole('heading', { level: 1 })).toHaveTextContent('Keyboard Navigation in React');
});

test('sets document title', () => {
  render(
    <MemoryRouter>
      <TutorialKeyboardNavigation />
    </MemoryRouter>,
  );
  expect(document.title).toBe('Keyboard Navigation in React');
});

test('renders at least one code block', () => {
  const { container } = render(
    <MemoryRouter>
      <TutorialKeyboardNavigation />
    </MemoryRouter>,
  );
  expect(container.querySelector('pre')).toBeInTheDocument();
});
