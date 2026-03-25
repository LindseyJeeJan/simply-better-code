import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import TutorialAlerts from 'components/pages/tutorials/TutorialAlerts';

test('renders h1 with article title', () => {
  const { getByRole } = render(
    <MemoryRouter>
      <TutorialAlerts />
    </MemoryRouter>,
  );
  expect(getByRole('heading', { level: 1 })).toHaveTextContent(
    'Build Accessible Alerts and Notifications in React',
  );
});

test('sets document title', () => {
  render(
    <MemoryRouter>
      <TutorialAlerts />
    </MemoryRouter>,
  );
  expect(document.title).toBe('Build Accessible Alerts and Notifications in React');
});

test('renders at least one code block', () => {
  const { container } = render(
    <MemoryRouter>
      <TutorialAlerts />
    </MemoryRouter>,
  );
  expect(container.querySelector('pre')).toBeInTheDocument();
});
