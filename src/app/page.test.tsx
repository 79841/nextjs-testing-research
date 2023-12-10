import { render, screen } from "@testing-library/react";
import Home from "./page";

describe("<Home />", () => {
  test("renders correctly", () => {
    render(<Home />);
    const headingElement = screen.getByText(/home/i);
    expect(headingElement).toBeInTheDocument();
  });

  test("fetch users", async () => {
    render(<Home />);
    const listElements = await screen.findAllByRole("listitem");
    expect(listElements).toHaveLength(4);
  });
});
