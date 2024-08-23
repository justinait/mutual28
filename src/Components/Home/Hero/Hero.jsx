import React from 'react'
import hero from '/hero.jpg'
import './Hero.css'

function Hero() {
  return (
    <div>
        {/* <img src={hero} alt=""/> */}
        <div className='hero'>
            <p>Tu apoyo, nuestro compromiso</p>
            <p>Asociación Mutual Dos de Agosto</p>
        </div>
        <p className='ourBenefitsHero'>Conocé nuestros <br /> <strong>BENEFICIOS</strong></p>
    </div>
  )
}

export default Hero