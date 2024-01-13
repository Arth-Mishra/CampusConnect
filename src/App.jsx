import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './Components/Authentication/Login'
import Sidebar from './Components/Navigation/Sildebar';
import Register from './Components/Authentication/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/' element={<Sidebar />} />
      </Routes>
    </Router>
  )
}

export default App