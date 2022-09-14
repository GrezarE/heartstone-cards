import { queryAllByTestId, render, screen } from "@testing-library/react";
import { SetSelect } from "./set-select";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { MURDER_AT_CASTLE_NATHRIA } from "../../utils/constants";

const mockStore = configureMockStore([thunk]);

describe("Set select", () => {
  it("", () => {
    const store = mockStore();

    render(
      <Provider store={store}>
        <SetSelect />
      </Provider>
    );

    const box = screen.queryByTestId("set-box");
    const label = screen.queryByTestId("set-label");
    const select: HTMLSelectElement = screen.getByTestId("set-select");

    expect(box).toBeInTheDocument();
    expect(label?.textContent).toBe("Sets:");
    expect(select.value).toBe(MURDER_AT_CASTLE_NATHRIA);
  });
});
