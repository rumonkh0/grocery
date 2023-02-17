import React from "react";
import Categorycard from "../cards/Categorycard";
import style from "./category.module.css";

function Category() {
  return (
    <section className={style.category}>
      <div className={style.title}>Product Categories</div>
      <div className={style.mainarea}>
        <Categorycard />
        <Categorycard />
        <Categorycard />
        <Categorycard />
        <Categorycard />
        <Categorycard />
        <Categorycard />
        <Categorycard />
      </div>
    </section>
  );
}

export default Category;
