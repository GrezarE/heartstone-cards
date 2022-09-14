import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../../services/hooks";
import {
  MURDER_AT_CASTLE_NATHRIA,
  VOYAGE_TO_THE_SUNKEN_CITY,
  FRACTURED_IN_ALTERAC_VALLEY,
  UNITED_IN_STORMWIND,
  FORGED_IN_THE_BARRENS,
  CORE,
} from "../../utils/constants";
import { setSelectorSet } from "../../services/reducers/selectorSlice";
import style from "./set-select.module.scss";

export const SetSelect = () => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState<string>();

  useEffect(() => {
    setValue(MURDER_AT_CASTLE_NATHRIA);
  }, []);

  useEffect(() => {
    if (value) {
      dispatch(setSelectorSet(value));
    }
  }, [value, dispatch]);

  const changeValue = (evt: any) => {
    setValue(evt.target.value);
  };

  return (
    <div className={style.box} data-testid="set-box">
      <label htmlFor="sets" data-testid="set-label">Sets:</label>

      <select id="sets" value={value} onChange={changeValue} data-testid="set-select">
        <option value={MURDER_AT_CASTLE_NATHRIA}>
          Murder at Castle Nathria
        </option>
        <option value={FORGED_IN_THE_BARRENS}>Forged in the Barrens</option>
        <option value={UNITED_IN_STORMWIND}>United in Stormwind</option>
        <option value={FRACTURED_IN_ALTERAC_VALLEY}>
          Fractured in Alterac Valley
        </option>
        <option value={VOYAGE_TO_THE_SUNKEN_CITY}>
          Voyage to the Sunken City
        </option>
        <option value={CORE}>Core</option>
      </select>
    </div>
  );
};
