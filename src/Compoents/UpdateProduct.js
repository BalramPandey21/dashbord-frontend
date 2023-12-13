import React, { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
export default function UpdateProduct() {
    const [name,setName]=useState("");
    const [price,setPrice]=useState("");
    const [category,setCategory]=useState("");
    const [ company,setCompany]=useState("");

    const navigate=useNavigate();

    const params =useParams();
    useEffect(()=>{
        console.warn(params)
        getProductDetails();
    },[])

    const getProductDetails=async()=>{
        let result= await fetch(`http://localhost:5000/product/${params.id}`);
        result=await result.json();
        console.log(result)
        setName(result.name);
        setPrice(result.price);
        setCategory(result.category);
        setCompany(result.company)
    }


    const clearFields = () => {
    setName('');
    setPrice('');
    setCategory('');
    setCompany('');
  };
  const updateProdutHandler= async()=>{
    console.log(name, price, category,company);
    let result= await fetch(`http://localhost:5000/product/${params.id}`,{
      method:"Put",
      body:JSON.stringify({name, price, category,company}),
      headers:{"Content-Type":"application/json"}
    });
    result=result.json();
    navigate('/');
  }


  return (
    <div className="SignUp-Form">
      <input
        type="text"
        className="inputBox"
        placeholder="Enter the Name of product"
        value={name}
        onChange={(e)=>(setName(e.target.value))}
      ></input>

       
      <input type="text" className="inputBox" placeholder="Enter Price" value={price}
        onChange={(e)=>(setPrice(e.target.value))}></input>
        
      <input
        type="text"
        className="inputBox"
        placeholder="Enter category"
        value={category}
        onChange={(e)=>(setCategory(e.target.value))}
      ></input>
      <input
        type="text"
        className="inputBox"
        placeholder="Enter company"
        value={company}
        onChange={(e)=>(setCompany(e.target.value))}
      ></input>
      <button type="submit" className="signupBtn" onClick={updateProdutHandler} >Update Product</button>
    </div>
  );
}

