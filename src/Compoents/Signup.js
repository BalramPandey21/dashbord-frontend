import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const auth = localStorage.getItem("user");

    if (auth) {
      navigate("/");
      window.location.reload();
    }
  }, []);

  const submitHandler = async (event) => {
    let result = await fetch("http://localhost:5000/register", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    result = await result.json();
    console.log(result);
    localStorage.setItem("user", JSON.stringify(result));
    if (result) {
      navigate("/");
    }
  };
  return (
    <div className="SignUp-Form">
      <h3>SignUp Form</h3>
      <input
        className="inputBox"
        type="text"
        placeholder="Enter User Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="inputBox"
        type="email"
        placeholder="Enter Email id"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="inputBox"
        type="password"
        placeholder="Enter password "
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="signupBtn" type="button" onClick={submitHandler}>
        SignUp
      </button>
    </div>
  );
}
