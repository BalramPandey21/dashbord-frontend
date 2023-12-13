import React, { useState } from "react";
export default function AddProduct() {
    const [name,setName]=useState("");
    const [price,setPrice]=useState("");
    const [category,setCategory]=useState("");
    const [ company,setCompany]=useState("");
    const [error,setError]=useState(false);

    const clearFields = () => {
    setName('');
    setPrice('');
    setCategory('');
    setCompany('');
  };
  const addProductHandler =async (event) =>{
    console.log(!name)
      
    if(!name || !price || !category || !company){

      setError(true);
      return false;
    }
    const userId=JSON.parse(localStorage.getItem('user'))._id;
    let result = await fetch("http://localhost:5000/add-product",{
      method: "post",
      body: JSON.stringify({ name,price,category,userId,company }),
      headers:{ "Content-Type": "application/json" },
    });

    result = await result.json();
    console.log(result);
    clearFields();
  };

  return (
    <div className="SignUp-Form">
      <input
        type="text"
        className="inputBox"
        placeholder="Enter the Name of product"
        value={name}
        onChange={(e)=>(setName(e.target.value))}
      ></input>

        {/* {!name?<span className="error-inputBox">Enter valid Product Name</span>:null} */}
      <input type="text" className="inputBox" placeholder="Enter Price" value={price}
        onChange={(e)=>(setPrice(e.target.value))}></input>
        {/* {!price?<span className="error-inputBox">Enter valid Price</span>:null} */}
        
      <input
        type="text"
        className="inputBox"
        placeholder="Enter category"
        value={category}
        onChange={(e)=>(setCategory(e.target.value))}
      ></input>
      {/* {!category?<span className="error-inputBox">Enter valid category</span>:null} */}
      <input
        type="text"
        className="inputBox"
        placeholder="Enter company"
        value={company}
        onChange={(e)=>(setCompany(e.target.value))}
      ></input>
      <button type="submit" className="signupBtn" onClick={addProductHandler}>Add Product</button>
    </div>
  );
}
