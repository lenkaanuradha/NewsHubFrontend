import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import AdminHeader from "./AdminHeader";
export default function Users() {
    const [allusers,setAllUsers]=useState([]);
    
    const handleDelete = async(userid)=>{
       const res= await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/users/deleteUser/${userid}`)
       if(res.status === 200)
          {
            console.log("deleted");
            const fetchAllusers = async () => {
              try {
                const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/users/getallusers`);
                if (response.status === 200) {
                  setAllUsers(response.data.allUsers);
                 
                }
              } catch (error) {
                
                console.error("Error occurred while fetching users:", error);
              }
            };
            fetchAllusers();
          }

    }
    useEffect(() => {
        const fetchAllusers = async () => {
          try {
            const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/users/getallusers`);
            if (response.status === 200) {
              setAllUsers(response.data.allUsers);
             
            }
          } catch (error) {
            
            console.error("Error occurred while fetching users:", error);
          }
        };
        fetchAllusers();
      }, []);
  return (
    <div className="d-flex">
      <div>
        <AdminHeader />
      </div>
      <div>
        <div className="p-1 m-4  bg-light rounded-3 d-flex justify-content-center">
          <div className="container-fluid py-5 ">
            <table class="table table-bordered  ">
              <thead>
                <tr >
                  <th scope="col" className="text-secondary ">
                    ID
                  </th>
                  <th scope="col" className="text-secondary ">
                    Username
                  </th>
                  <th scope="col" className="text-secondary ">
                   Email
                  </th>
                  <th scope="col" className="text-secondary ">
                   EDIT
                  </th>
                  <th scope="col" className="text-secondary ">
                   DELETE
                  </th>
                </tr>
              </thead>
              <tbody>
                {allusers.map((item,index)=>(
                        <tr>
                        <th scope="row">{index+1}</th>
                        <td >{item.username}</td>
                        <td>{item.useremail}</td>
                        <td>
                          <Link type="button" className="btn btn-success" to={`/admin/edituser/${item._id}`}>
                            Edit
                          </Link>
                        </td>
                        <td>
                          <button type="button" className="btn btn-danger" onClick={()=>handleDelete(item._id)}>
                            Delete
                          </button>
                        </td>
                      </tr>
                ))

                }
               
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
