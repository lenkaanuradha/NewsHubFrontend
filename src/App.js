import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Register from './components/Register/Register';
import Login from './components/login/Login';
import CommentSec from "./CommentSection/CommentSec";
import Postnews from "./components/PostNews/Postnews";

import Users from "./Admin/Users";
import NewsPosts from "./Admin/NewsPosts";
import EditUser from "./Admin/EditUser";
import EditNews from "./Admin/EditNews"
function App() {
  return (
   <>
  
    <BrowserRouter>
      <Routes>
        
      <Route path="/" element={<Home/>}/>
      <Route path="/commentpage/:newsid" element={<CommentSec/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/postnews" element={<Postnews/>}/>
        <Route path="/admin/allusers" element={<Users/>}/>
        <Route path="/admin/allusers" element={<Users/>}/>
        <Route path="/admin/posts" element={<NewsPosts/>}/>
        <Route path="/admin/edituser/:userid" element={<EditUser/>}/>
        <Route path="/admin/editnews/:newsid" element={<EditNews/>}/>
        
      </Routes>
    </BrowserRouter>
   
   
  
   </>
  );
}

export default App;
