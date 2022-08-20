import React from "react";
import style from "./select-form.module.css";
import { SetSelect } from "../set-select/set-select";

export const SelectForm = () => {
  return (
    <form className={style.form}>
      <SetSelect />
    </form>
  );
};
