import LoginRegister from './LoginRegister';
import { UserContext } from "../userContext";
import { useContext } from "react";
import './cuenta.css';
import { Link, useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';

export default function Account() {

    let {authToken, setAuthToken, usuari, setUsuari, idUsuari, setIdUsuari} = useContext(UserContext);

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
        <>
            {authToken ? (
                <div className='positioningCuenta'>
                    <div className='cuentaBox'>
                        <div className='leftCuenta'>
                            <div className='arribaLeftCuenta'>
                                <img className='fotoperfil' src='/sinfoto.jpg'></img>
                                <h1>Cristiano Ronaldo Dos Santos Aveiro</h1>
                            </div>
                            <div className='abajoLeftCuenta'>
                                
                                <Link to="#datos">Mis Datos</Link>
                                <Link to='#pedidos'>Pedidos</Link>
                                <Link to='#citas'>Citas</Link>
                            </div>
                        </div>
                        <div className='rightCuenta'>
                            <div className='datos' id='datos'>
                                <h2>Datos de mi Cuenta</h2>
                                <div className='arribaDatos'>
                                    <div className='nickDatos'>
                                        <h3>Nick</h3>
                                        <form>
                                            <input type='text'/>
                                        </form>
                                    </div>
                                    <div className='nacimientoDatos'>
                                        <h3>Fecha de Nacimiento</h3>
                                        <form>
                                            <input type='date'/>
                                        </form>
                                    </div>
                                </div>
                                <div className='abajoDatos'>
                                    <form>
                                        <input type="button" value="Guardar" id="btnSend"/> 
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
                                        <input type="button" value="Guardar Cambios" id="btnSend"/> 
                                    </form>
                                </div>
                            </div>

                            <div className='datos' id='citas'>
                                <h2>Historial de Citas</h2>
                                <div className='arribaDatos'>
                                    <div className='nickDatos'>
                                        <h3>Servicio</h3>
                                        <h4>Corte de Pelo para niño</h4>
                                    </div>
                                    <div className='nickDatos'>
                                        <h3>Fecha de la Cita</h3>
                                        <h4></h4>
                                    </div>
                                    <div className='nickDatos'>
                                        <h3>Especialista</h3>
                                        <h4></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            ) : (
                <LoginRegister/>
            )}
        </>
    );
}