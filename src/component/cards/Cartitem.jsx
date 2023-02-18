import React from "react";
import style from "./cartitem.module.css";
import imag from "../../images/hexisol.webp";

function Cartitem() {
  return (
    <div className="item">
      <div className={style.image}>
        <img src={imag} alt="" />
      </div>
      <div className={style.detail}>
        <div className={style.name}></div>
        <div className={style.quantity}></div>
        <div className={style.price}></div>
      </div>
      <div className={style.remove}></div>
    </div>
  );
}

export default Cartitem;
