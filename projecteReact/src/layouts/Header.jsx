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
                <li id="menu-item-187" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-187">
                  <Link to="/#Equipo" className="menu-link">
                    <span className="text-wrap">El equipo</span>
                  </Link>
                </li>
                <li id="menu-item-667" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-667">
                  <Link to="/#Servicios" className="menu-link">
                    <span className="text-wrap">Servicios</span>
                  </Link>
                </li>
                <li id="menu-item-189" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-189">
                  <Link to="/#Salon" className="menu-link">
                    <span className="text-wrap">El Salón</span>
                  </Link>
                </li>
                <li id="menu-item-171" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-171">
                  <Link to="/#Premios" className="menu-link">
                    <span className="text-wrap">Premios</span>
                  </Link>
                </li>
                <li id="menu-item-171" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-171">
                  <Link to="/#Colecciones" className="menu-link">
                    <span className="text-wrap">Colecciones</span>
                  </Link>
                </li>
                <li id="menu-item-504" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-504">
                  <Link to="/#CHR" className="menu-link">
                    <span className="text-wrap">CHR Academy</span>
                  </Link>
                </li>
                <li id="menu-item-534" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-534">
                  <Link to="/feed" className="menu-link">
                    <span className="text-wrap">Feed</span>
                  </Link>
                </li>
                <li id="menu-item-601" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-601">
                  <Link to="/citas" className="menu-link">
                    <span className="text-wrap">Citas</span>
                  </Link>
                </li>
                <li id="menu-item-703" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-703">
                  <Link to="/contacta" className="menu-link">
                    <span className="text-wrap">Contacta</span>
                  </Link>
                </li>
                <li id="menu-item-719" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-719">
                  <Link to="/carrito" className="menu-link">
                    <span className="text-wrap">
                      <i className="bi bi-cart-fill" />
                    </span>
                  </Link>
                </li>
                <li id="menu-item-720" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-720">
                  <Link to="/cuenta" className="menu-link">
                    <span className="text-wrap">
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
