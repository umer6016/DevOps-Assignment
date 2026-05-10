import { render, screen } from '@testing-library/react';
import App from './App';

// Mock fetch globally
global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve([]) })
);

test('renders Todo App heading', async () => {
  render(<App />);
  expect(screen.getByText('Todo App')).toBeInTheDocument();
});

test('renders Add button', () => {
  render(<App />);
  expect(screen.getByText('Add')).toBeInTheDocument();
});