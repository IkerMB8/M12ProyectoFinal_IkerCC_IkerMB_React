import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './header.css';
import { useContext } from "react";
import { Cart } from "../Cart";
import CartProduct from "../components/CartProduct";

export default function Header() {
  const location = useLocation();

  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const openModalBtn = document.getElementById("openModalBtn");
    const modal = document.getElementById("exampleModal");
    const closeBtn = document.getElementsByClassName("close")[0];

    openModalBtn.addEventListener("click", function () {
      modal.style.display = "block";
    });

    closeBtn.addEventListener("click", function () {
      modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  }, []);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substr(1); // Eliminar el símbolo '#' del hash
      scrollToElement(id);
    }
  }, [location]);

  const cart = useContext(Cart);
  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  const checkout = async () => {
    try {
      const response = await fetch("http://equip11.insjoaquimmir.cat/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items: cart.items }),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData.url);
        if (responseData.url) {
          window.location.assign(responseData.url);
        }
      } else {
        console.log("Error in checkout request:", response.status);
      }
    } catch (error) {
      console.log("Error in checkout request:", error);
    }
  };

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
                  <a className="menu-link" type="button" id="openModalBtn">
                    <span>
                      <i className="bi bi-cart-fill" />
                    </span>
                    {productsCount > 0 && (
                      <span className="cart-badge">{productsCount}</span>
                    )}
                  </a>
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
      <div className="modal" id="exampleModal">
        <div className="modal-content">
            <div className='modal-header'>
              <h1>Mi Cesta</h1>
              <button type="button" className='close'><i className="bi bi-x"></i></button>
            </div>
            <div>
              {productsCount > 0 ? (
                <div >
                  {cart.items.map((product, index) => (
                    <CartProduct
                      id={product.id}
                      quantity={product.quantity}
                      key={index}
                    />
                  ))}

                  <h4>
                    Total:{" "}
                    {cart
                      .getTotal()
                      .toFixed(2)
                      .toString()
                      .replace(".", ",")
                      .replace(/\,00/, "")}
                    €
                  </h4>
                </div>
              ) : (
                <div style={{marginTop: "20px"}}>
                  <img src="/NotFound.svg" alt="empty cart magnifying glass"/>
                  <div>
                    <span className='mensajevacio'>Tu carrito está vacio</span>
                    <br></br>
                    <span className='mensajevacio2'>Explora multitud de artículos a buen precio</span>
                  </div>
                  <Link to="/productos">
                    <button className='botonexplorar'>
                      <div>Explorar</div>
                    </button>
                  </Link>
                </div>
              )}
            </div>
            {productsCount > 0 && (
              <div className='modal-footer'>
                <button type="button" onClick={checkout}>Checkout</button>
              </div>
            )}
        </div>
      </div>
    </header>
  );
}
