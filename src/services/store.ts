import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

const store = configureStore({
  reducer: {},
  middleware: [thunk],
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
