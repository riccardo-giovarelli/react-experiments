import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders app title", () => {
  render(<App />);
  const titleText = screen.getByText(/React Lab/i);
  expect(titleText).toBeInTheDocument();
});
