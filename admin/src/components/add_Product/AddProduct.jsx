import React from 'react'
import './AddProduct.css'
import { useState } from 'react';
import img5 from '../../assets/left-removebg-preview.png'
import Swal from 'sweetalert2';
const AddProduct = () => {
  const [image,setImage]=useState(false);
  const [productDetail,setProductDetail]=useState({
    name:"",
    image:"",
    category:"women",
    old_price:"",
    new_price:""
    }
  );
  const handdleImage=(e)=>{
    setImage(e.target.files[0])
    }
  const handlleAdd=(e)=>{
    setProductDetail({...productDetail,[e.target.name]:e.target.value})
  }
  const addProduct=async()=>{
    console.log(productDetail);
    let respenseData;
    let product=productDetail;
    let formData= new FormData();
    formData.append('product',image);
    await fetch('http://localhost:4000/upload',{
      method:'POST',
      headers:{
        Accept:'application/json'
      },
      body:formData
    }).then((res)=>res.json()).then((data)=>respenseData=data)
    if(respenseData.success){
      product.image=respenseData.image_url;
      // console.log(product)
      await fetch('http://localhost:4000/addProduct',{
        method:'POST',
        headers:{
          Accept:'application/json',
         'Content-Type':'application/json'
        },
        body:JSON.stringify(product)
      }).then((res)=>res.json()).then((data)=>
      data.success?
      Swal.fire({
        title: "Good job!",
        text: "Your product added with success!",
        icon: "success"
      }):
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
       
      })
      )
    }



  }
 
  return (
   
   <div className='container'>
     <div className='add-product'>
      <div className="addProduct-itemField">
        <p>Product titile</p>
        <input value={productDetail.name} onChange={handlleAdd} type="text" name="name" id="" placeholder='Type here' />
      </div>
      <div className="addProduct-price">
        <div className="addProduct-itemField">
          <p> Price</p>
          <input  value={productDetail.old_price} onChange={handlleAdd}type="text" name="old_price" id="" placeholder='Type here' />
        </div>
        <div className="addProduct-itemField">
          <p>Offer Price</p>
          <input value={productDetail.new_price} onChange={handlleAdd} type="text" name="new_price" id="" placeholder='Type here' />
        </div>
      </div>
      <div className="addProduct-itemField">
        <p>Product Catégory</p>
        <select name="category" className='addProduct-selector' value={productDetail.category} onChange={handlleAdd}>
          <option value="women">
            Women
          </option>
          <option value="men">
            Men
          </option>
          <option value="kid">
            Kid
          </option>

        </select>
      </div>
      <div className="addProduct-itemField">
        <label htmlFor="file-input" >
          <span  className='upload'>{image?<img src={URL.createObjectURL(image)} alt='img'/>:<i className="fa-solid fa-cloud-arrow-down"></i>}</span>
        </label>
        <input type="file" name="image" id="file-input" hidden onChange={handdleImage} />
        </div>
<button className='addProduct-button' onClick={addProduct}> Add</button>

    </div>
    <div className='add-img'>
      <img src={img5} alt="" />

    </div>
   </div>
  )
}

export default AddProduct