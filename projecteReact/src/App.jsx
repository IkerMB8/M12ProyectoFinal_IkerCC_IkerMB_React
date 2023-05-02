import { useState } from 'react'
import LoginRegister  from './auth/LoginRegister';
import Header from './layouts/Header';
import Footer from "./layouts/Footer";
import Equipo from "./Equipo";
import Salon from "./Salon";
import Colecciones from "./Colecciones";
// import Contacta from "./Contacta";
// import Map from "./Map;"
// import Productes from "./Productes";
import NotFound from "./NotFound";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Routes, Route } from "react-router-dom";
import './App.css'

function App() {
  return (
    <>
      {/* <UserContext.Provider value= { { usuari, setUsuari,authToken,setAuthToken, idUsuari, setIdUsuari }}>
        {authToken ? (
          <> */}
            <Header />
            <Routes>
              <Route path='*' element={<NotFound />} />
              <Route path="/" element={<></>} />
              <Route path='/feed' element={<></>}></Route>
              {/* <Route path='/productes' element={<Productes></Productes>}></Route> */}
              <Route path='/cart' element={<></>}></Route>
              <Route path='/citas' element={<></>}></Route>
              <Route path='/colecciones' element={<Colecciones></Colecciones>}></Route>
              <Route path='/salon' element={<Salon></Salon>}></Route>
              {/* <Route path='/contacta' element={<Contacta></Contacta>}></Route> */}
              <Route path='/equipo' element={<Equipo></Equipo>}></Route>
              <Route path='/loginregister' element={<LoginRegister></LoginRegister>}></Route>
              {/* <Route path="/about" element={<About />} /> */}
            </Routes>
            <Footer />
          {/* </>
        ) : (
          <LoginRegister />
        )}
      </UserContext.Provider> */}
    </>
  )
}

export default App
