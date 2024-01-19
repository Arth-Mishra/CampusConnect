import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './Components/Authentication/Login'
import Sidebar from './Components/Navigation/Sildebar';
import Register from './Components/Authentication/Register';
import FrontPage from './Components/FrontPage/FrontPage';


function App() {
  return (
    <Router>
      <div className="min-h-full w-full bg-[#9fbac4]">
      <Routes>
      <Route exact path='/' element={   <FrontPage/>} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/nav' element={<Sidebar />} />
        

      </Routes>
      </div>
    </Router>
  )
}

export default App