import { useState } from 'react'
import Header from './layouts/Header';
import Footer from "./layouts/Footer";
import Equipo from "./Equipo";
import NotFound from "./NotFound";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Routes, Route } from "react-router-dom";
import './App.css'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path="/" element={<></>} />
        <Route path='/feed' element={<></>}></Route>
        <Route path='/productes' element={<></>}></Route>
        <Route path='/cart' element={<></>}></Route>
        <Route path='/citas' element={<></>}></Route>
        <Route path='/equipo' element={<Equipo></Equipo>}></Route>
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
      <Footer />
    </>
  )
}

export default App
