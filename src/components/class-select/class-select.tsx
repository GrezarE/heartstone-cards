import React, { useEffect, useState } from "react";
import style from "./class-select.module.css";
import { classList } from "../../utils/constants";
import { useAppDispatch } from "../../services/hooks";
import { setClass } from "../../services/reducers/classSlice";

export const ClassSelect = () => {
  const [value, setValue] = useState("All");
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (value) {
      dispatch(setClass(value));
    }
  }, [value, dispatch]);

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
