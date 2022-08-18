import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../services/hooks";
import style from "./main.module.css";
import { getSet, setRequest } from "../../services/reducers/setSlice";

export const Main = () => {
  const dispatch = useAppDispatch();
  const store = useAppSelector((store) => store.set);
  useEffect(() => {
    dispatch(setRequest())
    dispatch(getSet())
  }, []);



  return <div className={style.main}></div>;
};
