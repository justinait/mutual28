import React from 'react'
import logo from '/logo.jpeg'
import './Navbar.css'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

function Navbar() {
  return (
    <div className='navbarContainer'>
        <img src={logo} alt="Dos de Agosto" className='logoNavbar' />

        <MenuRoundedIcon />
        {/* <div>
            <p>Quienes somos</p>
            <p>Servicios</p>
            <p>Contactanos</p>
        </div> */}
    </div>
  )
}

export default Navbar