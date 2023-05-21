import React, { useEffect } from 'react';
import './citas2.css';
import Accordion from './Accordion';
import { useState } from 'react';
import { setFecha } from "./slices/citas/citaSlice";
import { crearCita, reiniciarCitas, getCitas } from "./slices/citas/thunks";
import { useDispatch, useSelector } from "react-redux";
import { UserContext } from "./userContext";
import { useContext } from "react";
import { useNavigate } from 'react-router-dom';

export default function Cita2() {
    let { idCliente } = useContext(UserContext);
    const { horasOcupadas } = useSelector((state) => state.citas);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [openIndex, setOpenIndex] = useState(-1);
    const fechaActual = new Date();
    const fechas = [];
    for (let i = 0; i < 7; i++) {
        const fecha = new Date();
        fecha.setDate(fechaActual.getDate() + i);
        fechas.push(fecha);
    }

    
    const [activeButton, setActiveButton] = useState(null);
    const handleButtonClick = (fecha, hora) => {
        dispatch(setFecha(`${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDate()} ${hora}`, this));
        setActiveButton(hora);
      };
    

    useEffect(() => {
        dispatch(getCitas());
    }, []);

    const renderHorasDisponibles = (fecha) => {
        const horasDisponibles = [
            '09:00:00',
            '10:00:00',
            '11:00:00',
            '12:00:00'
        ];

        const horasOcupadasFecha = horasOcupadas.filter((horaOcupada) => {
            const fechaOcupada = new Date(horaOcupada);
            return fechaOcupada.getFullYear() === fecha.getFullYear() &&
                fechaOcupada.getMonth() === fecha.getMonth() &&
                fechaOcupada.getDate() === fecha.getDate();
        });

        const horasFiltradas = horasDisponibles.filter((hora) => {
            const fechaHora = new Date(fecha.getFullYear(), fecha.getMonth(), fecha.getDate(), hora.split(':')[0], hora.split(':')[1], hora.split(':')[2]);
            return !horasOcupadasFecha.some((horaOcupada) => {
                const fechaOcupada = new Date(horaOcupada);
                return fechaOcupada.getTime() === fechaHora.getTime();
            });
        });

        if (horasFiltradas.length === 0) {
            return <p style={{color:"black"}}>No hay horas disponibles para esta fecha.</p>;
        }

        return horasFiltradas.map((hora) => (
            <button className={`btn horaDisponible m-2 ${activeButton === hora ? 'active' : ''}`} onClick={() => handleButtonClick(fecha, hora)}>
                {hora}
            </button>
        ));
    };

    return (
        <>
            {fechas.map((fecha, index) => (
                <div key={index}>
                    <Accordion title={`${fecha.getDate()}-${fecha.getMonth() + 1}-${fecha.getFullYear()}`} index={index} openIndex={openIndex} setOpenIndex={setOpenIndex}>
                        <div className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div className="card-body">
                                {renderHorasDisponibles(fecha)}
                            </div>
                        </div>
                    </Accordion>
                </div>
            ))}

            <div className="row py-4">
                <div className="col">
                    <div className="text-center">
                        <input id="especialistaId" name="especialistaId" type="hidden" value="702" />
                        <a className="btn btn-success btn-large" style={{ color: "white" }} onClick={() => dispatch(crearCita(idCliente,navigate))}>Confirmar</a>
                        <br />
                        <a href="#" style={{ color: "white" }} type="button" className="btn btn-danger mt-2" id="boton_modal_cita" onClick={() => dispatch(reiniciarCitas())}>Tornar</a>
                    </div>
                </div>
            </div>
        </>
    );
}
