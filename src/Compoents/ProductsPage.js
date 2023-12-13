import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched data:", data);
        if (Array.isArray(data)) {
          // Check if data is an array
          setProducts(data);
        } else {
          console.error("Data is not an array:", data);
        }
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);
  const deleteHandler = async (id) => {
    const confirm = window.confirm("Delete");
    if (confirm) {
      let result = await fetch(`http://localhost:5000/product/${id}`, {
        method: "Delete",
      });
      window.location.reload();
      result = await result.json();
    }
  };

  const searchHandler = async (event) => {
    let key = event.target.value;
    if (key) {
      let result = await fetch(`http://localhost:5000/search/${key}`);
      result = await result.json();
      if (result) {
        setProducts(result);
      }
    } else {
      window.location.reload();
    }
  };

  return (
    <>
      <div className="product-second-list">
        <h3>Product List</h3>

        <input
          className="searchInputBox"
          placeholder="Search Products"
          onChange={searchHandler}
        ></input>
        <ul>
          <li>Sr.No.</li>
          <li>Name </li>
          <li>Price </li>
          <li>Category </li>
          <li>Operations </li>
        </ul>

        {products.length > 0 ? (
          products.map((item, index) => (
            <ul key={item._id}>
              <li>{index + 1} </li>
              <li>{item.name} </li>
              <li>{item.price} </li>
              <li>{item.category} </li>
              <li>
                <button
                  onClick={() => deleteHandler(item._id)}
                  className="deleteBtn"
                >
                  Delete
                </button>
                <Link to={"/update/" + item._id} className="editLink">
                  Edit
                </Link>
              </li>
            </ul>
          ))
        ) : (
          <h1>No Result Found</h1>
        )}
      </div>
    </>
  );
}
