import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../pages/index";
import "isomorphic-fetch";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ rates: { CAD: 1.42 } }),
  })
);

describe("Home component", () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  it("should render welcome message when no search has been made", () => {
    render(<Home />);
    expect(screen.getByText("Welcome to the Weather App")).toBeInTheDocument();
  });

  test("stores what is typed into the input", () => {
    const { getByRole } = render(<Home />);

    const input = getByRole("textbox");

    fireEvent.change(input, { target: { value: "Hello, world!" } });

    expect(input.value).toBe("Hello, world!");
  });
});
