import React from 'react'
import {Link,useNavigate} from 'react-router-dom'
import Logo from "./Pinnacle_colored_logo.svg"
export default function Navbar() {

  const navigate=useNavigate();
  const auth=localStorage.getItem('user')

  const logout=()=>{
    const confirmed=window.confirm("Are You Sure you want to LogOut");
    if(confirmed){
      localStorage.clear();
      navigate("/signup");
    }    
  }
  return (
    <div className='navbar'>
        <ul>
        <img src={Logo} className='logoImg' alt='logo'></img>
          {auth?<>
          <Link to="/">Products</Link>
            <Link to="/add">Add Product</Link>
            <Link to="/profile">Profile</Link>
            <Link onClick={logout} to="/signup">Logout ({JSON.parse(auth).name})</Link>
            </>:
            <>
            <Link to='/login'>Login</Link>
            <Link to="/signup">SignUp</Link>
            </>}
            </ul>
       
    </div>
  )
}
