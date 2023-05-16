import React, { useEffect } from 'react';
import './citas2.css';
import Accordion from './Accordion';
import { useState } from 'react';
import { setFecha } from "./slices/citas/citaSlice";
import { crearCita, reiniciarCitas } from "./slices/citas/thunks";
import { useDispatch } from "react-redux";
import { UserContext } from "./userContext";
import { useContext } from "react";

export default function Citas2() {

    let {authToken, setAuthToken, usuari, setUsuari, idUsuari, setIdUsuari} = useContext(UserContext);
    const dispatch = useDispatch();
    const [openIndex, setOpenIndex] = useState(-1);
    const fechaActual = new Date();
    const fechas = [];
    for (let i = 0; i < 7; i++) {
        const fecha = new Date();
        fecha.setDate(fechaActual.getDate() + i);
        fechas.push(fecha);
    }
    return (
        <>
            {fechas.map((fecha, index) => (
                <div key={index}>
                    <Accordion title={`${fecha.getDate()}-${fecha.getMonth() + 1}-${fecha.getFullYear()}`} index={index} openIndex={openIndex} setOpenIndex={setOpenIndex}>
                        <div className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div className="card-body">
                                <button className="btn horaDisponible m-2" onClick={() => dispatch(setFecha(`${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDate()}T09:00:00`, this))}>09:00:00</button>
                                <button className="btn horaDisponible m-2" onClick={() => dispatch(setFecha(`${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDate()}T10:00:00`, this))}>10:00:00</button>
                                <button className="btn horaDisponible m-2" onClick={() => dispatch(setFecha(`${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDate()}T11:00:00`, this))}>11:00:00</button>
                                <button className="btn horaDisponible m-2" onClick={() => dispatch(setFecha(`${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDate()}T12:00:00`, this))}>12:00:00</button>
                            </div>
                        </div>
                    </Accordion>
                </div>
            ))}
            
            <div className="row py-4">
                <div className="col">
                    <div className="text-center">
                        <input id="especialistaId" name="especialistaId" type="hidden" value="702" />
                        <a className="btn btn-success btn-large" style={{color:"white"}} onClick={() => dispatch(crearCita(authToken))}>Confirmar</a>
                        <br />
                        <a href="#" style={{color:"white"}} type="button" className="btn btn-danger mt-2" id="boton_modal_cita" onClick={() => dispatch(reiniciarCitas())}>Tornar</a>
                    </div>
                </div>
            </div>
        </>
    );
}