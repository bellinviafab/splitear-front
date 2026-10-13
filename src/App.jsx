import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom"
import Register from './pages/Register'
import Login from './pages/Login'
import Logout from './pages/Logout'
import Home from './pages/Home'
import Inicio from './pages/Inicio'
import RutaProtegida from './components/RutaProtegida'

function App() {

  return (
    <Routes>
      {/* Rutas publicas*/}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Rutas protegidas*/}
      <Route element={<RutaProtegida />}>
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/logout" element={<Logout />} />
      </Route>
    </Routes>

  )
}
export default App
