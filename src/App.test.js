import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders footer text', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/project is available here/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders footer text', () => {
  render(<App />);
  fireEvent.click(screen.getByRole('button'));
  const header = getByText(/Where in the world?/i);
  expect(header).className.toContain('light_background_primary');
});


