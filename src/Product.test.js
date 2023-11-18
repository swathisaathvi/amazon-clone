import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Product from "./Product";

jest.mock("./StateProvider", () => ({
  useStateValue: jest.fn(),
}));

test("renders Product Component", () => {
  const product = {
    id: "123",
    title: "Sample Product",
    price: 19.99,
    image: "sample-image-url.jpg",
    rating: 4,
  };

  const dispatch = jest.fn(); // Mock the dispatch function

  // Mock the useStateValue hook to return the dispatch function
  require("./StateProvider").useStateValue.mockReturnValue([{},dispatch]);
  render(<Product {...product} />);

  // Check if the product details are rendered
  expect(screen.getByText("Sample Product")).toBeInTheDocument;
  expect(screen.getByText("19.99")).toBeInTheDocument;
  expect(screen.getAllByText("⭐")).toHaveLength(4); // Assuming a rating of 4

  const addToBasket = screen.getByText("Add to Basket");
  fireEvent.click(addToBasket);

  //Verify that the dispatch function was called with the correct action
    expect(dispatch).toHaveBeenCalledWith({
      type: "ADD_TO_BASKET",
      item: {
        id: "123",
        title: "Sample Product",
        price: 19.99,
        image: "sample-image-url.jpg",
        rating: 4,
      }
    });
});
