import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';

test('renders footer text', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/project is available here/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders header with default light style', () => {
  render(<App />);
  //fireEvent.click(screen.getByRole('button'));
  const title = screen.getByText(/Where in the world/i);
  const titleDiv = title.parentElement;
  const header = titleDiv.parentElement;
  expect(header.className).toMatch(/light_background_primary/i);
  expect(header.className).toMatch(/light_typography_primary/i);
});

test('handles style button click by rendering header with dark style', () => {
  render(<App />);
  fireEvent.click(screen.getByRole('button'));
  const title = screen.getByText(/Where in the world/i);
  const titleDiv = title.parentElement;
  const header = titleDiv.parentElement;
  expect(header.className).toMatch(/dark_background_primary/i);
  expect(header.className).toMatch(/dark_typography_primary/i);
});

