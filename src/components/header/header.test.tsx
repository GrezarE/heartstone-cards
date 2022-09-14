import { render } from "@testing-library/react";
import { Header } from "./header";

describe("Header", () => {
  it("Header", () => {
    const header = render(<Header />);
    expect(header).toMatchSnapshot();
  });
});
