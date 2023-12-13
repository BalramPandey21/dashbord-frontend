import React from "react";
import "./App.css";
import Navbar from "./Compoents/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Compoents/Signup";
import Login from "./Compoents/Login";
import PrivateComponent from "./Compoents/PrivateComponent";
import AddProduct from "./Compoents/AddProduct";
import UpdateProduct from "./Compoents/UpdateProduct";
import ProductsPage from "./Compoents/ProductsPage";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path="/" element={<ProductsPage />}/>
            <Route path="/add" element={<AddProduct />}/>
            <Route path="/update/:id" element={<UpdateProduct/>}/>
            <Route path="/profile" element={<h1>Profile Page</h1>}/>
            <Route path="/logout" element={<h1>logout Page</h1>} />
          </Route>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
