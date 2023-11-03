import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Login from '../Login';

test('renders the Login component', () => {
    render(<Login />);
    expect(screen.getByText('Login Here')).toBeTruthy();
    expect(screen.getByPlaceholderText('Email')).toBeTruthy();
    expect(screen.getByPlaceholderText('Password')).toBeTruthy();
    expect(screen.getByText('Login')).toBeTruthy();
  });
  
test('opens SignUp modal when SignUp button is clicked', () => {
  render(<Login />);
  const signUpButton = screen.getByText('SignUp');
  fireEvent.click(signUpButton);

});

test('closes SignUp modal when close button is clicked', () => {
  render(<Login />);
  const signUpButton = screen.getByText('SignUp');
  fireEvent.click(signUpButton);
  const closeButton = screen.getByTestId('close-button');
  fireEvent.click(closeButton);
  
});
