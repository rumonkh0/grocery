import React from 'react'
import Footer from "./Footer/Footer"
import style from './signup.module.css'

function Login() {
  return (
    <div className={style.cover}>
    <div className={style.signup}>
      <div className={style.formcard}>
        <h3>Login in To Your Account</h3>
        <form className={style.form}>
          <input type="email" placeholder="Name" name="email" />
          <input type="password" placeholder="Password" name="password" />
          <button className={style.submit}>Log IN</button>
          <button className={style.link}>
            <div to="">Create an account</div>
          </button>
        </form>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Login