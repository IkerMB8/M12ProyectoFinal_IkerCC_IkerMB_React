import React from 'react';
import './citas2.css';

export default function Citas2() {

    return (
    <>
        <div id="divPedirCita" class="col py-4 h-100 align-items-center">
            <input value="1072" type="hidden" class="form-control userId" name="userId" id="userId" placeholder="Nombre" required="" />
            <input value="26" type="hidden" class="form-control nombre" name="especialidadId" id="especialidadId" placeholder="especialidadId" required="" />
            <input value="702" type="hidden" class="form-control fisioIdCita" name="fisioIdCita" id="fisioIdCita" />
            <input value="1" type="hidden" class="form-control boxIdCita" name="boxIdCita" id="boxIdCita"/>
            <input value="" type="hidden" class="form-control diaCita" name="diaCita" id="diaCita"/>
            <div class="form-group">
                <label for="nombre" class="form-label nombre">Introdueix el teu nom</label>
                <input type="text" class="form-control" name="nombre" id="nombreCita" placeholder="Nom" required="" />
                <div class="validate"></div>
            </div>
            <div class="form-group">
                <label for="nombre" class="form-label">Introdueix el teu telèfon</label>
                <input type="tel" class="form-control telefono" id="telefonoCita" name="telefono" maxlength="15" placeholder="Telèfon" required="" />
                <div class="validate"></div>
            </div>

            <p id="error_message" style="display:none; color: red;">*Faltan campos por rellenar.</p>

            Aquestes són les cites disponibles per a  <b>Cardiologia visita de seguiment...</b>
            <input type="hidden" id="especialidadId" value="26" />
            <div id="prueba"><div class="row pb-4">
                <div class="col">
                    <a class="btn btnBooking" onclick="cambioPrevCitas('2023-05-16')"> <i class="icofont-arrow-left"></i> <i class="icofont-ui-calendar"></i> </a>
                    <a class="btn btnBooking float-right" onclick="cambioPostCitas('2023-05-23')"> <i class="icofont-ui-calendar"></i> <i class="icofont-arrow-right"></i> </a>
                </div>
            </div>
                <div class="accordion" id="accordionExample">
                    <div class="card">
                        <div class="card-header" id="headingOne">
                            <h2 class="mb-0">
                                <button class="btn btn-block collapsed" type="button" data-toggle="collapse" data-target="#collapseOne2023-05-16" aria-expanded="false" aria-controls="collapseOne">16-05-2023</button>
                            </h2>
                        </div>
                        <div id="collapseOne2023-05-16" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample" style="">
                            <div class="card-body">
                                <p class="text-center">No disponible.</p>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingOne">
                            <h2 class="mb-0">
                                <button class="btn btn-block collapsed" type="button" data-toggle="collapse" data-target="#collapseOne2023-05-18" aria-expanded="false" aria-controls="collapseOne">
                                    18-05-2023
                                </button>
                            </h2>
                        </div>
                        <div id="collapseOne2023-05-18" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample" style="">
                            <div class="card-body">
                                <p class="text-center">No disponible.</p>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingOne">
                            <h2 class="mb-0">
                                <button class="btn btn-block" type="button" data-toggle="collapse" data-target="#collapseOne2023-05-23" aria-expanded="true" aria-controls="collapseOne">
                                    23-05-2023
                                </button>
                            </h2>
                        </div>
                        <div id="collapseOne2023-05-23" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample" style="">
                            <div class="card-body">
                                <button class="btn horaDisponible m-2" onclick="setCita('2023-05-23,09:00:00', this)">09:00:00</button>
                                <button class="btn horaDisponible m-2" onclick="setCita('2023-05-23,09:30:00', this)">09:30:00</button>
                                <button class="btn horaDisponible m-2" onclick="setCita('2023-05-23,10:00:00', this)">10:00:00</button>
                                <button class="btn horaDisponible m-2" onclick="setCita('2023-05-23,10:30:00', this)">10:30:00</button>
                                <button class="btn horaDisponible m-2" onclick="setCita('2023-05-23,11:00:00', this)">11:00:00</button>
                                <button class="btn horaDisponible m-2" onclick="setCita('2023-05-23,11:30:00', this)">11:30:00</button>
                                <button class="btn horaDisponible m-2" onclick="setCita('2023-05-23,12:00:00', this)">12:00:00</button>
                                <button class="btn horaDisponible m-2" onclick="setCita('2023-05-23,12:30:00', this)">12:30:00</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row py-4">
                <div class="col">
                    <div class="text-center">
                        <input id="especialistaId" name="especialistaId" type="hidden" value="702" />
                        <a class="btn btn-success btn-large" style="color:white;" onclick="crearCita()">Confirmar</a>
                        <br />
                        <a href="https://www.fisiobat.com/booking" style="color:white;" type="button" class="btn btn-danger mt-2" id="boton_modal_cita">Tornar</a>
                    </div>
                </div>
            </div>
        </div>
    </>
);
}