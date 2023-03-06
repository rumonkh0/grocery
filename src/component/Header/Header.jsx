import React from "react";
import style from "./header.module.css";
import logo from "../../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBars,
  faRightFromBracket,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Link } from "react-router-dom";

function header({ menutoggle }) {
  return (
    <nav className={style.nav}>
      <div onClick={menutoggle}>
        <FontAwesomeIcon className={style.menu} icon={faBars} />
      </div>
      <Link to="/">
        <img src={logo} alt="Logo nai" />
      </Link>

      <div className={style.input}>
        <input type="text" placeholder="Search Products" />
        <button>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
      <Link to="/signup">
        <div className={style.auth}>
          <FontAwesomeIcon className={style.icon} icon={faUser} />
          Sign Up
        </div>
      </Link>
      <Link to="/login">
        <div className={`${style.auth} ${style.back}`}>
          <FontAwesomeIcon className={style.icon} icon={faRightFromBracket} />
          Logout
        </div>
      </Link>
    </nav>
  );
}

export default header;
