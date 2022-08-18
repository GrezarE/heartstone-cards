import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, AppDispatch } from "../store";
import { RootState } from "../store";
import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";

export interface IsetSlice {
  request: boolean;
  fail: boolean;
  success: boolean;
}

const initialState: IsetSlice = {
  request: false,
  fail: false,
  success: false,
};

export const setSlice = createSlice({
  name: "setSlice",
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

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "7bf7eb33c7mshf1eb49c02f5b5fdp192a52jsn7230060a3115",
    "X-RapidAPI-Host": "omgvamp-hearthstone-v1.p.rapidapi.com",
  },
};

export const getSet: AppThunk = () => (dispatch) => {
  dispatch(setFail());
  fetch(
    "https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/sets/Murder%20at%20Castle%20Nathria",
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
};

export const { setRequest, setFail, setSuccess } = setSlice.actions;
export const setReducer = setSlice.reducer;
