import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../services/hooks";
import style from "./main.module.css";
import { setRequest } from "../../services/reducers/apiSlice";
import { getSet } from "../../services/actions/getSet";

export const Main = () => {
  const dispatch = useAppDispatch();
  const store = useAppSelector((store) => store);

  useEffect(() => {
    // dispatch(setRequest())
    // dispatch(getSet())
  }, []);

useEffect(() => {
   console.log(store.set.set)
})

  return <div className={style.main}></div>;
};
