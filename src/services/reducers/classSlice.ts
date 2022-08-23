import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IClassSlice {
  className: string;
}

const initialState: IClassSlice = {
  className: "All",
};

export const classSlice = createSlice({
  name: "class",
  initialState,
  reducers: {
    setClass: (store, action: PayloadAction<string>) => ({
      className: action.payload,
    }),
  },
});

export const { setClass } = classSlice.actions;
export const classReducer = classSlice.reducer;
