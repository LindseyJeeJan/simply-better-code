import React from 'react';

// Mock react-router-dom for the test environment to avoid resolver issues
// introduced by newer ESM-only builds of react-router-dom when running
// Jest in this project setup.
jest.mock('react-router-dom', () => ({
  NavLink: (props: any) => <a {...props}>{props.children}</a>,
  BrowserRouter: ({ children }: any) => <div>{children}</div>,
  Link: (props: any) => <a {...props}>{props.children}</a>,
  Routes: ({ children }: any) => <div>{children}</div>,
  Route: ({ children }: any) => <div>{children}</div>,
}));

import { render } from '@testing-library/react';
import App from 'components/App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
