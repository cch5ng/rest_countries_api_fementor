import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders footer text', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/project is available here/i);
  expect(linkElement).toBeInTheDocument();
});
