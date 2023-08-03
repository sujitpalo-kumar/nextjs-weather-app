import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../pages/index";
import "isomorphic-fetch";
import { act } from "react-dom/test-utils";

describe("Home component", () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ data: "Fake data" }),
      })
    );
  });

  afterEach(() => {
    jest.restoreAllMocks();
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

  it("fetches data on search", async () => {
    const { getByPlaceholderText } = render(<Home />);
    const input = getByPlaceholderText("Search...");

    await act(async () => {
      fireEvent.change(input, { target: { value: "Test City" } });
      fireEvent.keyDown(input, { key: "Enter", code: "Enter" });
    });

    expect(fetch).toHaveBeenCalledWith(
      "http://api.weatherapi.com/v1/forecast.json?key=98f7ba78521d405ebea151602232207&q=Test City&days=3&aqi=yes&alerts=yes"
    );
  });
});
