import React from "react";
import AdminHeader from "./AdminHeader";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
export default function NewsPosts() {
  const [news, setNews] = useState([]);
  const handleDelete = async (newsid) => {
    const res = await axios.delete(
      `http://localhost:8800/backend/news/delete/${newsid}`
    );
    if (res.status === 200) {
      console.log("deleted");
      const fetchAllNews = async () => {
        try {
          const response = await axios.get(
            "http://localhost:8800/backend/news/getallNews"
          );
          if (response.status === 200) {
            setNews(response.data.allNews);
          }
        } catch (error) {
          console.error("Error occurred while fetching users:", error);
        }
      };
      fetchAllNews();
    }
  };
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8800/backend/news/getAllNews"
        );
        if (response.status === 200) {
          setNews(response.data.allNews);
        }
      } catch (error) {
        console.error("Error occurred while fetching news:", error);
      }
    };
    fetchNews();
  }, []);
  return (
    <div className="container d-flex mt-5">
      <div className="">
        <AdminHeader />
      </div>

      <div className="p-2  bg-light rounded-3 flex flex-col justify-content-center align-items-center mt-4">
        {news.map((item, index) => (
          <div className="card m-2 ">
            <div
              className="card-header text-white "
              style={{ backgroundColor: "#007ba7" }}
            >
              {item.title}
            </div>
            <div className="card-body">
              <p className="card-text">{item.desc}</p>
              <Link type="button" className="btn btn-success mx-2" to={`/admin/editnews/${item._id}`}>
                            Edit
                          </Link>
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(item._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
