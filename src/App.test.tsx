import { render, screen } from "@testing-library/react";
import App from "./App";

describe(App, () => {
  beforeEach(() => {
    render(<App />);
  });

  it("renders a news table", () => {
    expect(screen.getByRole("table")).toBeVisible();
  });
});
