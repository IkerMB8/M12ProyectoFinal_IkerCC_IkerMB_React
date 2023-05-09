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
      <div id="site-header-inner" class="clr container">
        <div className='left'>
          <div id="site-logo" class="clr" itemscope="" itemtype="https://schema.org/Brand">
            <div id="site-logo-inner" class="clr">
              <a href="/" class="custom-logo-link" rel="home" aria-current="page"><img width="389" height="316" src="https://www.christianrioshaircouture.com/wp-content/uploads/2021/09/cropped-Logo-CHR_sin-fondo_black.png" class="custom-logo" alt="Christian Ríos Hair Couture" decoding="async" srcset="https://www.christianrioshaircouture.com/wp-content/uploads/2021/09/cropped-Logo-CHR_sin-fondo_black.png 389w, https://www.christianrioshaircouture.com/wp-content/uploads/2021/09/cropped-Logo-CHR_sin-fondo_black-300x244.png 300w" sizes="(max-width: 389px) 100vw, 389px" /></a>
            </div>
          </div>
        </div>
        <div>

        </div>
        <div className='right'>
          <div id="site-navigation-wrap" class="clr">
            <nav id="site-navigation" class="navigation main-navigation clr" itemscope="itemscope" itemtype="https://schema.org/SiteNavigationElement" role="navigation">
              <ul id="menu-principal" class="main-menu dropdown-menu sf-menu">
                <li id="menu-item-187" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-187">
                  <a href="#linkEquipo" class="menu-link">
                    <span class="text-wrap">El equipo</span>
                  </a>
                </li>
                <li id="menu-item-667" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-667">
                  <a href="#linkServicios" class="menu-link">
                    <span class="text-wrap">Servicios</span>
                  </a>
                </li>
                <li id="menu-item-189" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-189">
                  <a href="#linkSalon" class="menu-link">
                    <span class="text-wrap">El Salón</span>
                  </a>
                </li>
                <li id="menu-item-171" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-171">
                  <a href="#linkPremios" class="menu-link">
                    <span class="text-wrap">Premios</span>
                  </a>
                </li>
                <li id="menu-item-171" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-171">
                  <a href="#linkColecciones" class="menu-link">
                    <span class="text-wrap">Colecciones</span>
                  </a>
                </li>
                <li id="menu-item-504" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-504">
                  <a href="#linkCHR" class="menu-link">
                    <span class="text-wrap">CHR Academy</span>
                  </a>
                </li>
                <li id="menu-item-530" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-530">
                  <a href="/feed" class="menu-link">
                    <span class="text-wrap">Feed</span>
                  </a>
                </li>
                <li id="menu-item-530" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-530">
                  <a href="/citas" class="menu-link">
                    <span class="text-wrap">Citas</span>
                  </a>
                </li>
                <li id="menu-item-530" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-530">
                  <a href="/productos" class="menu-link">
                    <span class="text-wrap">Productos</span>
                  </a>
                </li>
                <li id="menu-item-190" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-190">
                  <a href="#contacto" class="menu-link">
                    <span class="text-wrap">Contacta</span>
                  </a>
                </li>
                <li id="menu-item-190" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-190">
                  <a href="/carrito" class="menu-link">
                    <span class="text-wrap"><i className='bi bi-cart-fill'></i></span>
                  </a>
                </li>
                <li id="menu-item-190" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-190">
                  <a href="/cuenta" class="menu-link">
                    <span class="text-wrap"><i className='bi bi-person-fill'></i></span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>        
      </div>
    </>
  );
}