import React, { useState } from "react";
import style from "./cartList.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Cartitem from "../cards/Cartitem";

function CartList() {
  let [collapse, setCollapse] = useState(false);

  var coupon = () => {
    collapse ? setCollapse(false) : setCollapse(true);
  };

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
          <Cartitem />
          <Cartitem />
          <Cartitem />
          <Cartitem />
          <div className={style.summary}>
            <div className={style.row}>
              <div>Subtotal:</div>
              <div>5000 TK</div>
            </div>
            <div className={style.row}>
              <div>Delivery Charge:</div>
              <div>100 TK</div>
            </div>
            <div className={style.total + " " + style.row}>
              <div>Grand Total:</div>
              <div>5000 TK</div>
            </div>
          </div>
          <div className={style.coupon}>
            <div onClick={coupon}>
              <button className={style.place_order + " " + style.couponbtn}>
                Have Coupon Code?
              </button>
            </div>
            <div
              className={style.button + " " + (collapse ? style.collapse : "")}
            >
              <input
                className={style.input}
                placeholder="Coupon Code"
                type="text"
              />
              <div className={style.applybtn}>
                <button className={style.apply}>APPLY</button>
              </div>
            </div>
          </div>

          <div className={style.button}>
            <button className={style.place_order}>Place Order</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartList;
