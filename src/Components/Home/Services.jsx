import React from 'react'
// import doctor from '/images/doctor.jpg'
// import dinero from '/images/dinero.jpg'
// import eventos from '/images/eventos.jpg'
import './Services.css'

function Services() {

  return (
    <div>
        <div className='servicesHomeContainer doctor'>
            {/* <img src={doctor} alt="" className='servicesHomeImage' /> */}
            <p className='servicesHomeText'>Salud</p>
        </div>
        <div className='servicesHomeContainer dinero'>
            {/* <img src={dinero} alt="" className='servicesHomeImage' /> */}
            <p className='servicesHomeText'>Económicos</p>
        </div>
        <div className='servicesHomeContainer eventos'>
            {/* <img src={eventos} alt="" className='servicesHomeImage' /> */}
            <p className='servicesHomeText'>Sociales</p>
        </div>

    </div>
  )
}

export default Services