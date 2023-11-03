import React from "react";
import { fireEvent, render, screen } from '@testing-library/react';
import Checkout from "./Checkout";
import { StateProvider } from "./StateProvider";
import reducer from "./reducer";

const MockedStateProvider = ({ children }) => (
  <StateProvider initialState={{ basket: [
    { id: 1, title: "Item 1", image: "item1.jpg", price: 10, rating: 4 },
    { id: 2, title: "Item 2", image: "item2.jpg", price: 15, rating: 5 },
  ] }} reducer={reducer}>
    {children}
  </StateProvider>
);

test("performs Checkout page snapshot testing", () => {
  const { asFragment } = render(
    <MockedStateProvider>
      <Checkout />
    </MockedStateProvider>
  );

  expect(screen.getByText("Item 1")).toBeInTheDocument;
  expect(screen.getByText("Item 2")).toBeInTheDocument;
  
  //const remFromBsktBtn = screen.getAllByText("Remove From Basket");
  //fireEvent.click(remFromBsktBtn[1]);

  expect(asFragment()).toMatchSnapshot();
});
