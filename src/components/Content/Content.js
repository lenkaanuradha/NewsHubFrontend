import React from 'react'
import image2 from '../images/image2.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Content() {
  return (
    <div>
      
            <div className="row g-0  overflow-hidden flex-md-row mb-4 mx-5  h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column align-items center position-static">
          
          <h3 className="mb-3" style={{"color":"#007ba7"}}>News Online!</h3>
         
          <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.This is a wider ca
          <br />below as a natural lead-in to additional content.This is a wider ca <br />rd with supporting text below as a natural lead-in to additional content.
          <br />
          <button type="button" className="btn btn-sm text-white mt-5 p-2" style={{"backgroundColor":"#007ba7"}}>Let's Explore</button>
          </p>
         
        </div>
        
        <div className="col-auto d-none d-lg-block">
        <img
                className="w-100"
                src={image2}
                alt="First slide"
                data-aos="fade-down"
              />

        </div>
      </div>
      <ToastContainer />
    </div>
  )
}
