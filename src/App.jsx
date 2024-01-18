import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './Components/Authentication/Login'
import Sidebar from './Components/Navigation/Sildebar';
import Register from './Components/Authentication/Register';
import FrontPage from './Components/FrontPage/FrontPage';


function App() {
  return (
    <Router>
   

      <Routes>
      <Route exact path='/' element={   <FrontPage/>} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/nav' element={<Sidebar />} />
        

      </Routes>
    </Router>
  )
}

export default App