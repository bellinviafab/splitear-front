import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom"
import Register from './pages/Register'
import Login from './pages/Login'
import Logout from './pages/Logout'
import Home from './pages/Home'
import Inicio from './pages/Inicio'
import RutaProtegida from './components/RutaProtegida'
import SoloInvitados from './components/SoloInvitados'
import Detalle_grupo from './pages/Detalle_grupo'
import NuevoGrupo from './pages/NuevoGrupo'
import AgregarMiembro from './pages/AgregarMiembro'
import Perfil from './pages/Perfil'


function App() {

  return (
    <Routes>
      {/* Rutas publicas*/}


      <Route element={<SoloInvitados />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
      {/* Rutas protegidas, solo para usuarios autenticados*/}
      <Route element={<RutaProtegida />}>
        <Route path="/grupos/:id" element={<Detalle_grupo />} />
        <Route path="/grupos/nuevo" element={<NuevoGrupo />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/grupos/:id/agregar-miembro" element={<AgregarMiembro />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/logout" element={<Logout />} />
      </Route>

      <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
    </Routes>

  )
}
export default App
