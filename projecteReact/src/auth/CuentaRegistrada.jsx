import  React  from 'react';
import './cuenta.css';

export default function CuentaRegistrada() { 
    
    return (
        <>
            <div className='positioningCuenta'>
                <div className='cuentaBox'>
                    <div className='leftCuenta'>
                        <div className='arribaLeftCuenta'>
                            <img className='fotoperfil' src='/sinfoto.jpg'></img>
                            <h1>Maria Del Carmen García Rodríguez</h1>
                        </div>
                        <div className='abajoLeftCuenta'>
                            <a href='#datos'>Mis Datos</a>
                            <a href=''>Pedidos</a>
                            <a href=''>Citas</a>
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
                    </div>
                </div>
            </div>
        </>
    );
}