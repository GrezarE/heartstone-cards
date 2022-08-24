import { createSlice } from "@reduxjs/toolkit";

interface ISelectorSlice {
  setSelect: string;
  className: string;
  qualities: string;
}

export const initialState: ISelectorSlice = {
  setSelect: "",
  className: "All",
  qualities: "All",
};

export const selectorSlice = createSlice({
  name: "selector",
  initialState,
  reducers: {
    setSelectorSet: (state, action) => ({
      ...state,
      setSelect: action.payload,
    }),
    setSelectorClass: (state, action) => ({
      ...state,
      className: action.payload,
    }),
    setSelectorQualities: (state, action) => ({
      ...state,
      qualities: action.payload,
    }),
  },
});

export const { setSelectorSet, setSelectorClass, setSelectorQualities } =
  selectorSlice.actions;
export const selectorReducer = selectorSlice.reducer;
