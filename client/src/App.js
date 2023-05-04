import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from "./views/Home/Home";
import Login from './views/Login/Login';
import Signup from './views/Signup/Signup';
import TyPdfsList from "./views/TyPdfsList/TyPdfsList";
import SyPdfsList from './views/SyPdfsList/SyPdfsList';
import FyPdfsList from './views/FyPdfsList/FyPdfsList';
import Admin from './Admin/Admin';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/TypdfsList" element={<TyPdfsList />} />
          <Route path="/SyPdfsList" element={<SyPdfsList />} />
          <Route path="FyPdfsList" element={<FyPdfsList />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App