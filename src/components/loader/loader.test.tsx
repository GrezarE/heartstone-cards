import { render, screen } from "@testing-library/react";
import { Loader } from "./loader";

describe("Loader", () => {
  it("loader", () => {
    const box = render(<Loader />);
    const loader = screen.getByTestId("loader");
    expect(box).toMatchSnapshot();
    expect(loader).toBeInTheDocument();
  });
});
