import LoginRegister from './LoginRegister';
import { UserContext } from "../userContext";
import { useContext } from "react";
import './cuenta.css';
import { Link, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { getCliente } from "../slices/cuenta/thunks";
import { useSelector,useDispatch } from "react-redux";

export default function Account() {
    const { Cliente, Citas, Productos, isLoading } = useSelector((state) => state.cuenta);
    let { authToken } = useContext(UserContext);
    const dispatch = useDispatch();
    useEffect(() => {
        if (authToken) {
            dispatch(getCliente(authToken));
        }
    }, [authToken]);

    const location = useLocation();

    const scrollToElement = (id) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    useEffect(() => {
      if (location.hash) {
        const id = location.hash.substr(1);
        scrollToElement(id);
      }
    }, [location]);

    
    return (
        <>
            {authToken ? (
                <div className='positioningCuenta'>
                    {isLoading ? (
                        <div className="contenidosvg">
                            <svg  className="load" version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                width="40px" height="40px" viewBox="0 0 50 50" xmlSpace="preserve">
                                <path fill="#000" d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z">
                                <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.6s" repeatCount="indefinite"/>
                                </path>
                            </svg>
                        </div>
                        
                    ) : (
                            <div className='cuentaBox'>
                                <div className='leftCuenta'>
                                    <div className='arribaLeftCuenta'>
                                        <img className='fotoperfil' src='/sinfoto.jpg'></img>
                                        <h1>{Cliente.Nombre} {Cliente.Apellido}</h1>
                                    </div>
                                    <div className='abajoLeftCuenta'>
                                        
                                        <Link to="#datos">Mis Datos</Link>
                                        <Link to='#pedidos'>Pedidos</Link>
                                        <Link to='#citas'>Citas</Link>
                                        <button style={{marginTop: "5%", fontWeight: "600",marginLeft: "15%", borderRadius: "10px"}}>Cerrar Sesión</button>
                                    </div>
                                </div>
                                <div className='rightCuenta'>
                                    <div className='datos' id='datos'>
                                        <h2>Datos de mi Cuenta</h2>
                                        <div className='arribaDatos'>
                                            <div className='nickDatos'>
                                                <h3>Telefono</h3>
                                                <form>
                                                    <input type='text' value={Cliente.Telefono} readOnly/>
                                                </form>
                                            </div>
                                            <div className='nacimientoDatos'>
                                                <h3>Año Nacimiento</h3>
                                                <form>
                                                    <input type='number' value={Cliente.AnioNacimiento} readOnly/>
                                                </form>
                                            </div>
                                        </div>
                                        <div className='abajoDatos'>
                                            <form>
                                                <input type="button" value="Guardar" id="btnSend1"/> 
                                            </form>
                                        </div>
                                        <hr className='hrCuenta'></hr>
                                        <h2>Contraseña</h2>
                                        <div className='arribaDatos'>
                                            <div className='nickDatos'>
                                                <h3>Antigua Contraseña</h3>
                                                <form>
                                                    <input type='password'/>
                                                </form>
                                            </div>
                                            <div className='nickDatos'>
                                                <h3>Nueva Contraseña</h3>
                                                <form>
                                                    <input type='password'/>
                                                </form>
                                            </div>
                                            <div className='nickDatos'>
                                                <h3>Repetir Contraseña</h3>
                                                <form>
                                                    <input type='password'/>
                                                </form>
                                            </div>
                                        </div>
                                        <div className='abajoDatosContra'>
                                            <div>
                                                <div>
                                                    <h4>Seguridad</h4>
                                                </div>
                                                <div>
                                                    <p><span>·</span> Utiliza entre 6 y 64 carácteres.</p>
                                                </div>
                                            </div>
                                            <form>
                                                <input type="button" value="Guardar Cambios" id="btnSend2"/> 
                                            </form>
                                        </div>
                                    </div>

                                    <div className='datos' id='citas'>
                                        <h2>Historial de Citas</h2>
                                        <div className='arribaDatos'>
                                            <div className='nickDatos'>
                                                <h3>Servicio</h3>
                                                <h4>Corte de Pelo para Niño</h4>
                                                <h4>Mechas Balayage</h4>
                                                <h4>Corte de Pelo para Adulto</h4>
                                            </div>
                                            <div className='nickDatos'>
                                                <h3>Fecha de la Cita</h3>
                                                <h4>13/05/2023</h4>
                                                <h4>4/4/2023</h4>
                                                <h4>27/2/2023</h4>

                                            </div>
                                            <div className='nickDatos'>
                                                <h3>Especialista</h3>
                                                <h4>Christian Ríos</h4>
                                                <h4>Christian Ríos</h4>
                                                <h4>Claudio Guirao</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    )}
                </div>
                
            ) : (
                <LoginRegister/>
            )}
        </>
    );
}