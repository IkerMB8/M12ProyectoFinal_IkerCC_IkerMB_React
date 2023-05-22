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
    const { horasOcupadas, Fecha } = useSelector((state) => state.citas);
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

    
    const [activeButtons, setActiveButtons] = useState({});
    const handleButtonClick = (fecha, hora, index) => {
        dispatch(setFecha(`${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDate()} ${hora}`, this));
        setActiveButtons((prevState) => ({
            ...prevState,
            [index]: hora,
        }));
    };
    

    useEffect(() => {
        dispatch(getCitas());
    }, []);

    const renderHorasDisponibles = (fecha, index) => {
        const horasDisponibles = ['09:00:00', '10:00:00', '11:00:00', '12:00:00'];
      
        const horasOcupadasFecha = horasOcupadas.filter((horaOcupada) => {
          const fechaOcupada = new Date(horaOcupada);
          return (
            fechaOcupada.getFullYear() === fecha.getFullYear() &&
            fechaOcupada.getMonth() === fecha.getMonth() &&
            fechaOcupada.getDate() === fecha.getDate()
          );
        });
      
        let horaInicio = new Date(
          fecha.getFullYear(),
          fecha.getMonth(),
          fecha.getDate(),
          9,
          0,
          0
        ); // Hora de inicio de la peluquería
        const horaFin = new Date(
          fecha.getFullYear(),
          fecha.getMonth(),
          fecha.getDate(),
          13,
          0,
          0
        ); // Hora de fin de la peluquería
      
        const horasFiltradas = [];
      
        while (horaInicio < horaFin) {
          const hora = horaInicio.getHours().toString().padStart(2, '0') + ':' +
            horaInicio.getMinutes().toString().padStart(2, '0') + ':' +
            horaInicio.getSeconds().toString().padStart(2, '0');
      
          const fechaHora = new Date(fecha.getFullYear(), fecha.getMonth(), fecha.getDate(), hora.split(':')[0], hora.split(':')[1], hora.split(':')[2]);
          
          const duracionServicio = 60; // Duración del servicio en minutos (valor ficticio, debes obtenerlo de tu API)
          const duracionTotal = duracionServicio + 15;
      
          const horaFinServicio = new Date(fechaHora.getTime() + duracionTotal * 60000); // Suma la duración total del servicio en milisegundos
          
          const ocupada = horasOcupadasFecha.some((horaOcupada) => {
            const fechaOcupada = new Date(horaOcupada);
            return fechaHora <= fechaOcupada && fechaOcupada < horaFinServicio;
          });
      
          if (!ocupada) {
            horasFiltradas.push(hora);
          }
      
          horaInicio = horaFinServicio;
        }
      
        if (horasFiltradas.length === 0) {
          return <p style={{ color: 'black' }}>No hay horas disponibles para esta fecha.</p>;
        }
      
        return horasFiltradas.map((hora) => (
          <button
            key={hora}
            className={`btn horaDisponible m-2 ${
              activeButtons[index] === hora ? 'active' : ''
            }`}
            onClick={() => handleButtonClick(fecha, hora, index)}
          >
            {hora}
          </button>
        ));
      };      

    const handleConfirmarClick = () => {
        if (Fecha === null || Fecha === "") {
            alert('Por favor, selecciona una fecha.')
            return;
        }

        dispatch(crearCita(idCliente, navigate));
    };

    return (
        <>
            <div className='divCita2'>
                {fechas.map((fecha, index) => (
                    <div key={index}>
                        <Accordion title={`${fecha.getDate()}-${fecha.getMonth() + 1}-${fecha.getFullYear()}`} index={index} openIndex={openIndex} setOpenIndex={setOpenIndex}>
                            <div className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                <div className="card-body">
                                    {renderHorasDisponibles(fecha, index)}
                                </div>
                            </div>
                        </Accordion>
                    </div>
                ))}

                <div className="row py-4">
                    <div className="col">
                        <div className="text-center">
                            <input id="especialistaId" name="especialistaId" type="hidden" value="702" />
                            <a className="btn btn-success btn-large" style={{ color: "white" }} onClick={() => handleConfirmarClick()}>Confirmar</a>
                            <br />
                            <a href="#" style={{ color: "white" }} type="button" className="btn btn-danger mt-2" id="boton_modal_cita" onClick={() => dispatch(reiniciarCitas())}>Tornar</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}