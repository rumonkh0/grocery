import React from "react";
import style from "./signup.module.css";

function Signup() {
  return (
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
          <button className={style.link}>
            <div to="">already have an account</div>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
