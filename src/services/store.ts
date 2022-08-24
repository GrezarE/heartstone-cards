import { configureStore } from "@reduxjs/toolkit";
import thunk, { ThunkAction } from "redux-thunk";
import { Action, ActionCreator } from "redux";
import { apiReducer } from "./reducers/apiSlice";
import { setReducer } from "./reducers/set";
import { selectorReducer } from "./reducers/selectorSlice";
import { loaderReducer } from "./reducers/loaderSlice";
import { classReducer } from "./reducers/classSlice";

export const store = configureStore({
  reducer: {
    api: apiReducer,
    set: setReducer,
    selector: selectorReducer,
    loader: loaderReducer,
    class: classReducer,
  },
  middleware: [thunk],
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, RootState, unknown, Action>
>;
