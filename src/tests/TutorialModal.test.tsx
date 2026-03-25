import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import TutorialModal from 'components/pages/tutorials/TutorialModal';

test('renders h1 with article title', () => {
  const { getByRole } = render(
    <MemoryRouter>
      <TutorialModal />
    </MemoryRouter>,
  );
  expect(getByRole('heading', { level: 1 })).toHaveTextContent(
    'Build an Accessible Modal in React',
  );
});

test('sets document title', () => {
  render(
    <MemoryRouter>
      <TutorialModal />
    </MemoryRouter>,
  );
  expect(document.title).toBe('Build an Accessible Modal in React');
});

test('renders at least one code block', () => {
  const { container } = render(
    <MemoryRouter>
      <TutorialModal />
    </MemoryRouter>,
  );
  expect(container.querySelector('pre')).toBeInTheDocument();
});
