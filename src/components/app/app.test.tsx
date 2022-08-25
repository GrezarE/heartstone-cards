import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import { App } from "./app";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const mockStore = configureMockStore([thunk]);

describe("App", () => {
  it("app", () => {
    const store = mockStore({
      set: { set: null },
      selector: {
        className: "All",
        qualities: "All",
        setSelect: "",
      },
      loader: {
        loading: false,
      },
    });
    const app = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const box = screen.getByTestId("app");
    expect(app).toMatchSnapshot();
    expect(box).toBeInTheDocument();
  });
});
