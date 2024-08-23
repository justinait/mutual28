import React from 'react'
import './Services.css'

function Services() {

  return (
    <div>
        <div className='servicesHomeContainer doctor'>
            <p className='servicesHomeText'>Salud</p>
        </div>
        <div className='servicesHomeContainer dinero'>
            <p className='servicesHomeText'>Económicos</p>
        </div>
        <div className='servicesHomeContainer eventos'>
            <p className='servicesHomeText'>Sociales</p>
        </div>

    </div>
  )
}

export default Services