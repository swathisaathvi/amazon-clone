import React from "react";
import { render } from "@testing-library/react";
import HomePage from "./HomePage";

// Mock the StateProvider module
jest.mock("./StateProvider", () => ({
  useStateValue: () => [{}, jest.fn()], // Mock the hook to return an empty object and a mock dispatch function
}));

describe("HomePage Component", () => {
  test("renders the HomePage component", () => {
    const { getAllByText } = render(<HomePage />);
  
    const productTitle = getAllByText("The Learn Startup: How Constant Innovation Creates Rapidly Successful Business Paperback");
    expect(productTitle[1]).toBeInTheDocument;
    
  });
});
