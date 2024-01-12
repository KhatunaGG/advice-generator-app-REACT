import React, { useEffect, useState } from "react";
import style from "./main.module.css";
import { Advice } from "../advice/Advice";

const Main = () => {
  const [advice, setAdvice] = useState("");
  const [id, setId] = useState("");

  function fetchData() {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => {
        setAdvice(data.slip.advice);
        setId(data.slip.id);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={style.main}>
      <Advice advice={advice} id={id} />
      <img className={style.img__mobile} src="/assets/mobile.png" alt="" />
      <img className={style.img__desktop} src="/assets/desktop.png" alt="" />
      <button onClick={fetchData} className={style.circle__btn}>
        <img src="/assets/Shape.png" alt="" />
      </button>
    </div>
  );
};

export default Main;
