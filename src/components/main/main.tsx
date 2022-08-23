import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../services/hooks";
import style from "./main.module.css";
import { getSet } from "../../services/actions/getSet";
import { murderAtCastleNathria } from "../../utils/constants";
import { Card } from "../card/card";
import { SelectForm } from "../select-form/select-form";
import { Loader } from "../loader/loader";

export const Main = () => {
  const dispatch = useAppDispatch();
  const set = useAppSelector((store) => store.set.set);
  const selection = useAppSelector((store) => store.selector);
  const loader = useAppSelector((store) => store.loader.loading);
  // const setCollect = set?.map((item) => item);

  const setSelect = selection.set;

  useEffect(() => {
    if (setSelect) {
      dispatch(getSet(setSelect));
    }
  }, [setSelect]);

  useEffect(() => {
    console.log(set);
  });
  useEffect(() => {
    console.log(setSelect);
  }, [setSelect]);

  useEffect(() => {
    console.log(loader);
  }, [loader]);

  return (
    <div className={style.main}>
      <SelectForm />
      <ul>
        {set &&
          set.map((item, index) => <Card cardImage={item.img} key={index} />)}
      </ul>
      {loader && <Loader />}
    </div>
  );
};
