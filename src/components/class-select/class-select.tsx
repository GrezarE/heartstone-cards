import React, { useEffect, useState } from "react";
import style from "./class-select.module.css";
import { classList } from "../../utils/constants";
import { useAppDispatch, useAppSelector } from "../../services/hooks";
import { setClass } from "../../services/reducers/classSlice";
import { setFilteredSet } from "../../services/reducers/set";

export const ClassSelect = () => {
  const [value, setValue] = useState("All");
  const dispatch = useAppDispatch();
  const set = useAppSelector((store) => store.set.set);

  // const classFilter = (className: string) => {
  //   let cards;

  //   cards = set?.filter(
  //     (item) =>
  //       item.playerClass ===
  //       (className === "All" ? item.playerClass : className)
  //   );
  //   return cards;
  // };

  // useEffect(() => {
  //   console.log(classFilter("All"));
  // }, []);

  useEffect(() => {
    if (value) {
      dispatch(setClass(value));
      // console.log(classFilter(value));
      // dispatch(setFilteredSet());
    }
  }, [value]);

  const changeValue = (evt: any) => {
    setValue(evt.target.value);
  };

  return (
    <div className={style.box}>
      <label htmlFor="sets">Class:</label>

      <select id="sets" value={value} onChange={changeValue}>
        <option value={"All"}>All</option>

        {Object.values(classList).map((item, index) => (
          <option value={item} key={index}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};
