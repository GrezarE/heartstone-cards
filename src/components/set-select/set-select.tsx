import React, { ChangeEventHandler, useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../services/hooks";
import {
  murderAtCastleNathria,
  voyageToTheSunkenCity,
  fracturedInAlteracValley,
  unitedInStormwind,
  forgedInTheBarrens,
  core,
} from "../../utils/constants";
import { setSelectorSet } from "../../services/reducers/selectorSlice";
import style from "./set-select.module.css";

export const SetSelect = () => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState<string>();

  useEffect(() => {
    setValue(murderAtCastleNathria);
  }, []);

  useEffect(() => {
    if (value) {
      dispatch(setSelectorSet(value));
    }
  }, [value]);

  const changeValue = (evt: any) => {
    setValue(evt.target.value);
  };

  return (
    <div className={style.box}>
      <label htmlFor="sets">Sets:</label>

      <select id="sets" value={value} onChange={changeValue}>
        <option value={murderAtCastleNathria}>Murder at Castle Nathria</option>
        <option value={forgedInTheBarrens}>Forged in the Barrens</option>
        <option value={unitedInStormwind}>United in Stormwind</option>
        <option value={fracturedInAlteracValley}>
          Fractured in Alterac Valley
        </option>
        <option value={voyageToTheSunkenCity}>Voyage to the Sunken City</option>
        <option value={core}>Core</option>
      </select>
    </div>
  );
};
