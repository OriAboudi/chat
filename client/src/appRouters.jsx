import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './comps_general/header'
import Home from './comps_pages/home'
import Page404 from './comps_pages/page404'
import RealChat from './comps_pages/realChat'
import Socket from './comps_pages/socket'

export default function AppRouters() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/socket" element={<Socket />} />
        <Route path="/realChat" element={<RealChat />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  )
}
