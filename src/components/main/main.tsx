import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../services/hooks";
import style from "./main.module.css";
import { getSet } from "../../services/actions/getSet";
import { Card } from "../card/card";
import { SelectForm } from "../select-form/select-form";
import { Loader } from "../loader/loader";
import { setFilteredSet } from "../../services/reducers/set";

export const Main = () => {
  const dispatch = useAppDispatch();
  const set = useAppSelector((store) => store.set.set);
  const filteredSet = useAppSelector((store) => store.set.filteredSet);
  const { className, qualities, setSelect } = useAppSelector(
    (store) => store.selector
  );
  const loader = useAppSelector((store) => store.loader.loading);

  const classFilter = (className: string) => {
    let cards;

    cards = set
      ?.filter(
        (item) =>
          item.playerClass ===
          (className === "All" ? item.playerClass : className)
      )
      .filter(
        (item) =>
          item.rarity === (qualities === "All" ? item.rarity : qualities)
      );
    return cards;
  };

  useEffect(() => {
    if (setSelect) {
      dispatch(getSet(setSelect));
    }
  }, [setSelect, dispatch]);

  useEffect(() => {
    dispatch(setFilteredSet(classFilter(className)));
  }, [className, set, dispatch, qualities]);

  return (
    <div className={style.main}>
      <SelectForm />
      <ul>
        {filteredSet &&
          filteredSet.map((item, index) => (
            <Card cardImage={item.img} key={index} cardName={item.name}/>
          ))}
        {/* {set &&
          set.map((item, index) => <Card cardImage={item.img} key={index} />)} */}
      </ul>
      {loader && <Loader />}
    </div>
  );
};
