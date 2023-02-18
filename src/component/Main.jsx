import React from "react";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Footer from "./Footer/Footer"
import Offer from "./offers/Offer";
import style from './main.module.css'

function Main() {
  return (
    <div className={style.main}>
      <Banner />
      <Category/>
      <Offer/>
      <Footer/>
    </div>
  );
}

export default Main;
