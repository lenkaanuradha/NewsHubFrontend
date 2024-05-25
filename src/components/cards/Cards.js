import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaHeart, FaComment } from "react-icons/fa";

import { axiosInstance } from "../../Axiosinterceptor";
const Cards = () => {
  const [news, setNews] = useState([]);

 
  const [commentsCount, setcommentsCount] = useState([]);
  const navigate = useNavigate();
  const handleLike = async (newsid) => {
    try {

      const response = await axiosInstance.post(
        `${process.env.REACT_APP_BACKEND_URL}/backend/news/Like/${newsid}`
      );
          
        if (response.status === 200) {
        const fetchNews = async () => {
          try {
            const response = await axios.get(
              `http://localhost:8800/backend/news/getAllNews`
            );
            if (response.status === 200) {
              setNews(response.data.allNews);
              
            }
          } catch (error) {
            console.error("Error occurred while fetching news:", error);
          }
        };
        fetchNews();
      }
    } catch (error) {
     
      console.error("Error occurred while liking news:", error);
    }
  };

  useEffect(() => {
   
   
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/backend/news/getAllNews`
        );
        if (response.status === 200) {
          setNews(response.data.allNews);
          setcommentsCount(response.data.commentsCount);

         
        }
      } catch (error) {
        console.error("Error occurred while fetching news:", error);
      }
    };
    fetchNews();
  }, []);

  return (
    <div>
      <h2
        className="d-flex justify-content-center "
        style={{ color: "#007ba7" }}
      >
        Our Featured News
      </h2>
      <div className="container">
      <div className="row container  d-flex justify-content-center ">
        {news.map((item, index) => (
          <div className="col-sm-4  ">
          <div className="card   w-73 g-3 h-60 mb-4 mt-4 shadow-lg p-2 " key={index} style={{"border-radius": "20px"}}>
            <div className="card-body ">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.desc}</p>
              <div className="d-flex justify-content-between">
               
                  <div>
                    <button
                      onClick={() => handleLike(item._id)}
                      className="btn text-white m-2"
                      style={{ backgroundColor: "#007ba7" }}
                    >
                      <FaHeart /> {item.likes_count} likes
                    </button>
                   
                    <button
                      className="btn text-white m-2"
                      style={{ backgroundColor: "#007ba7" }}
                      onClick={() => navigate(`/commentpage/${item._id}`)}
                    >
                      <FaComment /> {commentsCount[index]} comments
                    </button>
                  </div>
              
                {/* <div>
                  <a
                    href="#"
                    className="btn bg-white"
                    style={{ color: "#FEBE10", fontSize: "1.2em" }}
                  >
                   
                  </a>
                </div> */}
              </div>
            </div>
          </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Cards;
