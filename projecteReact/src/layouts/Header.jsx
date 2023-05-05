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
          <a href="#/"><img className='imagenLogo' src='/chr.png'></img></a>
        </div>
        <div className="center">
          {/* <Link to="/about">About </Link> */}
        </div>
        <div className="right">
          <a href="#linkEquipo">EL EQUIPO</a>
          <a href="#linkServicios">SERVICIOS</a>
          <a href="#linkSalon">EL SALÓN</a>
          <a href="#linkPremios">PREMIOS</a>
          <a href="#linkColecciones">COLECCIONES</a>
          <a href="#linkCHR">CHR ACADEMY</a>
          <a href="/feed">FEED</a>
          <a href="/citas">CITAS</a>
          <a href="/productos">PRODUCTOS</a>
          <a href="#linkContacta">CONTACTA</a>
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
          <Link to="/loginregister"><i class="bi bi-person-fill"></i></Link>
        </div>
      </nav>
    </>
  );
}