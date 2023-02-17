import React from 'react'
import imag from "../../images/food.png"
import style from './categorycard.module.css'

function Categorycard() {
  return (
    <div className={style.card}>
      <img src={imag} alt="not availabe" />
      <p>Food</p>
    </div>
  )
}

export default Categorycard