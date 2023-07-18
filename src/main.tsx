import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {BrowserRouter, Routes, Route } from 'react-router-dom'

import Buscador from './pages/Buscador.tsx'
import Home from './pages/Home.tsx'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/buscador' element={<Buscador />} />
      </Routes>
    </BrowserRouter>



  </React.StrictMode>,
)
