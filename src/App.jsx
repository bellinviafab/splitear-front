import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom"
import Register from './pages/Register'
import Login from './pages/Login'
import Logout from './pages/Logout'

function App() {

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/logout" element={<Logout />} />
    </Routes>

  )
}
export default App
