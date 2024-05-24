import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
export default function Postnews() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    title: '',
    desc: '',
  });
  const location = useLocation();
  const news_id= location.pathname.split('/')[3]
  const handleClick = async (e) => {
    e.preventDefault();
    console.log(credentials);
    try {
      const res = await axios.put(`http://localhost:8800/backend/news/update/${news_id}`, credentials);
      
      if (res.data.success) {
        navigate('/admin/posts');
        
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
    <div>
      <div className="mb-3 m-3">
        <label htmlFor="title" className="form-label">Title:</label>
        <input 
          type="text" 
          className="form-control" 
          id="title" 
          value={credentials.title} 
          onChange={handleChange} 
        />
      </div>
      <div className="mb-3 m-3">
        <label htmlFor="desc" className="form-label">Description:</label>
        <textarea 
          className="form-control" 
          id="desc" 
          rows="3" 
          value={credentials.desc} 
          onChange={handleChange} 
        />
      </div>
      <div className="m-3">
        <button 
          onClick={handleClick}  
          className="btn text-white w-100" 
          style={{ backgroundColor: "#007ba7 " }}
        >
         Save Changes
        </button>
       
      </div>
    </div>
  );
}
