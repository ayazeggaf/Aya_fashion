import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import photo from '../../assets/profil.jpg';
const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt="logo" className='logo' />
       <img src={photo} alt="profil" className='profil' />
    </div>
  )
}

export default Navbar