import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import App from 'components/App';

test('renders learn react link', () => {
  const { getByText } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );
  const linkElement = getByText(/simply better code/i);
  expect(linkElement).toBeInTheDocument();
});
