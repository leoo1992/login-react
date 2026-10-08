import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders the login form with accessible labels', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /login sinduscon/i })).toBeInTheDocument();
  expect(screen.getByLabelText(/e-mail/i)).toHaveAttribute('type', 'email');
  expect(screen.getByLabelText(/senha/i)).toHaveAttribute('type', 'password');
  expect(screen.getByRole('button', { name: /^entrar$/i })).toHaveAttribute('type', 'submit');
});

test('allows editing the email field', () => {
  render(<App />);
  const email = screen.getByLabelText(/e-mail/i);
  fireEvent.change(email, { target: { value: 'teste@example.com' } });
  expect(email).toHaveValue('teste@example.com');
});
