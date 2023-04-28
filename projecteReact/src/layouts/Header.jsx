import './header.css';
import  React  from 'react';
import { Link } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';

export default function Header() {
  let [ roles, setRoles ] = useState([]);
  let [ nom, setNom ] = useState("");

  const getUser = async (e) => {
    try {
      const data = await fetch("https://backend.insjoaquimmir.cat/api/user", {
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": 'Bearer '  + authToken,
        },
        method: "GET",
      })
      const resposta = await data.json();
      if (resposta.success === true) {
        setNom(resposta.user.name);
        setRoles(resposta.roles);
      }else{
        console.log("La resposta no ha triomfat");
      }            
    } catch {
      console.log("Error");
    }
  };

  useEffect(()=>{
    getUser();
  }, [])

  return (
    <>
      <nav className="navegador">
        <div className="left">
            <Link to="/"><img className='imagenLogo' src='/public/chr.png'></img> </Link>
        </div>
        <div className="center">
          {/* <Link to="/about">About </Link> */}
        </div>
        <div className="right">
          <Link to="/equipo">EL EQUIPO</Link>
          <Link to="/servicios">SERVICIOS</Link>
          <Link to="/salon">EL SALÓN</Link>
          <Link to="/colecciones">COLECCIONES</Link>
          <Link to="/chracademy">CHR ACADEMY</Link>
          <Link to="/feed">FEED</Link>
          <Link to="/citas">CITAS</Link>
          <Link to="/productes">PRODUCTES</Link>
          <Link to="/contacta">CONTACTA</Link>
          <div className="search-container">
            <form>
              <input type="text" placeholder="Search..." name="search"/>
              <button className='btnSearch' title={"Buscar"}><i class="bi bi-search"></i></button>
            </form>
          </div>
          <Link to="/cart"><i class="bi bi-cart-fill"></i></Link>
          <p className='nom'>
            {nom} 
            { roles.map (  (v)=> ( 
              <span key={v}> ( {v} ) </span>
            ) ) }
          </p>
        </div>
      </nav>
    </>
  );
}