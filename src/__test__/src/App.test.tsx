import { render, screen } from "@testing-library/react";
import App from "../../App";

test("Renders main element", () => {
  render(<App />);
  const mainElement = screen.getByRole("button");
  expect(mainElement).toBeInTheDocument();
});
