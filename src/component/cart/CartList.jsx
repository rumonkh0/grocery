import React from "react";
import style from "./cartList.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Cartitem from "../cards/Cartitem";

function CartList() {
  return (
    <div className={style.cartlist + " " + style.show}>
      <div className={style.cartheader}>
        <h4>
          <FontAwesomeIcon className={style.icon} icon={faCartShopping} />8
          ITEMS
        </h4>
        <div>
          <FontAwesomeIcon icon={faXmark} />
        </div>
      </div>
      <div className={style.offer}>Free delivery shipping over 1000tk</div>
      <div className={style.main}>
        <div className="items">
          <Cartitem/>
        </div>
      </div>
    </div>
  );
}

export default CartList;
