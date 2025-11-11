import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from 'components/App';

test('renders app title', () => {
  const { getByText } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );
  const title = getByText(/Simply Better Code/i);
  expect(title).toBeInTheDocument();
});
