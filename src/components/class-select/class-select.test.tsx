import React from "react";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import { ClassSelect } from "./class-select";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const mockStore = configureMockStore([thunk]);

describe("Class Select", () => {
  it("Class", () => {
    const store = mockStore();

    render(
      <Provider store={store}>
        <ClassSelect />
      </Provider>
    );
    const box = screen.getByTestId("class-box");
    const label = screen.getByTestId("class-label");
    const select: HTMLSelectElement = screen.getByTestId("class-select");

    expect(box).toBeInTheDocument();
    expect(label.textContent).toBe("Class:");
    expect(select.value).toBe("All");
  });
});
