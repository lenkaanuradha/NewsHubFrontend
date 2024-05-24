import React, { useState } from 'react'
import AdminHeader from './AdminHeader';
import './EditUser.css'
import { useLocation, useNavigate } from 'react-router-dom';

import axios from 'axios';
export default function EditUser() {
    const [error,setError] = useState(false)
    const location = useLocation();
    const userid=location.pathname.split("/")[3];
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
            const res = await axios.put(`http://localhost:8800/backend/users/updateUser/${userid}`, credentials);
            console.log(res.data.success)
           
           if(res.data.success){
            navigate('/admin/allusers')
           }
        setError(error)
           
        } catch (error) {
            console.log("this",error)
            setError(true);
            
        }
    }
  return (
    <div className="">
    {/* <AdminHeader /> */}
    <div className="">
    <div className="edit">
        <div className="eContainer shadow-lg p-3 mb-5 bg-body rounded">
            <label htmlFor="" >username:  <input type="text"  id="username" onChange={handleChange} className='eInput ' /></label>
        
         <label htmlFor="">useremail:  <input type="text"  id="useremail" onChange={handleChange} className='eInput ' /></label>
        
        
         <label htmlFor="" className='font-bold'>password:  <input type="password"  id="password" onChange={handleChange} className='eInput ' /></label>
        
         <button className='eButton'  onClick={handleClick}>Save Changes</button>
        
        <button className='eButton'  onClick={()=>navigate('/admin/allusers')}>AdminDashboard</button>
        </div>
    </div>
    </div>
    </div>
  )
}
