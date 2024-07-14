import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import photo from '../../assets/profil.jpg';
const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt="logo" className='logo' />
        <div className='right-side'>
        <img src={photo} alt="profil" className='profil' />
        <div className='down'><i class="fa-solid fa-chevron-down"></i></div>
        </div>
     
    </div>
  )
}

export default Navbar