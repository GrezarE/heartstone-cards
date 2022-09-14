import React from "react";
import style from "./loader.module.scss";

export const Loader = () => {
  return (
    <div className={style.box}>
      <div className={style.loader} data-testid='loader'></div>
    </div>
  );
};
