import React from "react";
import style from "./offercard.module.css";
import banner from "../../images/1627485935610176efb7a64.webp";
import img from "../../images/product.webp";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
  faCartPlus
} from '@fortawesome/free-solid-svg-icons'
function offercard() {
  return (
    <div className={style.offercard}>
      <img className={style.bannerimg} src={banner} alt="not availabe" />
      <img className={style.productimg} src={img} alt="not availabe" />
      <p className={style.productname}>
        ARATA 5 in 1 Anti-Hairfall Super Shampoo
      </p>
      <small> 300.00ml</small>
      <p className={style.price}>
        <del>$12.00</del> $10.00
      </p>
      <button className={style.cartbutton}><FontAwesomeIcon className={style.icon} icon={faCartPlus}/>ADD TO CART</button>
      <button className={style.details}>VIEW DETAILS</button>
    </div>
  );
}

export default offercard;
