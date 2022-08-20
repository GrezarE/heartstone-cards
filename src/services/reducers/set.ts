import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ICard {
  cardId?: string;
  dbfId?: string;
  name?: string;
  cardSet?: string;
  type?: string;
  rarity?: string;
  cost?: number;
  text?: string;
  flavor?: string;
  artist?: string;
  collectible?: true;
  playerClass?: string;
  img?: string;
  locale?: string;
}

interface ISetTypes {
  set: ICard[] | null;
}

const initialState: ISetTypes = {
  set: [],
};

export const setSlice = createSlice({
  name: "set",
  initialState,
  reducers: {
    getSetAction: (store, action: PayloadAction<any>) => ({
      ...store,
      set: action.payload,
    }),
  },
});

export const { getSetAction } = setSlice.actions;
export const setReducer = setSlice.reducer;
