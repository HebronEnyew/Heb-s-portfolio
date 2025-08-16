import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import { expect } from '@jest/globals';
import test from 'node:test';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
