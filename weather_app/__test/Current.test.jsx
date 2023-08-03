import { render, screen } from "@testing-library/react";
import Current from "../components/Current";
import "@testing-library/jest-dom";

const mockData = {
  data: {
    current: {
      condition: {
        icon: "https://example.com/weather-icon.png",
        text: "Partly Cloudy",
      },
      temp_c: 20,
    },
    location: {
      name: "San Francisco",
      region: "California",
    },
  },
};

describe("Home", () => {
  test("renders current component", () => {
    render(<Current data={mockData} />);
    expect(screen.getByText("Today")).toBeVisible();
  });
});
