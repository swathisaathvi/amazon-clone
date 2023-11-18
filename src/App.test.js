import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { StateProvider } from './StateProvider';

describe('App Component', () => {
  const initialState = {
    basket: [],
  };

  const reducer = (state) => {
    return state;
  };

  it('renders without errors', () => {
    render(
      <StateProvider initialState={initialState} reducer={reducer}>
        <App />
      </StateProvider>
    );

    expect(screen.getByText("Sign In")).toBeInTheDocument;
  });

});
