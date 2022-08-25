import React from "react";
import style from "./card.module.css";

export const Card = ({ cardImage, cardName }: any) => {
  return (
    <li className={style.card_box}>
      <img src={cardImage} alt={cardName} className={style.card} />
    </li>
  );
};
