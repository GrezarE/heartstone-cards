import React from "react";
import style from "./select-form.module.css";
import { SetSelect } from "../set-select/set-select";
import { ClassSelect } from "../class-select/class-select";
import { QualitiesSelect } from "../rarity-select/qualities-select";

export const SelectForm = () => {
  return (
    <div className={style.form}>
      <SetSelect />
      <ClassSelect />
      <QualitiesSelect />
    </div>
  );
};
