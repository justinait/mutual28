import React from 'react'
import logo from '/logo.jpeg'
import './Navbar.css'

function Navbar() {
  return (
    <div>
        <img src={logo} alt="Dos de Agosto" className='logoNavbar' />

        {/* <div>
            <p>Quienes somos</p>
            <p>Servicios</p>
            <p>Contactanos</p>
        </div> */}
    </div>
  )
}

export default Navbar