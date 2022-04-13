import { render, screen } from "@testing-library/react";
import { NewsTable } from "./NewsTable";

describe(NewsTable, () => {
  beforeEach(() => {
    render(<NewsTable />);
  });

  it("renders 3 rows", () => {
    expect(screen.getAllByRole("row")).toHaveLength(3);
  });
});
