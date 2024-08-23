import React from 'react'
import hero from '/hero.jpg'
import './Hero.css'

function Hero() {
  return (
    <div>
        <img src={hero} alt="" className='hero'/>
        <p>Asociación Mutual Dos de Agosto: Tu apoyo, nuestro compromiso.</p>
        <p className='ourBenefitsHero'>Conocé nuestros <br /> <strong>BENEFICIOS</strong></p>
    </div>
  )
}

export default Hero