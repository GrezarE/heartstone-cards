import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ISelectorSlice {
  set: string;
  class: string;
  rarity: string;
}

export const initialState: ISelectorSlice = {
  set: "",
  class: "",
  rarity: "",
};

export const selectorSlice = createSlice({
  name: "selector",
  initialState,
  reducers: {
    setSelectorSet: (state, action) => ({
      ...state,
      set: action.payload,
    }),
    setSelectorClass: (state, action) => ({
      ...state,
      class: action.payload,
    }),
    setSelectorRarity: (state, action) => ({
      ...state,
      rarity: action.payload,
    }),
  },
});

export const { setSelectorSet, setSelectorClass, setSelectorRarity } =
  selectorSlice.actions;
export const selectorReducer = selectorSlice.reducer;
