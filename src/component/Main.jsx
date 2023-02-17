import React from "react";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Footer from "./Footer/Footer"
import Offer from "./offers/Offer";

function Main() {
  return (
    <div>
      <Banner />
      <Category/>
      <Offer/>
      <Footer/>
    </div>
  );
}

export default Main;
