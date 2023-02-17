import React from "react";
import style from "./header.module.css";
import logo from "../../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBars,
  faRightFromBracket,
  faMagnifyingGlass
} from "@fortawesome/free-solid-svg-icons";

function header() {
  return (
    <nav className={style.nav}>
      <div>
        <FontAwesomeIcon className={style.menu} icon={faBars} />
      </div>

      <img src={logo} alt="Logo nai" />

      <div className={style.input}>
        <input type="text" placeholder="Search Products" />
        <button><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
      </div>
      <div className={style.auth}>
        <FontAwesomeIcon className={style.icon} icon={faUser} />
        Sign Up
      </div>
      <div className={`${style.auth} ${style.back}`}>
        <FontAwesomeIcon className={style.icon} icon={faRightFromBracket} />
        Logout
      </div>
    </nav>
  );
}

export default header;
