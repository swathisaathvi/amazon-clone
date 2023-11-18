import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter
import Subtotal from "./Subtotal";
import { StateProvider } from "./StateProvider"; // You may need to import your StateProvider here.

test("Subtotal component renders correctly", () => {
  // Define a mock state to use in the test
  const mockState = {
    basket: [
      // Define the items you want in the basket for testing
      { id: 1, name: "Item 1", price: 10 },
      { id: 2, name: "Item 2", price: 20 },
    ],
  };

  render(
    <Router> {/* Wrap the component with BrowserRouter */}
      <StateProvider initialState={mockState}>
        <Subtotal />
      </StateProvider>
    </Router>
  );

  //const subtotalText = screen.getByText('Subtotal (2 items) : <strong>$30</strong>');
  const subtotalText = screen.getByTestId('subtotal');
  expect(subtotalText.firstElementChild.innerHTML).toBe('$30')

  // Test if the gift checkbox is displayed
//   const giftCheckbox = ;
  expect(screen.getByText('This order contains the gift service')).toBeInTheDocument;
});

// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import Subtotal from './Subtotal';

// // Mock the StateProvider module
// jest.mock('./StateProvider', () => ({
//   ...jest.requireActual('./StateProvider'), // Use the actual implementation
//   useStateValue: jest.fn(() => ({ basket: [] })), // Mock the return value with an empty basket
// }));

// test('renders Subtotal component with correct subtotal value and gift checkbox', () => {
//   render(<Subtotal />);

//   // Test if the subtotal text is displayed correctly
//   const subtotalText = screen.getByText('Subtotal (0 items) : $0.00');
//   expect(subtotalText).toBeInTheDocument();

//   // Test if the gift checkbox is displayed
//   const giftCheckbox = screen.getByLabelText('This order contains the gift service');
//   expect(giftCheckbox).toBeInTheDocument();

//   // You can add more assertions based on your component's structure
// });

// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import Subtotal from './Subtotal';

// // Define your sample basket here
// // const sampleBasket = [
// //   // Add sample items to your basket if needed for the test
// //   // You can define items with their price, quantity, etc.
// // ];

// const testnew= [];

// // Mock the StateProvider module
// jest.mock('./StateProvider', () => ({
//   ...jest.requireActual('./StateProvider'), // Use the actual implementation
//   useStateValue: jest.fn(() => ({ basket: testnew })),
// }));

// test('renders Subtotal component with correct subtotal value and gift checkbox', () => {
//   render(<Subtotal />);

//   // Test if the subtotal text is displayed correctly
//   const subtotalText = screen.getByText(`Subtotal (${testnew.length} items) : $0.00`);
//   expect(subtotalText).toBeInTheDocument();

//   // Test if the gift checkbox is displayed
//   const giftCheckbox = screen.getByLabelText('This order contains the gift service');
//   expect(giftCheckbox).toBeInTheDocument();

//   // You can add more assertions based on your component's structure
// });
