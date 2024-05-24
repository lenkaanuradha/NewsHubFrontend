import React from 'react'
import "./login.css";
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
       
        try {
            const res = await axios.post('http://localhost:8800/backend/auth/login', credentials);
           
             
           if(res.data.success){
            localStorage.setItem("authToken",res.data.token)
            localStorage.setItem("username",res.data.username)
            if(res.data.isAdmin)
                {
                    navigate('/admin/allusers')
                }
            if(!res.data.isAdmin)
            navigate('/')
           }
           setError(true);
           
        } catch (error) {
            console.log(error)
            setError(true);
            
        }
    }
  return (
    <div className="login">
        <div className="lContainer">
         <input type="text" placeholder='username' id="username" onChange={handleChange} className='lInput' />
        
        
        
         <input type="password" placeholder='password' id="password" onChange={handleChange} className='lInput' />
         <button className='lButton'  onClick={handleClick}>Login</button>
         <button className='lButton'  onClick={()=>navigate('/register')}>Register</button>
        {
            error && <span>Enter valid credentials</span>
        }

        </div>
    </div>
  )
}
