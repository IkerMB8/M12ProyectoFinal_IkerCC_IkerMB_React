import './header.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';

export default function Header() {
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  // Close the dropdown if the user clicks outside of it
  window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  return (
    <>
      <div id="site-header-inner" className="clr container">
        <div id="site-logo" className="clr" itemScope="" itemType="https://schema.org/Brand">
          <div id="site-logo-inner" className="clr">
            <a href="/" className="custom-logo-link" rel="home" aria-current="page"><img width="389" height="316" src="https://www.christianrioshaircouture.com/wp-content/uploads/2021/09/cropped-Logo-CHR_sin-fondo_black.png" className="custom-logo" alt="Christian Ríos Hair Couture" decoding="async" srcSet="https://www.christianrioshaircouture.com/wp-content/uploads/2021/09/cropped-Logo-CHR_sin-fondo_black.png 389w, https://www.christianrioshaircouture.com/wp-content/uploads/2021/09/cropped-Logo-CHR_sin-fondo_black-300x244.png 300w" sizes="(max-width: 389px) 100vw, 389px" /></a>
          </div>
        </div>
        <div id="site-navigation-wrap" className="clr">
          <nav id="site-navigation" className="navigation main-navigation clr" itemScope="itemscope" itemType="https://schema.org/SiteNavigationElement" role="navigation">
            <ul id="menu-principal" className="main-menu dropdown-menu sf-menu">
              <li id="menu-item-187" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-187">
                <a href="#linkEquipo" className="menu-link">
                  <span className="text-wrap">El equipo</span>
                </a>
              </li>
              <li id="menu-item-667" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-667">
                <a href="#linkServicios" className="menu-link">
                  <span className="text-wrap">Servicios</span>
                </a>
              </li>
              <li id="menu-item-189" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-189">
                <a href="#linkSalon" className="menu-link">
                  <span className="text-wrap">El Salón</span>
                </a>
              </li>
              <li id="menu-item-171" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-171">
                <a href="#linkPremios" className="menu-link">
                  <span className="text-wrap">Premios</span>
                </a>
              </li>
              <li id="menu-item-171" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-171">
                <a href="#linkColecciones" className="menu-link">
                  <span className="text-wrap">Colecciones</span>
                </a>
              </li>
              <li id="menu-item-504" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-504">
                <a href="#linkCHR" className="menu-link">
                  <span className="text-wrap">CHR Academy</span>
                </a>
              </li>
              <li id="menu-item-530" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-530">
                <a href="/feed" className="menu-link">
                  <span className="text-wrap">Feed</span>
                </a>
              </li>
              <li id="menu-item-530" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-530">
                <a href="/citas" className="menu-link">
                  <span className="text-wrap">Citas</span>
                </a>
              </li>
              <li id="menu-item-530" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-530">
                <a href="/productos" className="menu-link">
                  <span className="text-wrap">Productos</span>
                </a>
              </li>
              <li id="menu-item-190" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-190">
                <a href="#contacto" className="menu-link">
                  <span className="text-wrap">Contacta</span>
                </a>
              </li>
              <li id="menu-item-190" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-190">
                <a href="/carrito" className="menu-link">
                  <span className="text-wrap"><i className='bi bi-cart-fill'></i></span>
                </a>
              </li>
              <li id="menu-item-190" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-190">
                <a href="/cuenta" className="menu-link">
                  <span className="text-wrap"><i className='bi bi-person-fill'></i></span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        
      </div>
    </>
  );
}