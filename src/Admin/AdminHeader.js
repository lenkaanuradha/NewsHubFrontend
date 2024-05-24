import React from "react";
import "./AdminDashboard.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function AdminDashboard() {
  const navigate = useNavigate();
  const handleLogout =()=>{
    localStorage.removeItem("authToken");
    localStorage.removeItem("username");
    navigate('/login')


}
  return (
    <div>
      {/* <!--Main Navigation--> */}
      <header>
        {/* <!-- Sidebar --> */}
        <nav
          id="sidebarMenu"
          className="collapse d-lg-block sidebar collapse bg-white"
        >
          <div className="position-sticky">
            <div className="list-group list-group-flush mx-3 mt-4">
              <Link
                to={"/admin/allusers"}
                className="list-group-item list-group-item-action py-2 ripple"
              >
                Users
              </Link>
              <Link
                to={"/admin/posts"}
                className="list-group-item list-group-item-action py-2 ripple"
              >
                NewsPosts
              </Link>
            </div>
          </div>
        </nav>
        {/* <!-- Sidebar --> */}

        {/* <!-- Navbar --> */}
        <nav
          id="main-navbar"
          className="navbar navbar-expand-lg navbar-light bg-white fixed-top"
        >
          {/* <!-- Container wrapper --> */}
          <div className="container-fluid ">
            {/* <!-- Toggle button --> */}

            {/* <!-- Brand --> */}
            <a className="navbar-brand" href="#">
              <h2 style={{ color: "#007ba7 " }}>Admin Dashboard</h2>
            </a>
            {/* logout */}
            <div className="d-flex">
              <button type="button" onClick={handleLogout} className="btn btn-success  mx-2">
                Logout
              </button>
              <button
                type="button"
                onClick={() => navigate("/")}
                className="btn btn-secondary"
              >
                Home
              </button>
            </div>
          </div>
          {/* <!-- Container wrapper --> */}
        </nav>
        {/* <!-- Navbar --> */}
      </header>
      {/* <!--Main Navigation--> */}

      {/* <!--Main layout--> */}
      <main style={{ "margin-top": "58px" }}>
        <div className="container pt-4"></div>
      </main>
      {/* <!--Main layout--> */}
    </div>
  );
}
