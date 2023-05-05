import { useState } from 'react';
import Account  from './auth/Account';
import Header from './layouts/Header';
import Footer from "./layouts/Footer";
import Equipo from "./Equipo";
import Salon from "./Salon";
import Colecciones from "./Colecciones";
import NotFound from "./NotFound";
// import Contacta from "./Contacta";
// import Map from "./Map;"
// import Productes from "./Productes";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Routes, Route } from "react-router-dom";
import './App.css';
import { UserContext } from "./userContext";

export default function App() {

  let [authToken, setAuthToken] = useState("");
  let [usuari, setUsuari] = useState("");
  let [idUsuari, setIdUsuari] = useState("");

  return (
    <>
      <UserContext.Provider value= { { usuari, setUsuari, authToken, setAuthToken, idUsuari, setIdUsuari }}>
          <> 
            <Header />
            <Routes>
              <Route path='*' element={<NotFound />} />
              <Route path="/" element={<></>} />
              <Route path='/feed' element={<></>} />
              <Route path='/cart' element={<></>} />
              <Route path='/citas' element={<></>} />
              <Route path='/cuenta' element={<Account/>} />
            </Routes>
            <Footer />
           </>
      </UserContext.Provider>
    </>
  )
}