import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ISetTypes {
  set: any[];
}

const initialState: ISetTypes = {
  set: [],
};

export const setSlice = createSlice({
  name: 'set',
  initialState,
  reducers: {
    getSetAction: (store, action: PayloadAction<any>) => ({
      ...store, set: action.payload
    })
  }
})

export const { getSetAction } = setSlice.actions
export const setReducer = setSlice.reducer
