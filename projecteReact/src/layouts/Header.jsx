import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './header.css';

export default function Header() {
  const location = useLocation();

  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substr(1); // Eliminar el símbolo '#' del hash
      scrollToElement(id);
    }
  }, [location]);

  return (
    <header id="site-header">
      <div id="site-header-inner" className="clr container">
        <div className="left">
          <div id="site-logo" className="clr" itemScope="" itemType="https://schema.org/Brand">
            <div id="site-logo-inner" className="clr">
              <Link to="/" className="custom-logo-link" rel="home" aria-current="page">
                <img
                  width="389"
                  height="316"
                  src="/chr.png"
                  className="custom-logo"
                  alt="Christian Ríos Hair Couture"
                  decoding="async"
                  sizes="(max-width: 389px) 100vw, 389px"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="right">
          <div id="site-navigation-wrap" className="clr">
            <nav id="site-navigation" className="navigation main-navigation clr" itemScope="itemscope" itemType="https://schema.org/SiteNavigationElement" role="navigation">
              <ul id="menu-principal" className="main-menu dropdown-menu sf-menu">
                <li className="menu-item">
                  <Link to="/#Equipo" className="menu-link">
                    <span>El equipo</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/#Servicios" className="menu-link">
                    <span>Servicios</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/#Salon" className="menu-link">
                    <span>El Salón</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/#Premios" className="menu-link">
                    <span>Premios</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/#Colecciones" className="menu-link">
                    <span>Colecciones</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/#CHR" className="menu-link">
                    <span>CHR Academy</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/feed" className="menu-link">
                    <span>Feed</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/citas" className="menu-link">
                    <span>Citas</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/productos" className="menu-link">
                    <span>Productos</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/contacta" className="menu-link">
                    <span>Contacta</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/carrito" className="menu-link">
                    <span>
                      <i className="bi bi-cart-fill" />
                    </span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/cuenta" className="menu-link">
                    <span>
                      <i className="bi bi-person-fill" />
                    </span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
