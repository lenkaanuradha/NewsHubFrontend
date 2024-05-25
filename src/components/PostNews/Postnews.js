import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Postnews() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    title: '',
    desc: '',
  });

  const handleClick = async (e) => {
    e.preventDefault();
    console.log(credentials);
    try {
      const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/backend/news/postnews`, credentials);
      if (res.data.success) {
        navigate('/');
        console.log(res.data);
      } else {
        console.log('Error');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setCredentials((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <div className='container mt-5'>
      <div className="mb-3 m-3 w-75  ">
        <label htmlFor="title" className="form-label">Title</label>
        <input 
          type="text" 
          className="form-control" 
          id="title" 
          value={credentials.title} 
          onChange={handleChange} 
        />
      </div>
      <div className="mb-3 m-3 w-75">
        <label htmlFor="desc" className="form-label">Description</label>
        <textarea 
          className="form-control" 
          id="desc" 
          rows="3" 
          value={credentials.desc} 
          onChange={handleChange} 
        />
      </div>
      <div className="m-3 d-flex gap-2">
        <button 
          onClick={()=>navigate('/')}  
          className="btn btn-danger text-white " 
          
        >Back Home 
        </button>
        <button 
          onClick={handleClick}
          className="btn btn-success text-white   d-flex justify-content-center" 
         
        >
         Post
        </button>
      </div>
    </div>
  );
}
