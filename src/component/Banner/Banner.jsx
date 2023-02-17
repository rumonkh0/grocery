import React from "react";
import style from "./banner.module.css";
import img from "../../images/main-banner.jpg";

function Banner(props) {
  return (
    <section className={style.banner} style={{ backgroundImage: `url(${img})` }}>
      <div className={style.container}>{props.title}</div>
    </section>
  );
}

Banner.defaultProps = {
    title: "Green grocery",
};

export default Banner;
