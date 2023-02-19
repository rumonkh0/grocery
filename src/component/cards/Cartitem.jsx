import React from "react";
import style from "./cartitem.module.css";
import imag from "../../images/hexisol.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";

function Cartitem() {
  return (
    <div className={style.item}>
      <div className={style.image}>
        <img src={imag} alt="Item" />
      </div>
      <div className={style.detail}>
        <div className={style.name}>Hexisol Hand Rub</div>
        <div className={style.quantity}>
          <button>
            <FontAwesomeIcon icon={faMinus} />{" "}
          </button>
          <div className={style.quancount}>2</div>
          <button>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
        <div className={style.price}>500 TK</div>
      </div>
      <div className={style.remove}>
        <FontAwesomeIcon icon={faXmark} />
      </div>
    </div>
  );
}

export default Cartitem;
