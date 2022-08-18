import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, AppDispatch } from "../store";
import { RootState } from "../store";
import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { setFail, setSuccess, setRequest } from "../reducers/apiSlice";
import { checkResponse } from "../../utils/check-response";
import { getSetAction } from "../reducers/set";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "7bf7eb33c7mshf1eb49c02f5b5fdp192a52jsn7230060a3115",
    "X-RapidAPI-Host": "omgvamp-hearthstone-v1.p.rapidapi.com",
  },
};

export const getSet: AppThunk = () => (dispatch) => {
  dispatch(setRequest());
  fetch(
    "https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/sets/Murder%20at%20Castle%20Nathria?locale=ruRU",
    options
  )
    .then(checkResponse)
    .then((response) => {
      dispatch(setSuccess());
      dispatch(getSetAction(response));
      console.log(response);
    })
    .catch((err) => {
      dispatch(setFail());
      console.error(err);
    });
};
