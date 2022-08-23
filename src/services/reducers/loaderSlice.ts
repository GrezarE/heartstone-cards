import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ILoaderSlice {
  loading: boolean;
}

const initialState: ILoaderSlice = {
  loading: false,
};

export const loaderSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    setLoaderTrue: () => ({
      loading: true,
    }),
    setLoaderFalse: () => ({
      loading: false,
    }),
  },
});

export const { setLoaderTrue, setLoaderFalse } = loaderSlice.actions;
export const loaderReducer = loaderSlice.reducer;
