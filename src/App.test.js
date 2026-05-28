import { render, screen } from '@testing-library/react';
import App from './App';

test('renders photographer name on home', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', { name: /Elena Vasquez/i })
  ).toBeInTheDocument();
});
