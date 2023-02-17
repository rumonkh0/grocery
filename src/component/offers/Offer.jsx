import React from 'react'
import style from './offer.module.css'
import Offercard from '../cards/Offercard'
function Offer() {
  return (
    <section className={style.offer}>
        <div className={style.title}>Special Offer</div>
      <div className={style.mainarea}>
        <Offercard />
        <Offercard />
        <Offercard />
      </div>
    </section>
  )
}

export default Offer