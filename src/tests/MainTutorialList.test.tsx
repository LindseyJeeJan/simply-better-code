import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MainTutorialList from 'components/MainTutorialList';

test('renders Foundational Concepts group heading', () => {
  const { getByText } = render(
    <MemoryRouter>
      <MainTutorialList />
    </MemoryRouter>,
  );
  expect(getByText('Foundational Concepts')).toBeInTheDocument();
});

test('renders Component Articles group heading', () => {
  const { getByText } = render(
    <MemoryRouter>
      <MainTutorialList />
    </MemoryRouter>,
  );
  expect(getByText('Component Articles')).toBeInTheDocument();
});

test('renders a link for each tutorial', () => {
  const { getAllByRole } = render(
    <MemoryRouter>
      <MainTutorialList />
    </MemoryRouter>,
  );
  // 2 existing + 7 new = 9 total
  expect(getAllByRole('link')).toHaveLength(9);
});
