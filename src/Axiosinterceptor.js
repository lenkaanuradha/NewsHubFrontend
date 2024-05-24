
import axios from "axios";


import Axios from "axios";
import { toast } from "react-toastify";

const authRequestInterceptor = (config) => {
  const authToken = localStorage.getItem("authToken");
  config.headers = config.headers ?? {};

  if (authToken) {
    config.headers.authorization = `Bearer ${authToken}`;
  }
  config.headers.Accept = "application/json";
 
  return config;
};

export const axiosInstance = Axios.create({
  baseURL: "http://localhost:8800/backend",
});

axiosInstance.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data

  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
 
  
  if (!error) {
    error.code !== "ERR_CANCELED" &&
      toast.error("Something went wrong with server");
     
    return Promise.reject(error);
  }
console.log(error,"error")
  const message =
    error?.response?.data?.message || error?.message || "Something went wrong";
  toast.error(message);
  
  
  
  return Promise.reject(error);
});

axiosInstance.interceptors.request.use(authRequestInterceptor);





