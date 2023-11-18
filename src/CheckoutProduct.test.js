import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CheckoutProduct from './CheckoutProduct';

jest.mock('./StateProvider', () => ({
  useStateValue: jest.fn(),
}));

test('renders CheckoutProduct component', () => {
  const product = {
    id: '123',
    title: 'Sample Product',
    price: 19.99,
    image: 'sample-image-url.jpg',
    rating: 4,
  };

  const dispatch = jest.fn(); // Mock the dispatch function

  // Mock the useStateValue hook to return the dispatch function
  require('./StateProvider').useStateValue.mockReturnValue([{}, dispatch]);

  render(<CheckoutProduct {...product} />);

  // Check if the product details are rendered
  const productTitle = screen.getByText('Sample Product');
  const productPrice = screen.getByText('19.99');
  const productRating = screen.getAllByText('⭐'); // Check for all stars

  expect(productTitle).toBeInTheDocument;
  expect(productPrice).toBeInTheDocument;
  expect(productRating).toHaveLength(4); // Assuming a rating of 4

  // Trigger the remove button click
  const removeButton = screen.getByText('Remove From Basket');
  fireEvent.click(removeButton);

  // Verify that the dispatch function was called with the correct action
  expect(dispatch).toHaveBeenCalledWith({
    type: 'REMOVE_FROM_BASKET',
    id: '123',
  });
});
