import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("Add component", () => {
  test("renders learn react link", () => {
    render(<App />);
    ///
    const linkElement = screen.getByText(/'link'/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("Toggler", () => {
    render(<App />);

    expect(screen.queryByTestId("menu")).not.toBeInTheDocument();

    const btn = screen.getByTestId("btn");
    fireEvent.click(btn);

    expect(screen.getByTestId("menu")).toBeInTheDocument();
  });
});
