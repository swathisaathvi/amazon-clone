import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Login from '../Login';

test('renders the Login component', () => {
    render(<Login />);
    
    // Check if the "Login Here" text is rendered
    expect(screen.getByText('Login Here')).toBeTruthy();
  
    // Check if the "Email" input field is rendered
    expect(screen.getByPlaceholderText('Email')).toBeTruthy();
  
    // Check if the "Password" input field is rendered
    expect(screen.getByPlaceholderText('Password')).toBeTruthy();
  
    // Check if the "Login" button is rendered
    expect(screen.getByText('Login')).toBeTruthy();
  });
  
// test('opens SignUp modal when SignUp button is clicked', () => {
//   render(<Login />);
  
//   // Get the SignUp button by its text
//   const signUpButton = screen.getByText('SignUp');
  
//   // Check if the modal is initially closed
//   expect(screen.queryByText('Simple centered modal')).not.toBeInTheDocument();

//   // Click the SignUp button to open the modal
//   fireEvent.click(signUpButton);

//   // Check if the modal is now open
//   expect(screen.getByText('Simple centered modal')).toBeInTheDocument();
// });

// test('closes SignUp modal when close button is clicked', () => {
//   render(<Login />);
  
//   // Get the SignUp button by its text
//   const signUpButton = screen.getByText('SignUp');
  
//   // Click the SignUp button to open the modal
//   fireEvent.click(signUpButton);

//   // Check if the modal is open
//   expect(screen.getByText('Simple centered modal')).toBeInTheDocument();

//   // Get the close button by its text
//   const closeButton = screen.getByText('Close');

//   // Click the close button to close the modal
//   fireEvent.click(closeButton);

//   // Check if the modal is now closed
//   expect(screen.queryByText('Simple centered modal')).not.toBeInTheDocument();
// });
