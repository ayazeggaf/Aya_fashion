import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Link to={'/addPdouct'} style={{textDecoration:'none'}}>
      <div className="sideBar-item" >
      <i class="fa-solid fa-cart-shopping"></i>
      <p>Add Product</p>
      </div>
      
      </Link>
      <Link to={'/listProduct'} style={{textDecoration:'none'}}>
      <div className="sideBar-item" >
      <i class="fa-solid fa-folder-open"></i>
      <p>List Product</p>
      </div>
      
      </Link>
    </div>
  )
}

export default Sidebar