import React from 'react'
import {Link,useNavigate} from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate()

  const handleLogout =()=>{
      localStorage.removeItem("authToken");
      localStorage.removeItem("username");
      navigate('/login')


  }
  const user = localStorage.getItem('authToken');
  return (
    <div>
      <nav className="navbar navbar-light  shadow p-3 mb-5 bg-body rounded">
  <div className="container-fluid">
    <a className="navbar-brand  fw-bold" href="#" style={{color:"#007ba7"}}>
     
      NewsHub
    </a>
    <div>
      {user?
      <>
         <Link type="button" className="btn  m-1 text-white " style={{backgroundColor:"#007ba7"}} to="/postNews">Post</Link>
       <button className="btn  m-1 text-white" style={{backgroundColor:"#007ba7"}} onClick={handleLogout}>Logout</button>
       </>:
       <>
       <Link type="button" className="btn  m-1 text-white " style={{backgroundColor:"#007ba7"}} to="/register">Register</Link>
       <Link type="button" className="btn  m-1 text-white" style={{backgroundColor:"#007ba7"}} to="/login">Login</Link>
       </>
      }
   
   
    </div>
  </div>
  
</nav>
    </div>
  )
}
