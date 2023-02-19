import React from "react";
import style from "./cart.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function Cart(props) {
  return (
    <div className={style.cart} onClick={props.listtoggle}>
      <div className={style.items}>
        <i>
          <FontAwesomeIcon icon={faCartShopping} />{" "}
        </i>
        7 Items
      </div>
      <div className={style.price}>500 tk</div>
    </div>
  );
}

export default Cart;
