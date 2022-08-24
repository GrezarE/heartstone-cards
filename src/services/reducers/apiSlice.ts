import { createSlice } from "@reduxjs/toolkit";

export interface IApiSlice {
  request: boolean;
  fail: boolean;
  success: boolean;
}

const initialState: IApiSlice = {
  request: false,
  fail: false,
  success: false,
};

export const apiSlice = createSlice({
  name: "apiSlice",
  initialState,
  reducers: {
    setRequest: (state) => ({
      ...state,
      request: true,
    }),
    setFail: (state) => ({
      ...state,
      request: false,
      fail: true,
    }),
    setSuccess: (state) => ({
      ...state,
      request: false,
      success: true,
    }),
  },
});

export const { setRequest, setFail, setSuccess } = apiSlice.actions;
export const apiReducer = apiSlice.reducer;
