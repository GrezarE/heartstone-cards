import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../services/hooks";
import style from "./main.module.css";
import { getSet } from "../../services/actions/getSet";
import { murderAtCastleNathria } from "../../utils/constants";
import { Card } from "../card/card";

export const Main = () => {
  const dispatch = useAppDispatch();
  const set = useAppSelector((store) => store.set.set);
  // const setCollect = set?.map((item) => item);

  useEffect(() => {
    dispatch(getSet(murderAtCastleNathria));
  }, []);

  useEffect(() => {
    console.log(set);
  });

  return (
    <div className={style.main}>
      <ul>
        {set &&
          set.map((item, index) => <Card cardImage={item.img} key={index} />)}
      </ul>
    </div>
  );
};
