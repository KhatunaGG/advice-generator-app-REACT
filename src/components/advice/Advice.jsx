import React from "react";
import style from "./advice.module.css";

export const Advice = ({ advice, id }) => {
  return (
    <div>
      <p className={style.number}>
        advice #<span>{id}</span>
      </p>
      <h2 className={style.advice}>
        <span className={style.advice}>“</span>
        {advice}
        <span className="span__text">”</span>
      </h2>
    </div>
  );
};
