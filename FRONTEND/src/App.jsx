import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Login from './Components/Authentication/Login'
import Sidebar from './Components/Navigation/Sildebar';
import Register from './Components/Authentication/Register';
import FrontPage from './Components/FrontPage/FrontPage';
import Community from './Components/Community/Community.jsx';
import Feeds from './Components/Feed/Feeds';
import PostForm from './Components/PostForm/PostForm';

function App() {

  return (
    <>
     <Router>
       <div className="min-h-full w-full bg-[#9fbac4]">
       <Routes>
       <Route exact path='/' element={<FrontPage/>} />
         <Route exact path='/login' element={<Login />} />
         <Route exact path='/register' element={<Register />} />
         <Route exact path='/home' element={<Feeds/>} />
         <Route exact path='/PostFeedback' element={<PostForm/>} />
         <Route exact path='/Connect' element={<Community/>} />
       </Routes>
       </div>
     </Router>
    </>
  )
}

export default App