import React, { useEffect, useState } from "react";
import style from "./class-select.module.scss";
import { classList } from "../../utils/constants";
import { useAppDispatch } from "../../services/hooks";
import { setSelectorClass } from "../../services/reducers/selectorSlice";

export const ClassSelect = () => {
  const [value, setValue] = useState("All");
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (value) {
      dispatch(setSelectorClass(value));
    }
  }, [value, dispatch]);

  const changeValue = (evt: any) => {
    setValue(evt.target.value);
  };

  return (
    <div className={style.box} data-testid="class-box">
      <label htmlFor="sets" data-testid="class-label">
        Class:
      </label>

      <select
        id="sets"
        value={value}
        onChange={changeValue}
        data-testid="class-select"
      >
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
