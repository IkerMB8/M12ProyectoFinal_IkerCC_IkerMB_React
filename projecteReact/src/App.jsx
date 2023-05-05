import { useState } from 'react';
import Account  from './auth/Account';
import Home from './Home';
import Header from './layouts/Header';
import Footer from "./layouts/Footer";
import Equipo from "./Equipo";
import Salon from "./Salon";
import Colecciones from "./Colecciones";
import NotFound from "./NotFound";
import Contacta from "./Contacta";

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
              <Route path="/" element={<Home></Home>} />
              <Route path='/feed' element={<></>} />
              <Route path='/cart' element={<></>} />
              <Route path='/citas' element={<></>} />
              <Route path='/colecciones' element={<Colecciones></Colecciones>} />
              <Route path='/salon' element={<Salon></Salon>} />
              <Route path='/contacta' element={<Contacta></Contacta>}></Route>
              <Route path='/equipo' element={<Equipo/>} />
              <Route path='/cuenta' element={<Account/>} />
            </Routes>
            <Footer />
           </>
      </UserContext.Provider>
    </>
  )
}