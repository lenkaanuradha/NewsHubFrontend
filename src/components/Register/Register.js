import React from 'react'
import "./register.css";
import { useState } from 'react';

import axios from 'axios';

import { useNavigate } from 'react-router-dom';
export default function Register() {
   
    const [error,setError] = useState(false)
    const [credentials,setCredentials] = useState({

        username:undefined,
        useremail:undefined,
        
        password:undefined,
    })
   
    const navigate = useNavigate();
    const handleChange = (e) =>{
        setCredentials (prev=>( {...prev,[e.target.id]:e.target.value}))

    }
    const handleClick = async e =>{
        
        e.preventDefault()
        console.log(credentials)
        try {
            const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/register`, credentials);
            console.log(res.data.success)
           
           if(res.data.success){
            navigate('/login')
           }
           setError(true);
           
        } catch (error) {
            console.log(error)
            setError(true);
            
        }
    }
  return (
    <div className="register">
        <div className="rContainer">
         <input type="text" placeholder='username' id="username" onChange={handleChange} className='rInput' />
         <input type="text" placeholder='useremail' id="useremail" onChange={handleChange} className='rInput' />
        
        
         <input type="password" placeholder='password' id="password" onChange={handleChange} className='rInput' />
         <button className='rButton'  onClick={handleClick}>Register</button>
         <button className='rButton'  onClick={()=>navigate('/login')}>Login</button>

        {
            error && <span>Enter valid credentials</span>
        }
        </div>
    </div>
  )
}
