import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom"
import Register from './pages/Register'
import Login from './pages/Login'
import Logout from './pages/Logout'
import Home from './pages/Home'
import Inicio from './pages/Inicio'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/inicio" element={<Inicio />} />
      <Route path="/logout" element={<Logout />} />
    </Routes>

  )
}
export default App
