import React from "react";
import style from "./card.module.css";

export const Card = ({ cardImage }: any) => {
  return (
    <li className={style.card_box}>
      <img src={cardImage} alt="card" className={style.card} />
    </li>
  );
};
