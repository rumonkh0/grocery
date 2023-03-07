import React, { useState } from "react";
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
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function Menu({ menu }) {
  const [collapse, setCollapse] = useState(false);

  var toggle = () => {
    setCollapse(!collapse);
  };

  return (
    <div className={style.menu + " " + (menu ? "" : style.hide)}>
      <ul>
        <Li icon_name={faHouseChimney} href={"/"} text={"Home"} />
        <Li icon_name={faGift} href={"/"} text={"Special offer"} />
        <li onClick={toggle}>
          <FontAwesomeIcon className={style.icon} icon={faBowlFood} />
          Food
          <FontAwesomeIcon className={style.drop} icon={faCaretDown} />
        </li>
        <ul className={style.nested + " " + (collapse ? "" : style.collapse)}>
          <Li href={"/"} text={"Fruits & Vegetable"} />
          <Li href={"/"} text={"Breakfast"} />
        </ul>
        <Li icon_name={faDumbbell} href={"/"} text={"Beautiful & health"} />
        <Li icon_name={faBaby} href={"/"} text={"Baby Care"} />
        <Li icon_name={faPumpMedical} href={"/"} text={"Hygiene"} />
        <Li icon_name={faBroom} href={"/"} text={"Home cleaning"} />
        <Li icon_name={faCapsules} href={"/"} text={"Medicine"} />
        <Li icon_name={faBriefcase} href={"/"} text={"Office Product"} />
        <Li icon_name={faKitchenSet} href={"/"} text={"Kitchen Applience"} />
      </ul>
    </div>
  );
}

function Li({ icon_name, href, text, children, ...props }) {
  const resolved = useResolvedPath(href);
  const ismatch = useMatch({ path: resolved.pathname, end: true });
  console.log(resolved);
  return (
    <Link to={href} {...props}>
      <li className={ismatch ? `${style.active}` : `${style.nactive}`}>
        {icon_name ? (
          <FontAwesomeIcon className={style.icon} icon={icon_name} />
        ) : (
          ""
        )}
        {text}
        {children}
      </li>
    </Link>
  );
}

export default Menu;
