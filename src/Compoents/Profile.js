import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

export default function Profile() {
    useEffect(()=>{
    let auth=localStorage.getItem('user')
    console.log(auth)
    },[] )


  return (
    <div>
      <div>{JSON.parse(auth).name}</div>


    </div>
  )
}
