import React from "react";
import style from "./footer.module.css";
function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.container}>
        <div className={style.about}>
          <div className={style.title}>About Us</div>
          <div>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </div>
        </div>
        <div className={style.links}>
          <div className={style.title}>Important Links</div>
          <div>
            <ul>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Privacy policy</a>
              </li>
              <li>
                <a href="#">Terms & condition</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={style.pcategory}>
          <div className={style.title}>Popular Category</div>
          <div>
            <div>
              <ul>
                <li>
                  <a href="#">Fruits & Vegetables</a>
                </li>
                <li>
                  <a href="#">Beauty & Health</a>
                </li>
                <li>
                  <a href="#">Baby care</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={style.fbottom}>
        Copyright © 2021 Tricky Code - All Rights Reserved.
      </div>
    </div>
  );
}

export default Footer;
