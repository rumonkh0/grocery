import React from "react";
import style from "./menu.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimney,
  faGift,
  faBowlFood,
  faDumbbell,
  faBaby,
  faPumpMedical,
  faBroom,
  faCapsules,
  faBriefcase,
  faKitchenSet,
} from "@fortawesome/free-solid-svg-icons";

function Menu() {
  return (
    <div className={style.menu}>
      <ul>
        <li>
          <FontAwesomeIcon className={style.icon} icon={faHouseChimney} />
          Home
        </li>
        <li>
          <FontAwesomeIcon className={style.icon} icon={faGift} />
          Special offer
        </li>
        <li>
          <FontAwesomeIcon className={style.icon} icon={faBowlFood} />
          Food
        </li>
        <li>
          <FontAwesomeIcon className={style.icon} icon={faDumbbell} />
          beautiful & health
        </li>
        <ul className={style.nested}>
          <li>Fruits & Vegetable</li>
          <li>Breakfast</li>
        </ul>
        <li>
          <FontAwesomeIcon className={style.icon} icon={faBaby} />
          Baby Care
        </li>
        <li>
          <FontAwesomeIcon className={style.icon} icon={faPumpMedical} />
          Hygiene
        </li>
        <li>
          <FontAwesomeIcon className={style.icon} icon={faBroom} />
          Home cleaning
        </li>
        <li>
          <FontAwesomeIcon className={style.icon} icon={faCapsules} />
          Medicine
        </li>
        <li>
          <FontAwesomeIcon className={style.icon} icon={faBriefcase} />
          Office Product
        </li>
        <li>
          <FontAwesomeIcon className={style.icon} icon={faKitchenSet} />
          Kitchen Applience
        </li>
      </ul>
    </div>
  );
}

export default Menu;
