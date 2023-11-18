import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter
import Header from "./Header";
import { StateProvider } from "./StateProvider"; // You may need to import your StateProvider here.

test("Header component renders correctly", () => {
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
        <Header />
      </StateProvider>
    </Router>
  );

  // Check if the logo is displayed
  const logo = screen.getByRole("img", { name: "" });

  // Assert that the logo element is present
  expect(logo).toBeInTheDocument;

  // Check if the "Sign In" link is displayed
  const signInLink = screen.getByText("Sign In");
  expect(signInLink).toBeInTheDocument;

});
