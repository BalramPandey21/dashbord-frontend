import React,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

export default function Login() {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const navigate=useNavigate()


  useEffect(()=>{

    const auth=localStorage.getItem('user')
    if(auth){
      navigate('/')
      // window.location.reload();

    }
},[])

  const loginHandler=async(e)=>{
    // console.log(email,password)

    let result=await fetch('http://localhost:5000/login',
    {
    method:'post',
    body:JSON.stringify({email,password}),
    headers:{
      'Content-Type':'application/json'
    }
})
result=await result.json();
// console.log(result)
 if(result.name){
 localStorage.setItem('user',JSON.stringify(result));
 navigate('/');
 }
 else{
  alert("please Enter the Correct Field")
 }
}
  return (
    <div className='loginPage'>
      <input type='email'placeholder='Enter Email ' className='inputBox' onChange={(e)=>(setEmail(e.target.value))} value={email}></input>
      <input type='password'placeholder='Enter password ' className='inputBox' onChange={(e)=>(setPassword(e.target.value))} value={password}></input>
      <button  className='signupBtn' type='submit' onClick={loginHandler}>Login</button>

    </div>
  )
}
