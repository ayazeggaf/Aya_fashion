import React from 'react'
import './Admin.css'
import Sidebar from '../../sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import AddProduct from '../../components/add_Product/AddProduct'
import ListProduct from '../../components/List_Product/ListProduct'
const Admin = () => {
  return (
    <div className='admin'>
        <Sidebar/>
        <Routes>
          <Route path='/addPdouct' element={<AddProduct/>}/>
          <Route path='/listProduct' element={<ListProduct/>}/>
        </Routes>
    </div>
  )
}

export default Admin