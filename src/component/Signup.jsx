import React from "react";
import Footer from "./Footer/Footer";
import style from "./signup.module.css";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className={style.cover}>
      <div className={style.signup}>
        <div className={style.formcard}>
          <h3>Create An Account</h3>
          <form className={style.form}>
            <input type="text" placeholder="Name" name="name" />
            <input type="text" placeholder="Email Adrress" name="email" />
            <input type="text" placeholder="Mobile" name="mobile" />
            <input type="password" placeholder="Password" name="password" />
            <input
              type="password"
              placeholder="Confirme Password"
              name="password2"
            />
            <button className={style.submit}>Sign Up</button>
            <Link to="/login">
              <button className={style.link}>
                <div>already have an account</div>
              </button>
            </Link>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Signup;
