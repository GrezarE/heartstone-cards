import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../../services/hooks";
import { setSelectorQualities } from "../../services/reducers/selectorSlice";
import style from "./qualities-select.module.css";
import { qualitiesList } from "../../utils/constants";

export const QualitiesSelect = () => {
  const [value, setValue] = useState("All");
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (value) {
      dispatch(setSelectorQualities(value));
    }
  }, [value, dispatch]);

  const changeValue = (evt: any) => {
    setValue(evt.target.value);
  };

  return (
    <div className={style.box}>
      <label htmlFor="sets">Qualities:</label>

      <select id="sets" value={value} onChange={changeValue}>
        <option value={"All"}>All</option>

        {Object.values(qualitiesList).map((item, index) => (
          <option value={item} key={index}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};
